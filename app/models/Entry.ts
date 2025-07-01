export interface Entry {
  id: string;
  userID: string;
  content: string;
  date: string;
  moodTags?: string[];
  sentimentScore?: number;
  createdAt: string;
  updatedAt: string;
  owner: string;
}

export interface CreateEntryRequest {
  text: string;
}

export interface UpdateEntryRequest {
  text: string;
} 