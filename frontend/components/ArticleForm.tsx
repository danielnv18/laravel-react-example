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
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

interface FormProps {
  name?: string;
  description?: string;
  price?: number;
  total_in_shelf?: number;
  total_in_vault?: number;
  store_id?: number;
  onSubmit: Function;
}

const StoreForm: FunctionComponent<FormProps> = props => {
  const formik = useFormik({
    initialValues: {
      name: props.name ?? '',
      description: props.description ?? '',
      price: props.price ?? '',
      total_in_shelf: props.total_in_shelf ?? '',
      total_in_vault: props.total_in_vault ?? '',
      store_id: props.store_id ?? '',
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
        name="description"
        label="Description"
        id="description"
        multiline
        rowsMax="4"
        onChange={formik.handleChange}
        value={formik.values.description}
        autoComplete="description"
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="price"
        label="Price"
        name="price"
        autoComplete="price"
        onChange={formik.handleChange}
        value={formik.values.price}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="total_in_shelf"
        label="Total in shelf"
        name="total_in_shelf"
        autoComplete="total_in_shelf"
        onChange={formik.handleChange}
        value={formik.values.total_in_shelf}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="total_in_vault"
        label="Total in vault"
        name="total_in_vault"
        autoComplete="total_in_vault"
        onChange={formik.handleChange}
        value={formik.values.total_in_vault}
      />
      <input
        type="hidden"
        id="store_id"
        name="store_id"
        onChange={formik.handleChange}
        value={formik.values.store_id}
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
