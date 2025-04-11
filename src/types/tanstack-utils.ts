export type ColumnVisibility<T> = {
  accessorKey: keyof T;
  visibility: boolean;
};

export type ColumnTitle<T> = {
  accessorKey: (string & {}) | keyof T;
  title: string;
  defaultVisibility?: boolean;
};