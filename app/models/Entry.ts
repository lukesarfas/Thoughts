export interface Entry {
  id: string;
  text: string;
  timestamp: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateEntryRequest {
  text: string;
}

export interface UpdateEntryRequest {
  text: string;
} 