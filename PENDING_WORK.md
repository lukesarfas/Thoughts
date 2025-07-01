# Pending Work & Technical Debt

This file tracks major stories and technical debt that have been formally documented but are not yet scheduled for implementation.

## Stories

- [ ] **[Story: Investigate and Resolve Root Cause of Module Mocking Failure](./investigate-mocking-failure.story.md)**
  - **Summary:** A fundamental issue in our Jest/Babel configuration prevents reliable module mocking, forcing a workaround in the `InsightsScreen` test. This story is about diagnosing and fixing the root cause.

- [ ] **[Story: Eliminate Intermittent `act(...)` Warning in `HomeScreen` Test Suite](./resolve-act-warning.story.md)**
  - **Summary:** An intermittent `act(...)` warning appears when running the `HomeScreen` tests, suggesting test pollution. This story is about isolating and fixing the source of the warning to ensure a clean and stable test suite. 