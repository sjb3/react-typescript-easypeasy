import React from 'react';
import { TextField, Button } from '@material-ui/core';
import useStyles from './styles';

export const GuestBookEntryForm: React.FC = () => {
  const classes = useStyles();
  return (
    <form noValidate autoComplete="off" className={classes.formContainer}>
      <TextField label="Name" name="name" fullWidth variant="outlined" />
      <TextField
        multiline
        rows={3}
        label="Content"
        name="content"
        fullWidth
        variant="outlined"
      />
      <Button variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};
