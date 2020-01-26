import React, { FunctionComponent } from 'react';
import Head from 'next/head';
import ArticleComponent from '../components/article';
import { useApiArticles } from '../hooks';

const ArticlesPage: FunctionComponent<{}> = () => {
  const articles = useApiArticles();

  return (
    <div>
      <Head>
        <title>Articles</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Articles
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

export default ArticlesPage;
//<ul>{articles.map(article => <li key={article.id}>{article.name</li>)</ul>