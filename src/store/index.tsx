import { createStore } from 'easy-peasy';
import Store from '../interfaces/Store';
import GuestBook from './GuestBook';

// Store is main wrapper for multiple possible stores
const store: Store = {
  guestbook: GuestBook,
  // admin: Admin,
  // settings: Settingss,
};
// Actual store not interfaces
export default createStore<Store>(store);
