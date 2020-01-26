import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useApiArticlesByStore } from '../../hooks';
import ArticleComponent from '../../components/article';
import { isArray } from 'lodash';

const StorePage = () => {
  const router = useRouter();
  const id = !isArray(router.query.id) ? router.query.id : router.query.id[0];
  const articles = useApiArticlesByStore(id);
  return (
    <div>
      <Head>
        <title>Store Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Storess
      {articles ? (
        <>
          {articles.map(article => (
            <ArticleComponent {...article} key={article.id} />
          ))}
        </>
      ) : null}
    </div>
  );
};

export default StorePage;
