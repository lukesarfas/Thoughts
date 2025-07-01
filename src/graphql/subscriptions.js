 
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
export const onCreateJournalEntry = /* GraphQL */ `
  subscription OnCreateJournalEntry(
    $filter: ModelSubscriptionJournalEntryFilterInput
    $owner: String
  ) {
    onCreateJournalEntry(filter: $filter, owner: $owner) {
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
export const onUpdateJournalEntry = /* GraphQL */ `
  subscription OnUpdateJournalEntry(
    $filter: ModelSubscriptionJournalEntryFilterInput
    $owner: String
  ) {
    onUpdateJournalEntry(filter: $filter, owner: $owner) {
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
export const onDeleteJournalEntry = /* GraphQL */ `
  subscription OnDeleteJournalEntry(
    $filter: ModelSubscriptionJournalEntryFilterInput
    $owner: String
  ) {
    onDeleteJournalEntry(filter: $filter, owner: $owner) {
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
export const onCreatePlace = /* GraphQL */ `
  subscription OnCreatePlace($filter: ModelSubscriptionPlaceFilterInput) {
    onCreatePlace(filter: $filter) {
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
export const onUpdatePlace = /* GraphQL */ `
  subscription OnUpdatePlace($filter: ModelSubscriptionPlaceFilterInput) {
    onUpdatePlace(filter: $filter) {
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
export const onDeletePlace = /* GraphQL */ `
  subscription OnDeletePlace($filter: ModelSubscriptionPlaceFilterInput) {
    onDeletePlace(filter: $filter) {
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
export const onCreateVisit = /* GraphQL */ `
  subscription OnCreateVisit(
    $filter: ModelSubscriptionVisitFilterInput
    $owner: String
  ) {
    onCreateVisit(filter: $filter, owner: $owner) {
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
export const onUpdateVisit = /* GraphQL */ `
  subscription OnUpdateVisit(
    $filter: ModelSubscriptionVisitFilterInput
    $owner: String
  ) {
    onUpdateVisit(filter: $filter, owner: $owner) {
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
export const onDeleteVisit = /* GraphQL */ `
  subscription OnDeleteVisit(
    $filter: ModelSubscriptionVisitFilterInput
    $owner: String
  ) {
    onDeleteVisit(filter: $filter, owner: $owner) {
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
export const onCreateVisitParticipant = /* GraphQL */ `
  subscription OnCreateVisitParticipant(
    $filter: ModelSubscriptionVisitParticipantFilterInput
  ) {
    onCreateVisitParticipant(filter: $filter) {
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
export const onUpdateVisitParticipant = /* GraphQL */ `
  subscription OnUpdateVisitParticipant(
    $filter: ModelSubscriptionVisitParticipantFilterInput
  ) {
    onUpdateVisitParticipant(filter: $filter) {
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
export const onDeleteVisitParticipant = /* GraphQL */ `
  subscription OnDeleteVisitParticipant(
    $filter: ModelSubscriptionVisitParticipantFilterInput
  ) {
    onDeleteVisitParticipant(filter: $filter) {
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
export const onCreatePersonRelation = /* GraphQL */ `
  subscription OnCreatePersonRelation(
    $filter: ModelSubscriptionPersonRelationFilterInput
    $owner: String
  ) {
    onCreatePersonRelation(filter: $filter, owner: $owner) {
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
export const onUpdatePersonRelation = /* GraphQL */ `
  subscription OnUpdatePersonRelation(
    $filter: ModelSubscriptionPersonRelationFilterInput
    $owner: String
  ) {
    onUpdatePersonRelation(filter: $filter, owner: $owner) {
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
export const onDeletePersonRelation = /* GraphQL */ `
  subscription OnDeletePersonRelation(
    $filter: ModelSubscriptionPersonRelationFilterInput
    $owner: String
  ) {
    onDeletePersonRelation(filter: $filter, owner: $owner) {
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
export const onCreateEntryPerson = /* GraphQL */ `
  subscription OnCreateEntryPerson(
    $filter: ModelSubscriptionEntryPersonFilterInput
    $owner: String
  ) {
    onCreateEntryPerson(filter: $filter, owner: $owner) {
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
export const onUpdateEntryPerson = /* GraphQL */ `
  subscription OnUpdateEntryPerson(
    $filter: ModelSubscriptionEntryPersonFilterInput
    $owner: String
  ) {
    onUpdateEntryPerson(filter: $filter, owner: $owner) {
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
export const onDeleteEntryPerson = /* GraphQL */ `
  subscription OnDeleteEntryPerson(
    $filter: ModelSubscriptionEntryPersonFilterInput
    $owner: String
  ) {
    onDeleteEntryPerson(filter: $filter, owner: $owner) {
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
export const onCreateEntryPlace = /* GraphQL */ `
  subscription OnCreateEntryPlace(
    $filter: ModelSubscriptionEntryPlaceFilterInput
  ) {
    onCreateEntryPlace(filter: $filter) {
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
export const onUpdateEntryPlace = /* GraphQL */ `
  subscription OnUpdateEntryPlace(
    $filter: ModelSubscriptionEntryPlaceFilterInput
  ) {
    onUpdateEntryPlace(filter: $filter) {
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
export const onDeleteEntryPlace = /* GraphQL */ `
  subscription OnDeleteEntryPlace(
    $filter: ModelSubscriptionEntryPlaceFilterInput
  ) {
    onDeleteEntryPlace(filter: $filter) {
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
