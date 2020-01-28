import React, { FunctionComponent } from 'react';
import Head from 'next/head';
import { useApiArticles } from '../hooks';
import Dashboard from '../components/Dashboard';
import DataTable from '../components/Tables';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    width: '100%',
  },
}));

const ArticlesPage: FunctionComponent<{}> = () => {
  const articles = useApiArticles();
  const classes = useStyles();

  const headCells = [
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Name',
    },
    {
      id: 'description',
      numeric: false,
      disablePadding: false,
      label: 'Description',
    },
    { id: 'price', numeric: true, disablePadding: false, label: 'Price' },
    {
      id: 'total_in_shelf',
      numeric: true,
      disablePadding: false,
      label: 'Total in shelf',
    },
    {
      id: 'total_in_vault',
      numeric: true,
      disablePadding: false,
      label: 'Total in vault',
    },
  ];
  return (
    <Dashboard>
      <Head>
        <title>Articles</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography variant="h3" component="h2">
        Articles
      </Typography>
      {articles ? (
        <Paper className={classes.root}>
          <DataTable headCells={headCells} rows={articles} />{' '}
        </Paper>
      ) : null}
    </Dashboard>
  );
};

export default ArticlesPage;
