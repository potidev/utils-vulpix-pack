import { VisibilityState } from "@tanstack/react-table";
import { ColumnTitle } from "../types";

export class ColumnUtils {
  static getColumnTitleByAccessorKey = <T>(colTitles: ColumnTitle<T>[], accessorKey: (string & {}) | keyof T): string | undefined => {
    const col = colTitles.find((c) => c.accessorKey === accessorKey);
    return col?.title  || `${accessorKey as string}`;
  }

  static getColumnTitleByAccessorKeyString = <T>(colTitles: ColumnTitle<T>[], accessorKey: string): string | undefined => {
    const col = colTitles.find((c) => c.accessorKey === accessorKey);
    return col?.title  || `${accessorKey as string}`;
  }

  static getDefaultVisibilityState = <T>(colTitles: ColumnTitle<T>[]): VisibilityState => {
    const result = colTitles.reduce<VisibilityState>((acc, item) => {
      if(item.accessorKey) {
        acc[item.accessorKey as string] = item.defaultVisibility || false;
      }
      return acc;
  }, {});

  return result;
  }
}