import React, { useState, useEffect, FunctionComponent } from 'react';
import Head from 'next/head';
import { Article } from '../interfaces';
import client from '../http/client';

const ArticlesPage: FunctionComponent<{}> = () => {
  const [articles, setArticles] = useState<Article[] | null>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await client('/services/articles');
      res.json().then(res => setArticles(res.articles));
    }

    fetchData();
  });

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Articles
      {articles ? (
        <ul>
          {articles.map(article => (
            <li key={article.id}>{article.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default ArticlesPage;
//<ul>{articles.map(article => <li key={article.id}>{article.name</li>)</ul>
