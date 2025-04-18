"use client";

export class TableLimitStorage {
  static getKey = (id?: string) => {
    return `table-limit${id ? `-${id}` : ""}`;
  };

  static save = (limit: number, id?: string) => {
    localStorage.setItem(this.getKey(id), `${limit}`);
  };

  static read = (id?: string): number | undefined => {
    const savedEvent = localStorage.getItem(this.getKey(id));
    if (savedEvent && savedEvent !== "undefined") {
      const num = Number(savedEvent);
      return isNaN(num) ? undefined : num;
    }
    return undefined;
  };

  static clear = (id?: string) => {
    localStorage.removeItem(this.getKey(id));
  };
}