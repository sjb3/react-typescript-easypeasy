// implement guestbookModel interface
// import { action } from 'easy-peasy';
import GuestBookModel from '../interfaces/GuestBookModel';

const GuestBook: GuestBookModel = {
  entries: [
    {
      name: 'CJ',
      content: 'hello World',
      submitted: new Date(),
    },
  ],
  // addEntry: action((state, payload) => {
  //   state.entries.push(payload);
  // }),
};

export default GuestBook;
