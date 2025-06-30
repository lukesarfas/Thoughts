import React, { useState, useMemo, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar, DateData } from 'react-native-calendars';
import { useJournalEntries } from '../hooks/useJournalEntries';
import { useFocusEffect } from '@react-navigation/native';

export default function CalendarScreen({ navigation }: any) {
  const { entries, loading, error, loadEntries } = useJournalEntries();
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [calendarRef, setCalendarRef] = useState<any>(null);

  // Get today's date in YYYY-MM-DD format
  const getTodayString = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  // Refresh entries when screen comes into focus
  useFocusEffect(
    React.useCallback(() => {
      loadEntries();
    }, [loadEntries])
  );

  // Handle today button press
  const handleTodayPress = () => {
    const today = getTodayString();
    setSelectedDate(today);
    // Scroll to today's date in the calendar
    if (calendarRef) {
      calendarRef.scrollToMonth(today);
    }
  };

  // Create marked dates object for calendar
  const markedDates = useMemo(() => {
    const marked: any = {};
    
    entries.forEach(entry => {
      const date = entry.timestamp.split('T')[0];
      if (marked[date]) {
        marked[date].dotColor = '#007AFF';
        marked[date].textColor = '#007AFF';
      } else {
        marked[date] = {
          marked: true,
          dotColor: '#007AFF',
          textColor: '#007AFF',
        };
      }
    });

    // Add selected date styling
    if (selectedDate && marked[selectedDate]) {
      marked[selectedDate].selected = true;
      marked[selectedDate].selectedColor = '#007AFF';
    } else if (selectedDate) {
      marked[selectedDate] = {
        selected: true,
        selectedColor: '#007AFF',
      };
    }

    return marked;
  }, [entries, selectedDate]);

  // Get entries for selected date
  const selectedDateEntries = useMemo(() => {
    if (!selectedDate) return [];
    return entries.filter(entry => {
      const entryDate = entry.timestamp.split('T')[0];
      return entryDate === selectedDate;
    });
  }, [entries, selectedDate]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const truncateText = (text: string, maxLength: number = 80) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  const getDateStats = (dateEntries: any[]) => {
    const totalWords = dateEntries.reduce((sum, entry) => {
      return sum + entry.text.split(' ').length;
    }, 0);
    
    return {
      count: dateEntries.length,
      totalWords,
      avgWords: dateEntries.length > 0 ? Math.round(totalWords / dateEntries.length) : 0,
    };
  };

  const handleDayPress = (day: DateData) => {
    setSelectedDate(day.dateString);
  };

  const handleEntryPress = (entryId: string) => {
    navigation.navigate('EntryDetail', { entryId });
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.loadingText}>Loading entries...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Journal Calendar</Text>
        <TouchableOpacity
          style={styles.todayButton}
          onPress={handleTodayPress}
        >
          <Text style={styles.todayButtonText}>Today</Text>
        </TouchableOpacity>
      </View>
      
      {error && (
        <Text style={styles.errorText}>{error}</Text>
      )}

      {/* Calendar */}
      <View style={styles.calendarContainer}>
        <Calendar
          onDayPress={handleDayPress}
          markedDates={markedDates}
          theme={{
            backgroundColor: '#ffffff',
            calendarBackground: '#ffffff',
            textSectionTitleColor: '#333333',
            selectedDayBackgroundColor: '#007AFF',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#007AFF',
            dayTextColor: '#333333',
            textDisabledColor: '#d9e1e8',
            dotColor: '#007AFF',
            selectedDotColor: '#ffffff',
            arrowColor: '#007AFF',
            monthTextColor: '#333333',
            indicatorColor: '#007AFF',
            textDayFontWeight: '400',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '500',
            textDayFontSize: 16,
            textMonthFontSize: 18,
            textDayHeaderFontSize: 14,
          }}
          ref={(ref) => setCalendarRef(ref)}
        />
      </View>

      {/* Selected Date Entries */}
      {selectedDate && (
        <View style={styles.selectedDateSection}>
          <View style={styles.dateHeader}>
            <Text style={styles.selectedDateText}>
              {formatDate(selectedDate)}
            </Text>
            <View style={styles.headerActions}>
              {selectedDateEntries.length > 0 && (
                <View style={styles.statsContainer}>
                  <Text style={styles.statsText}>
                    {selectedDateEntries.length} entry{selectedDateEntries.length !== 1 ? 'ies' : 'y'}
                  </Text>
                  <Text style={styles.statsText}>
                    {getDateStats(selectedDateEntries).totalWords} words
                  </Text>
                </View>
              )}
              <TouchableOpacity
                style={styles.insightsButton}
                onPress={() => navigation.navigate('Insights', { selectedDate })}
              >
                <Text style={styles.insightsButtonText}>Insights</Text>
              </TouchableOpacity>
            </View>
          </View>

          {selectedDateEntries.length === 0 ? (
            <View style={styles.emptyDateContainer}>
              <Text style={styles.emptyDateText}>No entries for this date</Text>
              <TouchableOpacity
                style={styles.createEntryButton}
                onPress={() => navigation.navigate('Home')}
              >
                <Text style={styles.createEntryButtonText}>Create Entry</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <ScrollView style={styles.entriesList}>
              {selectedDateEntries.map((entry) => (
                <TouchableOpacity
                  key={entry.id}
                  style={styles.entryCard}
                  onPress={() => handleEntryPress(entry.id)}
                >
                  <View style={styles.entryHeader}>
                    <Text style={styles.entryTime}>
                      {formatTime(entry.timestamp)}
                    </Text>
                    {entry.updatedAt !== entry.createdAt && (
                      <Text style={styles.editedBadge}>Edited</Text>
                    )}
                  </View>
                  <Text style={styles.entryText}>
                    {truncateText(entry.text)}
                  </Text>
                  <Text style={styles.wordCount}>
                    {entry.text.split(' ').length} words
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          )}
        </View>
      )}

      {/* No Date Selected */}
      {!selectedDate && (
        <View style={styles.noSelectionContainer}>
          <Text style={styles.noSelectionText}>
            Select a date to view your journal entries
          </Text>
          <Text style={styles.noSelectionSubtext}>
            Dates with entries are marked with blue dots
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  todayButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  todayButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  loadingText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
    color: '#666',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  calendarContainer: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  selectedDateSection: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 20,
  },
  dateHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    paddingHorizontal: 5,
  },
  selectedDateText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statsContainer: {
    alignItems: 'flex-end',
  },
  statsText: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
  },
  insightsButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginLeft: 10,
  },
  insightsButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  emptyDateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  emptyDateText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  createEntryButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  createEntryButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  entriesList: {
    flex: 1,
  },
  entryCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  entryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  entryTime: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
  },
  editedBadge: {
    fontSize: 10,
    color: '#007AFF',
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    fontWeight: '500',
  },
  entryText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
    marginBottom: 8,
  },
  wordCount: {
    fontSize: 11,
    color: '#999',
    fontStyle: 'italic',
  },
  noSelectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    marginTop: 20,
  },
  noSelectionText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
  noSelectionSubtext: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
  },
}); 