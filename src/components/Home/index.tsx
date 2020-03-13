import React, { useEffect } from 'react';

import { Card, CardContent, Typography } from '@material-ui/core';
import { useStoreState, useStoreActions } from '../../hooks';
import { GuestBookEntryForm } from '../GuestBookEntryForm';
import useStyles from './styles';

export const Home: React.FC = () => {
  const entries = useStoreState(state => state.guestbook.entries);
  const getEntries = useStoreActions(state => state.guestbook.getEntries);
  const classes = useStyles();

  useEffect(() => {
    getEntries();
  }, []); // eslint-disable-line

  return (
    <div>
      <GuestBookEntryForm />
      {entries.map(entry => (
        <Card key={entry.name} className={classes.entryCard}>
          <CardContent>
            <Typography variant="h3">{entry.name}</Typography>
            <Typography variant="body1">{entry.content}</Typography>
            <Typography variant="caption" style={{ fontStyle: 'italic' }}>
              {entry.submitted ? entry.submitted.toLocaleDateString() : null}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
