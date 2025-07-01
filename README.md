# Thoughts – AI Journaling App (MVP)

Thoughts is a mobile journaling application built with **React Native** and **Expo SDK&nbsp;50**.  The app focuses on fast, private note-taking with an emphasis on daily reflection.  All data is stored **locally** on the device so it works completely offline, but the codebase already contains **AWS Amplify** scaffolding that will enable cloud sync and authentication in the near future.

## What the App Can Do Today

1. **Create & Edit Entries** – Write plain-text journal entries, update them later, or delete them entirely.
2. **Persistent Local Storage** – Entries are saved with `@react-native-async-storage/async-storage`; they survive app restarts and work without an internet connection.
3. **Calendar Browsing** – An interactive calendar (powered by `react-native-calendars`) highlights days that have entries.  Tapping a date shows all notes for that day.
4. **Basic Insights** – Per-day statistics such as total word count provide lightweight feedback and lay the groundwork for future AI-powered analytics.
5. **Intuitive Navigation** – Bottom-tab navigation with three main screens:
   • Home – create new entries & view recent ones
   • Calendar – browse past entries by date
   • Insights – see basic statistics
6. **Modern UI** – Safe-area awareness, dark-mode friendly styles, and smooth transitions via `react-navigation`.

## Under the Hood

- **Language & Frameworks**: TypeScript, React Native, Expo SDK 50
- **State / Storage**: Local component state + AsyncStorage
- **Navigation**: `@react-navigation/bottom-tabs` & `@react-navigation/stack`
- **Calendar**: `react-native-calendars`
- **Cloud Prep**: The repository already includes an `amplify/` folder, generated GraphQL schema (`src/graphql/*`), and configuration files (`src/aws-exports.js`, `src/amplifyconfiguration.json`).  These are not yet consumed by the runtime build but pave the way for:
  - Secure user authentication
  - Real-time sync across devices
  - Server-side AI analysis of journal data

## Getting Started

### Prerequisites

- Node.js 16+
- npm (or yarn)
- Expo CLI – `npm install -g @expo/cli`
- A physical device with the **Expo Go** app or an iOS/Android simulator

### Installation & Run

```bash
# 1. Clone
$ git clone https://github.com/<your-username>/Thoughts.git
$ cd Thoughts

# 2. Install dependencies
$ npm install

# 3. Start the Metro bundler
$ npx expo start
```

Scan the QR code with Expo Go (or press i / a to launch iOS / Android simulators).

## Project Layout (simplified)

```
Thoughts/
├── app/                 # Feature code: models, hooks, screens, navigation
│   └── ...
├── src/
│   ├── graphql/         # Auto-generated GraphQL queries & schema (Amplify)
│   ├── aws-exports.js   # Amplify runtime config (generated)
│   └── amplifyconfiguration.json
├── amplify/             # Backend definition managed by Amplify CLI
├── assets/              # Icons, images, splash screens
├── App.tsx              # Root component
├── package.json
└── tsconfig.json
```

## Current Limitations

- No user accounts or cloud synchronisation yet – entries live only on the device that created them.
- Insights are basic; AI-driven sentiment analysis and prompts are still on the roadmap.
- Rich-text editing, image attachments, and export/backup options are not implemented.

## Contributing

1. Fork the repository & create a feature branch.
2. Follow ESLint/prettier rules.
3. Submit a pull request – describe your changes clearly.

## License

This project is released under the MIT License.

## Running Tests

Install dev dependencies (already included):

```bash
npm install
```

Run the full test suite once:

```bash
npm test
```

Watch mode:

```bash
npm run test:watch
```

Coverage reports are generated in the `coverage` folder. 