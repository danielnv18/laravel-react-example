import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useApiArticlesByStore, useApiStore, deleteArticle } from '../../hooks';
import { isArray } from 'lodash';
import Paper from '@material-ui/core/Paper';
import Dashboard from '../../components/Dashboard';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ArticlesComponent from '../../components/Articles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    width: '100%',
  },
}));

const StorePage = () => {
  const [lastRefech, setlastRefech] = useState(Date().toString());
  const router = useRouter();
  const classes = useStyles();
  const id = !isArray(router.query.id) ? router.query.id : router.query.id[0];

  const articles = useApiArticlesByStore(id, lastRefech);
  const store = useApiStore(id, lastRefech);

  return (
    <Dashboard>
      <Head>
        <title>Store Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {articles && store ? (
        <>
          <Paper className={classes.root}>
            <Typography variant="h3" component="h2">
              Articles for store {store.name}
            </Typography>
            <ArticlesComponent
              articles={articles}
              setlastRefech={setlastRefech}
            />
          </Paper>
        </>
      ) : null}
    </Dashboard>
  );
};

StorePage.getInitialProps = async function(context) {
  return {
    id: context.query.id,
  };
};

export default StorePage;
