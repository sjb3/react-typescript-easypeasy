import React, { useEffect } from 'react';

import { Card, CardContent, Typography } from '@material-ui/core';
import { useStoreState, useStoreActions } from '../../hooks';
import { GuestBookEntryForm } from '../GuestBookEntryForm';
import useStyles from './styles';

export const Home: React.FC = () => {
  const reverseEntries = useStoreState(state => state.guestbook.entries);
  const getEntries = useStoreActions(state => state.guestbook.getEntries);
  const classes = useStyles();

  useEffect(() => {
    getEntries();
  }, []); // eslint-disable-line

  return (
    <div>
      <GuestBookEntryForm />
      {reverseEntries.map(entry => (
        <Card key={entry.name} className={classes.entryCard}>
          <CardContent>
            <Typography variant="h3">{entry.name}</Typography>
            <Typography variant="body1">{entry.content}</Typography>
            <Typography variant="caption" style={{ fontStyle: 'italic' }}>
              {entry.submitted}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
