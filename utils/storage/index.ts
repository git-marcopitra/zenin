import { STORAGE_KEY } from '@/constants';

export const getStorageKey = (...args: ReadonlyArray<string>) =>
  STORAGE_KEY + args.join('-');
