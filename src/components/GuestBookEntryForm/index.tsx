import React from 'react';
import { TextField, Button, Box } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import useStyles from './styles';
import GuestBookEntry from '../../interfaces/GuestBookEntry';
import { useStoreActions } from '../../hooks';

// Validate the input objects
const GuestBookEntrySchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required('Required'),
  content: yup
    .string()
    .trim()
    .min(10, 'Must be at least 10 cahracters')
    .max(200, "Can't be more than 200 cahracters")
    .required('Required'),
});

export const GuestBookEntryForm: React.FC = () => {
  const classes = useStyles();
  const createEntry = useStoreActions(state => state.guestbook.addEntry);
  const { register, handleSubmit, errors, reset } = useForm<GuestBookEntry>({
    validationSchema: GuestBookEntrySchema,
  });
  const onSubmit = (data: GuestBookEntry): void => {
    createEntry(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      autoComplete="off"
      className={classes.formContainer}
    >
      <TextField
        inputRef={register}
        label="Name"
        name="name"
        fullWidth
        variant="outlined"
        error={!!errors.name}
        helperText={errors.name ? errors.name.message : null}
      />
      <TextField
        inputRef={register}
        multiline
        rows={3}
        label="Content"
        name="content"
        fullWidth
        variant="outlined"
        error={!!errors.content}
        helperText={errors.content ? errors.content.message : null}
      />
      <Box display="flex" justifyContent="flex-end">
        <Button type="submit" variant="contained" color="primary">
          Add Entry
        </Button>
      </Box>
    </form>
  );
};
