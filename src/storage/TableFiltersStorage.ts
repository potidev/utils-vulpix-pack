"use client";

export type TableFilterValue = string | number | boolean | undefined | null;
export type TableFilters = Record<string, TableFilterValue>;

export class TableFiltersStorage {
  static getKey = (tableId: string) => {
    return `table-filters-${tableId}`;
  };

  static save = (tableId: string, filters: TableFilters) => {
    localStorage.setItem(this.getKey(tableId), JSON.stringify(filters));
  };

  static read = (tableId: string): TableFilters | undefined => {
    const savedFilters = localStorage.getItem(this.getKey(tableId));
    if (savedFilters && savedFilters !== "undefined") {
      return JSON.parse(savedFilters) as TableFilters;
    }
    return undefined;
  };

  static clear = (tableId: string) => {
    localStorage.removeItem(this.getKey(tableId));
  };

  static applyUpdater = (
    current: TableFilters,
    updater: TableFilters | ((old: TableFilters) => TableFilters)
  ): TableFilters => {
    if (typeof updater === "function") {
      return updater(current);
    }
    return updater;
  };
}