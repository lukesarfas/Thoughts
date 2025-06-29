import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useJournalEntries } from '../hooks/useJournalEntries';

export default function InsightsScreen({ route, navigation }: any) {
  const { selectedDate } = route?.params || {};
  const { entries, loading, error } = useJournalEntries();
  const [dateEntries, setDateEntries] = useState<any[]>([]);

  useEffect(() => {
    if (selectedDate) {
      const filteredEntries = entries.filter(entry => {
        const entryDate = entry.timestamp.split('T')[0];
        return entryDate === selectedDate;
      });
      setDateEntries(filteredEntries);
    }
  }, [selectedDate, entries]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getInsights = () => {
    if (dateEntries.length === 0) {
      return {
        totalWords: 0,
        avgWordsPerEntry: 0,
        totalEntries: 0,
        writingTime: 'No data',
        mood: 'No data',
        topics: ['No entries to analyze'],
      };
    }

    const totalWords = dateEntries.reduce((sum, entry) => {
      return sum + entry.text.split(' ').length;
    }, 0);

    const avgWordsPerEntry = Math.round(totalWords / dateEntries.length);

    // Simple topic extraction (placeholder for AI)
    const commonWords = ['today', 'feel', 'think', 'work', 'family', 'friend', 'happy', 'sad', 'good', 'bad'];
    const topics = commonWords.filter(word => 
      dateEntries.some(entry => 
        entry.text.toLowerCase().includes(word)
      )
    ).slice(0, 3);

    return {
      totalWords,
      avgWordsPerEntry,
      totalEntries: dateEntries.length,
      writingTime: `${dateEntries.length} entries`,
      mood: topics.length > 0 ? 'Mixed' : 'Neutral',
      topics: topics.length > 0 ? topics : ['General thoughts'],
    };
  };

  const insights = getInsights();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Insights</Text>
      
      {selectedDate ? (
        <View style={styles.dateInsightsContainer}>
          <Text style={styles.dateTitle}>
            {formatDate(selectedDate)}
          </Text>
          
          {dateEntries.length === 0 ? (
            <View style={styles.noEntriesContainer}>
              <Text style={styles.noEntriesText}>
                No entries for this date
              </Text>
              <TouchableOpacity
                style={styles.createEntryButton}
                onPress={() => navigation.navigate('Home')}
              >
                <Text style={styles.createEntryButtonText}>Create Entry</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.insightsGrid}>
              <View style={styles.insightCard}>
                <Text style={styles.insightLabel}>Total Entries</Text>
                <Text style={styles.insightValue}>{insights.totalEntries}</Text>
              </View>
              
              <View style={styles.insightCard}>
                <Text style={styles.insightLabel}>Total Words</Text>
                <Text style={styles.insightValue}>{insights.totalWords}</Text>
              </View>
              
              <View style={styles.insightCard}>
                <Text style={styles.insightLabel}>Avg Words/Entry</Text>
                <Text style={styles.insightValue}>{insights.avgWordsPerEntry}</Text>
              </View>
              
              <View style={styles.insightCard}>
                <Text style={styles.insightLabel}>Writing Activity</Text>
                <Text style={styles.insightValue}>{insights.writingTime}</Text>
              </View>
              
              <View style={styles.insightCard}>
                <Text style={styles.insightLabel}>Detected Mood</Text>
                <Text style={styles.insightValue}>{insights.mood}</Text>
              </View>
              
              <View style={styles.insightCard}>
                <Text style={styles.insightLabel}>Key Topics</Text>
                <Text style={styles.insightValue}>
                  {insights.topics.join(', ')}
                </Text>
              </View>
            </View>
          )}
        </View>
      ) : (
        <View style={styles.generalInsightsContainer}>
          <Text style={styles.subtitle}>AI-powered journal insights coming soon...</Text>
          <Text style={styles.description}>
            This screen will feature AI-generated insights, mood tracking, 
            writing patterns, and personalized recommendations based on your journal entries.
          </Text>
          <Text style={styles.hint}>
            💡 Tip: Select a date from the Calendar to view insights for that specific day.
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
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  dateInsightsContainer: {
    flex: 1,
  },
  dateTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  noEntriesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noEntriesText: {
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
  insightsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  insightCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    width: '48%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  insightLabel: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
    marginBottom: 5,
  },
  insightValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  generalInsightsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 30,
  },
  hint: {
    fontSize: 14,
    color: '#007AFF',
    textAlign: 'center',
    fontStyle: 'italic',
  },
}); 