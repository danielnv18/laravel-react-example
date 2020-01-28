import React, { FunctionComponent, useState } from 'react';
import Head from 'next/head';
import { useApiArticles } from '../hooks';
import Dashboard from '../components/Dashboard';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ArticlesComponent from '../components/Articles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    width: '100%',
  },
}));

const ArticlesPage: FunctionComponent<{}> = () => {
  const [lastRefech, setlastRefech] = useState(Date().toString());
  const articles = useApiArticles(lastRefech);
  const classes = useStyles();

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
          <ArticlesComponent
            articles={articles}
            setlastRefech={() => setlastRefech(Date().toString())}
          />
        </Paper>
      ) : null}
    </Dashboard>
  );
};

export default ArticlesPage;
