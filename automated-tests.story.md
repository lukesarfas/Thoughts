# Story: Implement Automated Test Suite

## Story Overview

As a maintainer, I want robust automated tests for the core journaling features so that future code changes are safe and regressions are caught early.  The test suite should run locally and in CI, covering hooks, utilities, and key screens while remaining fast and deterministic.

## Task Breakdown (Granular)

### 1. Set Up Testing Environment
- [ ] Add dev dependencies in one npm command.
- [ ] Create `jest.config.js` with React-Native preset and transform ignore patterns.
- [ ] Create `jest.setup.ts` that imports `@testing-library/jest-native/extend-expect`.
- [ ] Add `"test"` and `"test:watch"` scripts to `package.json`.

### 2. Provide Mocks & Polyfills
- [ ] Add `__mocks__/@react-native-async-storage/async-storage.js` stub.
- [ ] Add mocks for `react-native-reanimated`, `react-native-gesture-handler`, and navigation helpers (copy community templates).
- [ ] Verify `jest` can run a trivial test without red screen.

### 3. Unit Tests – Hooks & Utilities
- [ ] Create `app/hooks/__tests__/useJournalEntries.create.test.ts` – tests creating an entry.
- [ ] Create `.../useJournalEntries.update.test.ts` – tests updating an entry.
- [ ] Create `.../useJournalEntries.delete.test.ts` – tests deleting an entry.
- [ ] Create `src/utils/__tests__/wordCount.test.ts` – verifies word-count helper.

### 4. Component Tests – Screens
- [ ] HomeScreen – renders recent entries list.
- [ ] HomeScreen – creates new entry via input + button.
- [ ] CalendarScreen – marks dates with entries.
- [ ] CalendarScreen – navigates to EntryDetail on press.
- [ ] InsightsScreen – shows correct word count stats for mock data.

### 5. Coverage & Lint Gates
- [ ] Add `collectCoverage` and threshold ≥80 % to `jest.config.js`.
- [ ] Ensure ESLint passes by running `npm run lint` inside tests job.

### 6. Continuous Integration
- [ ] Create `.github/workflows/test.yml` that checks out code, caches dependencies, and runs `npm ci && npm test`.
- [ ] Upload coverage to Codecov (optional) and post badge.

### 7. Documentation
- [ ] Add "Running Tests" section to `README.md`.
- [ ] Add badge (build & coverage) to README once CI is green.

### 8. Pull Request Workflow
- [ ] Open PR titled `feat(test): add automated test suite` linking this story.
- [ ] Ensure CI passes; reviewers verify coverage and code quality.

## Acceptance Criteria

- [ ] Running `npm test` locally executes all test suites without runtime errors.
- [ ] GitHub Actions workflow runs on every pull request and fails if tests or linting fail.
- [ ] Aggregate line coverage is **≥ 80 %** for code under `app/` and `src/`.
- [ ] Tests cover CRUD hook operations, calendar date marking & navigation, and Insights word count accuracy.
- [ ] README section explains how to run tests and interpret coverage.

---

> **Complexity Review Check**: Each test file is scoped to a single responsibility. No task above should require more than ~50 LOC of code. If any step feels larger, split again before implementation.

---

> **Next Step**: Await maintainer approval of this `.story.md` file before beginning code changes. 