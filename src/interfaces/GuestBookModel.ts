import { Action, Thunk, Computed } from 'easy-peasy';
import GuestBookEntry from './GuestBookEntry';

export default interface GuestBookModel {
  entries: GuestBookEntry[];
  setEntries: Action<GuestBookModel, GuestBookEntry[]>;
  reverseEntries: Computed<GuestBookModel, GuestBookEntry[]>;
  addEntry: Action<GuestBookModel, GuestBookEntry>;
  createEntry: Thunk<GuestBookModel, GuestBookEntry>; // 👈 declaring our action
  getEntries: Thunk<GuestBookModel>;
}
