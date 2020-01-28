import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useApiArticlesByStore, useApiStore, deleteArticle } from '../../hooks';
import { isArray } from 'lodash';
import DataTable from '../../components/Tables';
import { articleHeadCells } from '../../misc/tables';
import Paper from '@material-ui/core/Paper';
import Dashboard from '../../components/Dashboard';
import { makeStyles } from '@material-ui/core/styles';
import { Article } from '../../interfaces';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Dialog from '../../components/Dialog';
import Menu from '@material-ui/core/Menu';
import Typography from '@material-ui/core/Typography';

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

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
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
    setAnchorEl(null);
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
        <title>Store Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {articles && store ? (
        <>
          <Paper className={classes.root}>
            <Typography variant="h3" component="h2">
              Articles for store {store.name}
            </Typography>
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
