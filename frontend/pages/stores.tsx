import React from 'react';
import Head from 'next/head';
import { useApiStores } from '../hooks';
import StoreComponent from '../components/store';

const StoresPage = () => {
  const stores = useApiStores();
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Stores
      {stores ? (
        <>
          {stores.map(stores => (
            <StoreComponent {...stores} key={stores.id} />
          ))}
        </>
      ) : null}
    </div>
  );
};

export default StoresPage;
