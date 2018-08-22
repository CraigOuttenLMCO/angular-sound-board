import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public clearAll(): void {
    // Clear all items
    localStorage.clear();
  }

  public get(key: string): any {
    var value = localStorage.getItem(key);

    if (!value) {
      return;
    }

    // Assume it is an object that has been stringify'd
    if (value[0] === "{") {
      value = JSON.parse(value);
    }

    return value;
  }

  public keys(): string[] {
    return Object.keys(localStorage);
  }

  public remove(key:string): void {
    if (!key) {
      return;
    }

    localStorage.removeItem(key);
  }

  public set(key:string, value:any): void {
    if (!key || !value) {
      return;
    }

    if (typeof value === "object") {
      value = JSON.stringify(value);
    }

    localStorage.setItem(key, value);
  }
}
