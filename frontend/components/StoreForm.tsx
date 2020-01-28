import React, { FunctionComponent } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useFormik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

interface FormProps {
  name?: string;
  address?: string;
  onSubmit: Function;
}

const StoreForm: FunctionComponent<FormProps> = props => {
  const formik = useFormik({
    initialValues: {
      name: props.name ?? '',
      address: props.address ?? '',
    },
    onSubmit: values => props.onSubmit(values),
  });

  const classes = useStyles();
  return (
    <form className={classes.form} onSubmit={formik.handleSubmit}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="name"
        label="Name"
        name="name"
        autoComplete="name"
        autoFocus
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="address"
        label="Address"
        id="address"
        multiline
        rowsMax="4"
        onChange={formik.handleChange}
        value={formik.values.address}
        autoComplete="address"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Submit
      </Button>
    </form>
  );
};

export default StoreForm;
