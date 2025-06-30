# GraphQL Schema for AI-Powered Journaling App
# Using AWS Amplify AppSync directives for @model, @auth, and @connection

## User model represents each registered user
# Users can have journal entries, know other users, participate in visits, etc.
type User @model @auth(rules: [{ allow: owner }]) {
  id: ID!
  username: String!
  email: String!
  # Relationships
  journalEntries: [JournalEntry] @connection(keyName: "byUser", fields: ["id"])
  knownRelations: [PersonRelation] @connection(keyName: "bySource", fields: ["id"])
  relatedBy: [PersonRelation] @connection(keyName: "byTarget", fields: ["id"])
  visits: [Visit] @connection(keyName: "byUser", fields: ["id"])
}

## JournalEntry stores daily free-text (and other media) input
# Can tag people and places mentioned in the entry for AI analysis
type JournalEntry @model
  @auth(rules: [{ allow: owner }]) {
  id: ID!
  userID: ID!
  date: AWSDate!
  content: String!
  moodTags: [String]
  sentimentScore: Float

  # Connections to People & Places
  people: [EntryPerson] @connection(keyName: "byEntry", fields: ["id"])
  places: [EntryPlace]  @connection(keyName: "byEntry", fields: ["id"])
}

## Places you can record or visit
type Place @model {
  id: ID!
  name: String!
  description: String
  location: String
  visits: [Visit] @connection(keyName: "byPlace", fields: ["id"])
  mentionedInEntries: [EntryPlace] @connection(keyName: "byPlace", fields: ["id"])
}

## Visit represents a user visiting a place, optionally with other users
type Visit @model
  @auth(rules: [{ allow: owner }]) {
  id: ID!
  userID: ID!
  placeID: ID!
  date: AWSDate!
  notes: String
  participants: [VisitParticipant] @connection(keyName: "byVisit", fields: ["id"])
}

## Join type: who participated in a visit
# Allows visits with multiple people
type VisitParticipant @model {
  id: ID!
  visitID: ID!
  userID: ID!
  visit: Visit  @connection(fields: ["visitID"])
  user: User    @connection(fields: ["userID"])
}

## Relation between two users (e.g. friend, family, colleague)
type PersonRelation @model
  @auth(rules: [{ allow: owner }]) {
  id: ID!
  sourceID: ID!
  targetID: ID!
  relationType: String!
  source: User @connection(fields: ["sourceID"])
  target: User @connection(fields: ["targetID"])
}

## EntryPerson join type to tag people in journal entries
type EntryPerson @model
  @auth(rules: [{ allow: owner }]) {
  id: ID!
  entryID: ID!
  userID: ID!
  entry: JournalEntry @connection(fields: ["entryID"])
  user: User         @connection(fields: ["userID"])
}

## EntryPlace join type to tag places in journal entries
type EntryPlace @model {
  id: ID!
  entryID: ID!
  placeID: ID!
  entry: JournalEntry @connection(fields: ["entryID"])
  place: Place        @connection(fields: ["placeID"])
}

# Custom Queries & Mutations (optional):
# extend type Query {
#   journalEntriesByDate(userID: ID!, date: AWSDate!): [JournalEntry]
#   visitsByPlace(placeID: ID!): [Visit]
# }

# extend type Mutation {
#   addPersonRelation(sourceID: ID!, targetID: ID!, relationType: String!): PersonRelation
# }

# You can further add @key directives for custom secondary indexes if needed
# e.g. to query JournalEntry by date: @key(name: "byUserDate", fields: ["userID", "date"])
