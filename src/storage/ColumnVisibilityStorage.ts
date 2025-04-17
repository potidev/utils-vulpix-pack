"use client";

import { Updater, VisibilityState } from "@tanstack/react-table";

export type ColumnVisibilityItem = {
  id: string;
  value: boolean;
} 

export class ColumnVisibilityStorage {
  static getKey = (tableId: string) => {
    return `column-visibility-${tableId}`;
  }

  static save = (tableId: string, columns: VisibilityState) => {
    localStorage.setItem(ColumnVisibilityStorage.getKey(tableId), JSON.stringify(columns));
  }
  
  static read = (tableId: string): VisibilityState | undefined => {
    const savedState = localStorage.getItem(ColumnVisibilityStorage.getKey(tableId));

    if(savedState && savedState !== "undefined") {
      return JSON.parse(savedState) as VisibilityState;
    }
    return undefined;
  }

  static applyUpdater = (value: VisibilityState, updater: Updater<VisibilityState>): VisibilityState => {
    if (typeof updater === 'function') {
      // `updater` é uma função, então chamamos com o valor atual
      return (updater as (old: VisibilityState) => VisibilityState)(value);
    }
    // Caso contrário, `updater` é do tipo T, retornamos diretamente
    return updater;
  }
}