import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import { useApiStores, deleteStore, updateStore } from '../hooks';
import Dashboard from '../components/Dashboard';
import DataTable from '../components/Tables';
import Button from '@material-ui/core/Button';
import Dialog from '../components/Dialog';
import { Store } from '../interfaces';
import StoreForm from '../components/StoreForm';
import { useRouter } from 'next/router';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    width: '100%',
  },
}));

function HomePage() {
  const router = useRouter();
  const classes = useStyles();
  const [lastRefech, setlastRefech] = useState(Date().toString());
  const stores = useApiStores(lastRefech);
  const [modalContent, setModalContent] = useState({
    title: '',
    content: null,
    actions: null,
  });
  const [open, setOpen] = useState(false);
  const headCells = [
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Name',
    },
    { id: 'address', numeric: false, disablePadding: false, label: 'Address' },
    {
      id: 'actions',
      isSortable: false,
      numeric: false,
      disablePadding: false,
      label: 'Actions',
    },
  ];

  const getStoreActions = (store: Store) => {
    return (
      <>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={() => handleUpdateActionClick(store)}
          variant="contained"
          color="primary"
        >
          Edit
        </Button>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={() => handleDeleteActionClick(store)}
          variant="contained"
          color="primary"
        >
          Delete
        </Button>
      </>
    );
  };

  const handleUpdateActionClick = (store: Store) => {
    setModalContent({
      title: `Update store ${store.label}`,
      content: (
        <>
          <StoreForm
            name={store.label}
            address={store.address}
            onSubmit={async values => {
              const response = await updateStore(store.id, values);
              if (response.success) {
                router.push(`/stores/${response.store.id}`);
              }
            }}
          />
        </>
      ),
      actions: (
        <>
          <Button
            onClick={() => setOpen(false)}
            color="primary"
            autoFocus
            variant="contained"
          >
            Close
          </Button>
        </>
      ),
    });
    setOpen(true);
  };

  const handleDeleteActionClick = (store: Store) => {
    setModalContent({
      title: 'Delete store',
      content: `Are you sure you want to delete ${store.label}?`,
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
              const result = await deleteStore(store.id).catch();
              if (result.success) {
                setlastRefech(Date().toString());
                setOpen(false);
              } else {
                setModalContent({
                  title: 'Somehting went wrong',
                  content: `There was an error trying to delete ${store.label}`,
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
          <>
            <DataTable
              headCells={headCells}
              actions={store => getStoreActions(store)}
              rows={stores.map(store => {
                return {
                  ...store,
                  ...{
                    label: store.name,
                    name: (
                      <Link href={`/stores/${store.id}`}>
                        <MuiLink>{store.name}</MuiLink>
                      </Link>
                    ),
                  },
                };
              })}
            />
            <Dialog
              title={modalContent.title}
              content={modalContent.content}
              actions={modalContent.actions}
              isOpen={open}
            />
          </>
        ) : null}
      </Paper>
    </Dashboard>
  );
}

export default HomePage;
