export type ColumnVisibility<T> = {
  accessorKey: keyof T;
  visibility: boolean;
};

export type ColumnTitle<T> = {
  upLabel?: string;
  downLabel?: string;
  accessorKey: (string & {}) | keyof T;
  title: string;
  defaultVisibility?: boolean;
  className?: string;
};