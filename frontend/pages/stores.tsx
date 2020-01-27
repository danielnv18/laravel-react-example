import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';

import TableRow from '@material-ui/core/TableRow';

import Paper from '@material-ui/core/Paper';

import { useApiStores } from '../hooks';
// import StoreComponent from '../components/Store';
import Dashboard from '../components/Dashboard';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

const Home = () => {
  const stores = useApiStores();
  const classes = useStyles();

  return (
    <>
      <Dashboard>
        {stores ? (
          <>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Address</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {stores.map(store => (
                    <TableRow key={store.id}>
                      <TableCell component="th" scope="row">
                        {store.name}
                      </TableCell>
                      <TableCell align="right">{store.address}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        ) : null}
      </Dashboard>
    </>
  );
};

export default Home;
