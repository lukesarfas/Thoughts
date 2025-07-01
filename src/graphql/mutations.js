 
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      email
      journalEntries {
        nextToken
        __typename
      }
      knownRelations {
        nextToken
        __typename
      }
      relatedBy {
        nextToken
        __typename
      }
      visits {
        nextToken
        __typename
      }
      visitParticipants {
        nextToken
        __typename
      }
      entryPeople {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      email
      journalEntries {
        nextToken
        __typename
      }
      knownRelations {
        nextToken
        __typename
      }
      relatedBy {
        nextToken
        __typename
      }
      visits {
        nextToken
        __typename
      }
      visitParticipants {
        nextToken
        __typename
      }
      entryPeople {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      email
      journalEntries {
        nextToken
        __typename
      }
      knownRelations {
        nextToken
        __typename
      }
      relatedBy {
        nextToken
        __typename
      }
      visits {
        nextToken
        __typename
      }
      visitParticipants {
        nextToken
        __typename
      }
      entryPeople {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const createJournalEntry = /* GraphQL */ `
  mutation CreateJournalEntry(
    $input: CreateJournalEntryInput!
    $condition: ModelJournalEntryConditionInput
  ) {
    createJournalEntry(input: $input, condition: $condition) {
      id
      userID
      date
      content
      moodTags
      sentimentScore
      people {
        nextToken
        __typename
      }
      places {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateJournalEntry = /* GraphQL */ `
  mutation UpdateJournalEntry(
    $input: UpdateJournalEntryInput!
    $condition: ModelJournalEntryConditionInput
  ) {
    updateJournalEntry(input: $input, condition: $condition) {
      id
      userID
      date
      content
      moodTags
      sentimentScore
      people {
        nextToken
        __typename
      }
      places {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteJournalEntry = /* GraphQL */ `
  mutation DeleteJournalEntry(
    $input: DeleteJournalEntryInput!
    $condition: ModelJournalEntryConditionInput
  ) {
    deleteJournalEntry(input: $input, condition: $condition) {
      id
      userID
      date
      content
      moodTags
      sentimentScore
      people {
        nextToken
        __typename
      }
      places {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const createPlace = /* GraphQL */ `
  mutation CreatePlace(
    $input: CreatePlaceInput!
    $condition: ModelPlaceConditionInput
  ) {
    createPlace(input: $input, condition: $condition) {
      id
      name
      description
      location
      visits {
        nextToken
        __typename
      }
      mentionedInEntries {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePlace = /* GraphQL */ `
  mutation UpdatePlace(
    $input: UpdatePlaceInput!
    $condition: ModelPlaceConditionInput
  ) {
    updatePlace(input: $input, condition: $condition) {
      id
      name
      description
      location
      visits {
        nextToken
        __typename
      }
      mentionedInEntries {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePlace = /* GraphQL */ `
  mutation DeletePlace(
    $input: DeletePlaceInput!
    $condition: ModelPlaceConditionInput
  ) {
    deletePlace(input: $input, condition: $condition) {
      id
      name
      description
      location
      visits {
        nextToken
        __typename
      }
      mentionedInEntries {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createVisit = /* GraphQL */ `
  mutation CreateVisit(
    $input: CreateVisitInput!
    $condition: ModelVisitConditionInput
  ) {
    createVisit(input: $input, condition: $condition) {
      id
      userID
      placeID
      date
      notes
      participants {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateVisit = /* GraphQL */ `
  mutation UpdateVisit(
    $input: UpdateVisitInput!
    $condition: ModelVisitConditionInput
  ) {
    updateVisit(input: $input, condition: $condition) {
      id
      userID
      placeID
      date
      notes
      participants {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteVisit = /* GraphQL */ `
  mutation DeleteVisit(
    $input: DeleteVisitInput!
    $condition: ModelVisitConditionInput
  ) {
    deleteVisit(input: $input, condition: $condition) {
      id
      userID
      placeID
      date
      notes
      participants {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const createVisitParticipant = /* GraphQL */ `
  mutation CreateVisitParticipant(
    $input: CreateVisitParticipantInput!
    $condition: ModelVisitParticipantConditionInput
  ) {
    createVisitParticipant(input: $input, condition: $condition) {
      id
      visitID
      userID
      visit {
        id
        userID
        placeID
        date
        notes
        createdAt
        updatedAt
        owner
        __typename
      }
      user {
        id
        username
        email
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateVisitParticipant = /* GraphQL */ `
  mutation UpdateVisitParticipant(
    $input: UpdateVisitParticipantInput!
    $condition: ModelVisitParticipantConditionInput
  ) {
    updateVisitParticipant(input: $input, condition: $condition) {
      id
      visitID
      userID
      visit {
        id
        userID
        placeID
        date
        notes
        createdAt
        updatedAt
        owner
        __typename
      }
      user {
        id
        username
        email
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteVisitParticipant = /* GraphQL */ `
  mutation DeleteVisitParticipant(
    $input: DeleteVisitParticipantInput!
    $condition: ModelVisitParticipantConditionInput
  ) {
    deleteVisitParticipant(input: $input, condition: $condition) {
      id
      visitID
      userID
      visit {
        id
        userID
        placeID
        date
        notes
        createdAt
        updatedAt
        owner
        __typename
      }
      user {
        id
        username
        email
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPersonRelation = /* GraphQL */ `
  mutation CreatePersonRelation(
    $input: CreatePersonRelationInput!
    $condition: ModelPersonRelationConditionInput
  ) {
    createPersonRelation(input: $input, condition: $condition) {
      id
      sourceID
      targetID
      relationType
      source {
        id
        username
        email
        createdAt
        updatedAt
        owner
        __typename
      }
      target {
        id
        username
        email
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updatePersonRelation = /* GraphQL */ `
  mutation UpdatePersonRelation(
    $input: UpdatePersonRelationInput!
    $condition: ModelPersonRelationConditionInput
  ) {
    updatePersonRelation(input: $input, condition: $condition) {
      id
      sourceID
      targetID
      relationType
      source {
        id
        username
        email
        createdAt
        updatedAt
        owner
        __typename
      }
      target {
        id
        username
        email
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deletePersonRelation = /* GraphQL */ `
  mutation DeletePersonRelation(
    $input: DeletePersonRelationInput!
    $condition: ModelPersonRelationConditionInput
  ) {
    deletePersonRelation(input: $input, condition: $condition) {
      id
      sourceID
      targetID
      relationType
      source {
        id
        username
        email
        createdAt
        updatedAt
        owner
        __typename
      }
      target {
        id
        username
        email
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const createEntryPerson = /* GraphQL */ `
  mutation CreateEntryPerson(
    $input: CreateEntryPersonInput!
    $condition: ModelEntryPersonConditionInput
  ) {
    createEntryPerson(input: $input, condition: $condition) {
      id
      entryID
      userID
      entry {
        id
        userID
        date
        content
        moodTags
        sentimentScore
        createdAt
        updatedAt
        owner
        __typename
      }
      user {
        id
        username
        email
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateEntryPerson = /* GraphQL */ `
  mutation UpdateEntryPerson(
    $input: UpdateEntryPersonInput!
    $condition: ModelEntryPersonConditionInput
  ) {
    updateEntryPerson(input: $input, condition: $condition) {
      id
      entryID
      userID
      entry {
        id
        userID
        date
        content
        moodTags
        sentimentScore
        createdAt
        updatedAt
        owner
        __typename
      }
      user {
        id
        username
        email
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteEntryPerson = /* GraphQL */ `
  mutation DeleteEntryPerson(
    $input: DeleteEntryPersonInput!
    $condition: ModelEntryPersonConditionInput
  ) {
    deleteEntryPerson(input: $input, condition: $condition) {
      id
      entryID
      userID
      entry {
        id
        userID
        date
        content
        moodTags
        sentimentScore
        createdAt
        updatedAt
        owner
        __typename
      }
      user {
        id
        username
        email
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const createEntryPlace = /* GraphQL */ `
  mutation CreateEntryPlace(
    $input: CreateEntryPlaceInput!
    $condition: ModelEntryPlaceConditionInput
  ) {
    createEntryPlace(input: $input, condition: $condition) {
      id
      entryID
      placeID
      entry {
        id
        userID
        date
        content
        moodTags
        sentimentScore
        createdAt
        updatedAt
        owner
        __typename
      }
      place {
        id
        name
        description
        location
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateEntryPlace = /* GraphQL */ `
  mutation UpdateEntryPlace(
    $input: UpdateEntryPlaceInput!
    $condition: ModelEntryPlaceConditionInput
  ) {
    updateEntryPlace(input: $input, condition: $condition) {
      id
      entryID
      placeID
      entry {
        id
        userID
        date
        content
        moodTags
        sentimentScore
        createdAt
        updatedAt
        owner
        __typename
      }
      place {
        id
        name
        description
        location
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteEntryPlace = /* GraphQL */ `
  mutation DeleteEntryPlace(
    $input: DeleteEntryPlaceInput!
    $condition: ModelEntryPlaceConditionInput
  ) {
    deleteEntryPlace(input: $input, condition: $condition) {
      id
      entryID
      placeID
      entry {
        id
        userID
        date
        content
        moodTags
        sentimentScore
        createdAt
        updatedAt
        owner
        __typename
      }
      place {
        id
        name
        description
        location
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
