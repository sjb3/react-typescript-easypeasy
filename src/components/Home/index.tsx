import React from 'react';
// hoosk to use (check with easy-peasy)

import { Card, CardContent, Typography } from '@material-ui/core';
import { useStoreState } from '../../hooks';

export const Home = () => {
  const entries = useStoreState(state => state.guestbook.entries);

  return (
    <div>
      {entries.map(entry => (
        <Card>
          <CardContent>
            <Typography variant="h3">{entry.name}</Typography>
            <Typography variant="body1">{entry.content}</Typography>
            <Typography variant="caption" style={{ fontStyle: 'italic' }}>
              {entry.submitted.toLocaleDateString()}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
