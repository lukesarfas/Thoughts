# Story: Eliminate Intermittent `act(...)` Warning in `HomeScreen` Test Suite

## Overview

As a developer, I want the entire test suite to run with a perfectly clean output, free of any warnings. A clean test run provides confidence that everything is working as expected and ensures new warnings are not missed.

Currently, an intermittent `act(...)` warning appears when running the `HomeScreen.test.tsx` suite. This indicates that a state update is happening "out of sync" with our test assertions. This is a classic source of flaky tests and needs to be resolved.

## Acceptance Criteria

1.  Running the entire test suite via `npm test` produces **zero** console warnings related to `act(...)`.
2.  All tests continue to pass.
3.  The solution must address the root cause of the asynchronous state update, not just hide the warning.

## Technical Background: The Core Mystery

We successfully fixed an `act(...)` warning for the "creates a new entry" test when it was run in isolation. However, the warning reappeared when running the full test file. This strongly suggests **test pollution**: one test case is leaving behind a pending state update that completes during a subsequent test, triggering the warning.

The most likely source is an interaction between the mocked `useFocusEffect` hook and the rendering of the list of journal entries, which are `TouchableOpacity` components. One test may be causing a navigation-related state change that isn't fully resolved before the next test begins.

## Proposed Investigation Plan

1.  **Isolate the Polluter:**
    *   In `HomeScreen.test.tsx`, use a combination of `.skip` and `.only` on the `it` blocks.
    *   Systematically run pairs of tests together to find the exact combination that triggers the warning. The hypothesis is that the "renders a list of entries" test is polluting the "creates a new entry" test, or vice-versa.
    *   Use the `--runInBand` flag with Jest to ensure a sequential run, which can make this easier to debug.

2.  **Review Mocks:**
    *   Closely re-examine the mock for `useFocusEffect`. The current mock is very simple. Does it need a `jest.fn()` to track calls, or does the callback need to be cleared `afterEach` test?

3.  **Enhance Test Cleanup:**
    *   Jest calls `cleanup` automatically after each test, which unmounts the component. However, this may not be enough for asynchronous effects.
    *   Implement an `afterEach` block in `HomeScreen.test.tsx` that calls `jest.clearAllMocks()` and `jest.restoreAllMocks()` to ensure a perfectly clean slate between every test in the file.

4.  **Simplify Renders:**
    *   Within the "creates a new entry" test, modify the `useJournalEntries` mock to return `entries: []`. This will prevent the list of entries from rendering at all, helping to isolate the form interaction as the source of the warning. If the warning disappears, we know the issue is in the list rendering. 