import { LOCAL_STORAGE_NAMES, LocalStorageTypes } from './types';

export function setItem(name: LOCAL_STORAGE_NAMES, item: LocalStorageTypes): void {
  localStorage.setItem(name, JSON.stringify(item));
}

export function getItem(name: LOCAL_STORAGE_NAMES): LocalStorageTypes | undefined {
  const item = localStorage.getItem(name);
  if (item) {
    try {
      return JSON.parse(item);
    } catch (err) {
      return undefined;
    }
  }
}