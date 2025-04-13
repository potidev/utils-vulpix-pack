export type PaginationPageLimit = {
  page?: number;
  limit?: number;
}

export type PaginationResponse<T> = {
  total: number;
  data: T[];
}