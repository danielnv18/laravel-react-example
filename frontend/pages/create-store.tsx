import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Dashboard from '../components/Dashboard';
import Title from '../components/Title';
import StoreForm from '../components/StoreForm';
import { createStore } from '../http/client';
import { useRouter } from 'next/router';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    width: '100%',
  },
}));

function CreateStorePage() {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Dashboard>
      <Paper className={classes.root}>
        <Title>Create Store</Title>
        <StoreForm
          onSubmit={async values => {
            const response = await createStore(values);
            if (response.success) {
              router.push(`/stores/${response.store.id}`);
            }
          }}
        />
      </Paper>
    </Dashboard>
  );
}

export default CreateStorePage;
