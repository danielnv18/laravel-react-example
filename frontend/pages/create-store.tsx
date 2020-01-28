import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Dashboard from '../components/Dashboard';
import Title from '../components/Title';
import StoreForm from '../components/StoreForm';
import { createStore } from '../hooks';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    width: '100%',
  },
}));

function CreateStorePage() {
  const classes = useStyles();

  return (
    <Dashboard>
      <Paper className={classes.root}>
        <Title>Create Store</Title>
        <StoreForm onSubmit={values => createStore(values)} />
      </Paper>
    </Dashboard>
  );
}

export default CreateStorePage;
