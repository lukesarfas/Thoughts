# AI Journaling App

A React Native journaling application built with Expo and TypeScript, featuring local data storage and calendar integration.

## Features

### Stage 1: Basic Navigation ✅
- Bottom tab navigation with Home, Calendar, and Insights screens
- Stack navigation for entry details
- Safe area handling for modern devices

### Stage 2: Local Data Management ✅
- Create, read, update, and delete journal entries
- AsyncStorage for local data persistence
- Custom React hooks for state management
- Entry detail screen with editing capabilities

### Calendar Integration ✅
- Interactive calendar with marked dates for entries
- Date-specific entry browsing
- Entry statistics and insights for selected dates
- Navigation to insights from calendar

### Insights Screen ✅
- Date-specific insights and statistics
- Word count and entry analysis
- Placeholder for future AI-powered features

## Tech Stack

- **React Native** with Expo
- **TypeScript** for type safety
- **React Navigation** for routing
- **AsyncStorage** for local data persistence
- **React Native Calendars** for calendar functionality
- **React Native Safe Area Context** for device compatibility

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- Expo Go app on your mobile device

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Thoughts
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npx expo start
```

4. Scan the QR code with Expo Go app on your device

### Development

- **Home Screen**: Create new entries and view recent entries
- **Calendar Screen**: Browse entries by date with calendar interface
- **Insights Screen**: View statistics and insights for selected dates
- **Entry Detail**: View, edit, and delete individual entries

## Project Structure

```
Thoughts/
├── app/
│   ├── models/
│   │   └── Entry.ts              # Entry data model
│   ├── services/
│   │   └── LocalStorageService.ts # AsyncStorage operations
│   ├── hooks/
│   │   └── useJournalEntries.ts  # Custom React hook
│   ├── screens/
│   │   ├── HomeScreen.tsx        # Entry creation and recent entries
│   │   ├── CalendarScreen.tsx    # Calendar with date selection
│   │   ├── InsightsScreen.tsx    # Statistics and insights
│   │   └── EntryDetailScreen.tsx # Entry viewing and editing
│   └── navigation/
│       └── AppNavigator.tsx      # Navigation setup
├── assets/                       # App icons and splash screens
├── App.tsx                       # Main app component
├── index.ts                      # App entry point
├── app.json                      # Expo configuration
├── package.json                  # Dependencies and scripts
└── tsconfig.json                 # TypeScript configuration
```

## Future Stages

### Stage 3: AWS Backend Integration
- AWS Amplify or AppSync for backend services
- User authentication and data synchronization
- Cloud storage for journal entries

### Stage 4: AI Integration
- OpenAI API integration for journal analysis
- Sentiment analysis and mood tracking
- AI-powered writing prompts and insights
- Natural language processing for entry categorization

### Stage 5: Advanced Features
- Rich text editing
- Image attachments
- Voice-to-text entry creation
- Export and backup functionality
- Advanced analytics and reporting

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License. 