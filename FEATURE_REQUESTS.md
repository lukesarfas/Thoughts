# Feature Requests

> **AI Instruction**: Do **not** remove or alter any feature requests in this document, and do **not** commit changes to the repository unless you receive an explicit command from the project maintainer.

> **AI Instruction – Feature Implementation Workflow**: When the maintainer asks you to _build_ one of the features below, first create a new markdown file named `<feature-name>.story.md` in the project root.  Populate it with:
> 1. **Story Overview** – one-paragraph description of the problem and desired outcome.
> 2. **Task Breakdown** – a numbered list of very small, sequential steps that are easy to execute (e.g., "Create component skeleton", "Write unit tests", "Wire API call").
> 3. **Acceptance Criteria** – bullet list describing what must be true for the feature to be considered complete.
>
> Only after that `.story.md` file is merged and explicitly approved should you proceed with code changes.

This document captures high-level features proposed for the next phases of *Thoughts – AI Journaling App*.  Each entry includes a rationale and rough acceptance criteria so contributors can align on scope before implementation.

---

## 1. Integrate Large-Language-Model (LLM) via AWS Lambda

**Goal**: Enable cloud-powered analysis and prompt generation by calling an LLM from the mobile app through a serverless endpoint.

**Proposed Approach**
- Create an **AWS Lambda** function (Node.js or Python) that acts as a thin proxy to an LLM provider (e.g., OpenAI, Anthropic, Amazon Bedrock).
- Secure the endpoint with **Amplify Auth** so only authenticated users can invoke it.
- Expose the Lambda via **AppSync GraphQL** or **API Gateway REST**—whichever aligns better with existing Amplify setup.
- Add client-side helper in React-Native to call the endpoint and handle streaming / chunked responses.

**Acceptance Criteria**
1. A deployed Lambda that forwards user-provided text to the LLM and returns the generated response.
2. IAM roles & policies restrict invocation to authenticated app users.
3. Example call from the dev build returns a structured JSON payload (e.g., `{summary, sentiment, actionItems}`).
4. Documentation for local testing (SAM / serverless-offline) and deployment steps.

---

## 2. Add Automated Tests for Existing Functionality

**Goal**: Protect core flows (entry CRUD, calendar navigation, insights calculations) with unit and integration tests.

**Proposed Approach**
- Use **Jest** for unit tests on hooks, helpers, and data models.
- Leverage **React Native Testing Library** to test screen rendering & user interactions.
- Optionally add **Detox** or **Expo-E2E** for lightweight end-to-end smoke tests.
- Configure **GitHub Actions** workflow to run the test suite on pull requests.

**Acceptance Criteria**
1. Minimum 80 % line coverage on `app/` hooks and utilities.
2. Tests cover:
   - Creating, editing, and deleting a journal entry via hooks.
   - Calendar highlights correct dates and opens detail view when pressed.
   - Insights screen shows accurate word counts for a mocked dataset.
3. CI pipeline fails if tests / linting do not pass.

---

## 3. Rich Insights Page

Re-imagine the Insights section as a multi-tab view to surface patterns in the user's writing.

### a) Overview Tab
- Quick stats: total entries, words, average words per day, streaks.
- Graphs for weekly / monthly writing trends (e.g., line chart via React Native SVG).

### b) People Tab
- Uses simple NLP / entity recognition (local or via LLM) to extract **person names** from entries.
- Displays a list of most-mentioned people with counts and sample excerpts.
- Tap a person to filter the calendar to days they appear.

### c) Places Tab
- Similar entity extraction for locations.
- Shows a map (MapView / MapLibre) with pins for geocoded places mentioned.
- List view for quick filtering.

**Acceptance Criteria**
1. Tabbed interface (Overview, People, Places) reachable from bottom-tab "Insights".
2. Stats and entity lists update in real-time when new entries are added or edited.
3. Smooth transitions and no noticeable lag on ≥ 500 entries.
4. Feature-flag or graceful degradation if LLM or geocoding service is unavailable.

---

### Contributing
If you wish to pick up one of these requests, open an issue to claim it and discuss design details before starting a pull request. Each feature should land behind a feature flag or beta toggle until fully tested. 