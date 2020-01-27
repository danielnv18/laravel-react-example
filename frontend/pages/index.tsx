import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useApiStores } from '../hooks';
import Dashboard from '../components/Dashboard';
import Title from '../components/Title';
import DataTable from '../components/Tables';
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    width: '100%',
  },
}));

function HomePage() {
  const classes = useStyles();
  const stores = useApiStores();
  const headCells = [
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Name',
    },
    { id: 'address', numeric: false, disablePadding: false, label: 'Address' },
  ];

  return (
    <Dashboard>
      <Paper className={classes.root}>
        <Title>Stores</Title>
        {stores ? (
          <DataTable
            headCells={headCells}
            rows={stores.map(store => {
              return {
                ...store,
                ...{
                  name: (
                    <Link href={`/stores/${store.id}`}>
                      <a>{store.name}</a>
                    </Link>
                  ),
                },
              };
            })}
          />
        ) : null}
      </Paper>
    </Dashboard>
  );
}

export default HomePage;
