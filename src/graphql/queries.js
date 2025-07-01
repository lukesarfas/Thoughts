 
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getJournalEntry = /* GraphQL */ `
  query GetJournalEntry($id: ID!) {
    getJournalEntry(id: $id) {
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
export const listJournalEntries = /* GraphQL */ `
  query ListJournalEntries(
    $filter: ModelJournalEntryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJournalEntries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getPlace = /* GraphQL */ `
  query GetPlace($id: ID!) {
    getPlace(id: $id) {
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
export const listPlaces = /* GraphQL */ `
  query ListPlaces(
    $filter: ModelPlaceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        location
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getVisit = /* GraphQL */ `
  query GetVisit($id: ID!) {
    getVisit(id: $id) {
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
export const listVisits = /* GraphQL */ `
  query ListVisits(
    $filter: ModelVisitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVisits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getVisitParticipant = /* GraphQL */ `
  query GetVisitParticipant($id: ID!) {
    getVisitParticipant(id: $id) {
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
export const listVisitParticipants = /* GraphQL */ `
  query ListVisitParticipants(
    $filter: ModelVisitParticipantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVisitParticipants(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        visitID
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPersonRelation = /* GraphQL */ `
  query GetPersonRelation($id: ID!) {
    getPersonRelation(id: $id) {
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
export const listPersonRelations = /* GraphQL */ `
  query ListPersonRelations(
    $filter: ModelPersonRelationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPersonRelations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sourceID
        targetID
        relationType
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getEntryPerson = /* GraphQL */ `
  query GetEntryPerson($id: ID!) {
    getEntryPerson(id: $id) {
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
export const listEntryPeople = /* GraphQL */ `
  query ListEntryPeople(
    $filter: ModelEntryPersonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEntryPeople(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        entryID
        userID
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getEntryPlace = /* GraphQL */ `
  query GetEntryPlace($id: ID!) {
    getEntryPlace(id: $id) {
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
export const listEntryPlaces = /* GraphQL */ `
  query ListEntryPlaces(
    $filter: ModelEntryPlaceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEntryPlaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        entryID
        placeID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const journalEntriesByUserID = /* GraphQL */ `
  query JournalEntriesByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelJournalEntryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    journalEntriesByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const visitsByUserID = /* GraphQL */ `
  query VisitsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelVisitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    visitsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const visitsByPlaceID = /* GraphQL */ `
  query VisitsByPlaceID(
    $placeID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelVisitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    visitsByPlaceID(
      placeID: $placeID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const visitParticipantsByVisitID = /* GraphQL */ `
  query VisitParticipantsByVisitID(
    $visitID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelVisitParticipantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    visitParticipantsByVisitID(
      visitID: $visitID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        visitID
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const visitParticipantsByUserID = /* GraphQL */ `
  query VisitParticipantsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelVisitParticipantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    visitParticipantsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        visitID
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const personRelationsBySourceID = /* GraphQL */ `
  query PersonRelationsBySourceID(
    $sourceID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPersonRelationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    personRelationsBySourceID(
      sourceID: $sourceID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sourceID
        targetID
        relationType
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const personRelationsByTargetID = /* GraphQL */ `
  query PersonRelationsByTargetID(
    $targetID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPersonRelationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    personRelationsByTargetID(
      targetID: $targetID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sourceID
        targetID
        relationType
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const entryPeopleByEntryID = /* GraphQL */ `
  query EntryPeopleByEntryID(
    $entryID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelEntryPersonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    entryPeopleByEntryID(
      entryID: $entryID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        entryID
        userID
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const entryPeopleByUserID = /* GraphQL */ `
  query EntryPeopleByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelEntryPersonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    entryPeopleByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        entryID
        userID
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const entryPlacesByEntryID = /* GraphQL */ `
  query EntryPlacesByEntryID(
    $entryID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelEntryPlaceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    entryPlacesByEntryID(
      entryID: $entryID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        entryID
        placeID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const entryPlacesByPlaceID = /* GraphQL */ `
  query EntryPlacesByPlaceID(
    $placeID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelEntryPlaceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    entryPlacesByPlaceID(
      placeID: $placeID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        entryID
        placeID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
