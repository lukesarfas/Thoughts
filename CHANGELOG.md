# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

### Added
- Story file for investigating the root cause of module mocking failure.
- Story file for eliminating intermittent `act(...)` warnings in tests.

## [1.0.0] - 2024-07-26

### Added
- **Test Suite Refactoring & Hardening:**
  - Replaced brittle text-based selectors with stable `testID`s in `HomeScreen` and `InsightsScreen`.
  - Resolved persistent `act(...)` warning in the `HomeScreen` test by ensuring all state updates were properly awaited.
- **Automated Testing Foundation:**
  - Implemented a full test suite using Jest and React Native Testing Library.
  - Added unit tests for utilities (`wordCount`).
  - Added integration tests for hooks (`useJournalEntries`).
  - Added component tests for all screens (`HomeScreen`, `CalendarScreen`, `InsightsScreen`).
  - Established a CI workflow with GitHub Actions to run tests on every push.
  - Added a linting step to the CI workflow.
- **Initial Documentation & Workflow:**
  - Established a strict, story-based development workflow.
  - Created a comprehensive `README.md` and feature request documentation. 