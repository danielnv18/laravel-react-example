import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import { useApiStores } from '../hooks';
import Dashboard from '../components/Dashboard';
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
      <Head>
        <title>Stores | Super Zapatos</title>
      </Head>
      <Paper className={classes.root}>
        <Typography variant="h3" component="h2">
          Stores
        </Typography>

        {stores ? (
          <DataTable
            headCells={headCells}
            rows={stores.map(store => {
              return {
                ...store,
                ...{
                  name: (
                    <Link href={`/stores/${store.id}`}>
                      <MuiLink>{store.name}</MuiLink>
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
