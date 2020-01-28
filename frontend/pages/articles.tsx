import React, { FunctionComponent, useState } from 'react';
import Head from 'next/head';
import { useApiArticles } from '../hooks';
import Dashboard from '../components/Dashboard';
import DataTable from '../components/Tables';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Article } from '../interfaces';
import Button from '@material-ui/core/Button';
import Dialog from '../components/Dialog';
import { deleteArticle } from '../hooks';
import { articleHeadCells } from '../misc/tables';

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

  const [modalContent, setModalContent] = useState({
    title: '',
    content: '',
    actions: null,
  });
  const [open, setOpen] = useState(false);

  const handleDeleteActionClick = (article: Article) => {
    setModalContent({
      title: 'Delete article',
      content: `Are you sure you want to delete ${article.name}?`,
      actions: (
        <>
          <Button
            onClick={() => setOpen(false)}
            color="primary"
            autoFocus
            variant="contained"
          >
            No
          </Button>
          <Button
            onClick={async () => {
              const result = await deleteArticle(article.id).catch();
              if (result.success) {
                setlastRefech(Date().toString());
                setOpen(false);
              } else {
                setModalContent({
                  title: 'Somehting went wrong',
                  content: `There was an error trying to delete ${article.name}`,
                  actions: (
                    <Button
                      onClick={() => setOpen(false)}
                      color="primary"
                      autoFocus
                      variant="contained"
                    >
                      Close
                    </Button>
                  ),
                });
              }
            }}
            color="secondary"
            autoFocus
          >
            Yes
          </Button>
        </>
      ),
    });
    setOpen(true);
  };

  const handleEditActionClick = (article: Article) => {
    setModalContent({
      title: article.name,
      content: 'yaya',
      actions: null,
    });
    setOpen(true);
  };

  const getArticleActions = (article: Article) => {
    return (
      <>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={() => handleDeleteActionClick(article)}
          variant="contained"
          color="primary"
        >
          Delete
        </Button>
      </>
    );
  };

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
          <DataTable
            headCells={articleHeadCells}
            actions={article => getArticleActions(article)}
            rows={articles}
          />
          <Dialog
            title={modalContent.title}
            content={modalContent.content}
            actions={modalContent.actions}
            isOpen={open}
          />
        </Paper>
      ) : null}
    </Dashboard>
  );
};

export default ArticlesPage;
