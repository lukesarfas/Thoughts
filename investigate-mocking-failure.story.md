# Story: Investigate and Resolve Root Cause of Module Mocking Failure

## Overview

As a developer, I want our Jest test environment to reliably mock, spy on, and un-mock modules so that I can write trustworthy tests that validate correct component logic.

Currently, a fundamental misconfiguration prevents us from controlling dependencies in our tests. This forced us to merge a "liar" test for the `InsightsScreen` that accepts incorrect behavior just to make the test suite pass. This erodes the value of our entire test suite and must be fixed.

## Acceptance Criteria

1.  The test for `InsightsScreen` (`app/screens/__tests__/InsightsScreen.test.tsx`) is refactored to assert the **correct** word count (`8`) for its test data.
2.  The `InsightsScreen` test **must pass** with the correct assertion.
3.  The solution must address the root cause of the mocking failure. A workaround is not acceptable.
4.  A clear, documented explanation of the root cause and the fix is added to `README.md` under a new "Testing Philosophy" section.

## Technical Background: The Core Mystery

Our test environment is aggressively and incorrectly providing a bad version of the `wordCount` utility, even when we try to force it to use the real one.

1.  The real `wordCount` function correctly calculates `8` words for our test sentence.
2.  The test environment, for unknown reasons, uses an incorrect implementation that calculates `9` words.
3.  Standard Jest methods to fix this (`jest.requireActual`) were ignored by the test runner.
4.  The "foolproof" method of Dependency Injection (handing the real `wordCount` function directly to the component as a prop) was also ignored.

This suggests a deep misconfiguration in how our tests are compiled or run, likely related to Babel, TypeScript, or Jest's transformation pipeline.

## Proposed Investigation Plan

*This is a plan for diagnosis, not a plan for a solution. The goal is to understand the "why".*

1.  **Total Isolation:**
    *   Create a new, temporary test file: `debug.test.ts`.
    *   In this file, import `wordCount` from `src/utils/wordCount`.
    *   Write a single `it` block that calls `wordCount` with the test string and `expect(result).toBe(8)`.
    *   Does this simplest possible case work?

2.  **Minimal Component Isolation:**
    *   If the above test works, create a new, temporary React component: `DebugComponent.tsx`.
    *   This component should do nothing but import `wordCount`, call it, and render the result in a `<Text>` tag.
    *   Write a test for this component. Does it now fail and report `9`? This will confirm if the issue is tied to the React Native testing environment.

3.  **Configuration Deep-Dive:**
    *   Scrutinize `babel.config.js`. Research every plugin and preset for known issues with `jest`.
    *   Scrutinize `jest.config.js` and `jest.setup.ts`. Pay close attention to `transform`, `moduleNameMapper`, and any setup files. Is anything intercepting imports?

4.  **Dependency Audit:**
    *   Run `npm ls` for `jest`, `babel`, `typescript`, and all related plugins. Look for version mismatches or duplicate dependencies that could cause conflicts.

5.  **Cache Busting:**
    *   Run the entire test suite with the `--no-cache` flag to rule out a corrupted transformer cache. 