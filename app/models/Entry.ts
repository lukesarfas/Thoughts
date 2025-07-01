export interface Entry {
  id: string;
  content: string;
  date: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateEntryRequest {
  text: string;
}

export interface UpdateEntryRequest {
  text: string;
} 