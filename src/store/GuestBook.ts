import { action, thunk } from 'easy-peasy';
import GuestBookModel from '../interfaces/GuestBookModel';

const GuestBook: GuestBookModel = {
  entries: [
    // {
    //   id: Date.now(),
    //   name: 'CJ',
    //   content: 'hello World',
    //   submitted: new Date(),
    // },
  ],
  setEntries: action((state, entries) => {
    state.entries = entries;
  }),
  addEntry: action((state, entry) => {
    state.entries.unshift(entry);
  }),
  createEntry: thunk(async (state, entry) => {
    // will be handled by back end
    const response = await fetch('http://localhost:5000/entries', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(entry),
    });
    const result = await response.json();
    // console.log(result);
    state.addEntry(result);

    // handled by front end
    // entry.id = Date.now();
    // entry.submitted = new Date();
    // state.entries.unshift(entry);
  }),
  // get data from API using thunk (coming with easy-peasy) as it is async
  getEntries: thunk(async state => {
    const response = await fetch('http://localhost:5000/entries');
    const entries = await response.json();
    state.setEntries(entries);
  }),
};

export default GuestBook;
