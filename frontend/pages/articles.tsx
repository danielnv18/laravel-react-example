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
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { deleteArticle } from '../hooks';
import { findIndex } from 'lodash';

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

  const headCells = [
    {
      id: 'name',
      numeric: false,
      isSortable: true,
      disablePadding: true,
      label: 'Name',
    },
    {
      id: 'description',
      numeric: false,
      isSortable: true,
      disablePadding: false,
      label: 'Description',
    },
    {
      id: 'price',
      isSortable: true,
      numeric: true,
      disablePadding: false,
      label: 'Price',
    },
    {
      id: 'total_in_shelf',
      numeric: true,
      isSortable: true,
      disablePadding: false,
      label: 'Total in shelf',
    },
    {
      id: 'total_in_vault',
      numeric: true,
      isSortable: true,
      disablePadding: false,
      label: 'Total in vault',
    },
    {
      id: 'actions',
      isSortable: false,
      numeric: false,
      disablePadding: false,
      label: 'Actions',
    },
  ];

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [modalContent, setModalContent] = useState({
    title: '',
    content: '',
    actions: null,
  });
  const [open, setOpen] = useState(false);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteActionClick = (article: Article) => {
    console.log(article);
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

  const handleEditActionClick = (article: Article) => {
    setModalContent({
      title: article.name,
      content: 'yaya',
      actions: null,
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
          onClick={handleClick}
          variant="contained"
          color="primary"
        >
          Actions
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => handleDeleteActionClick(article)}>
            Delete
          </MenuItem>
          <MenuItem onClick={() => handleEditActionClick(article)}>
            Edit
          </MenuItem>
        </Menu>
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
            headCells={headCells}
            // actions={articles.map(article => getArticleActions(article))}
            actions={(article) => getArticleActions(article)}
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
