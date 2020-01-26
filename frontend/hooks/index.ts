import { useState, useEffect } from 'react';
import client from '../http/client';
import { Article, Store } from '../interfaces';

async function fetchData(url: string, key: string, setCallback: Function) {
  const res = await client(url);
  return res.json().then(res => setCallback(res[key]));
}

export const useApiArticles = (): Article[] | null => {
  const [articles, setArticles] = useState<Article[] | null>([]);

  useEffect(() => {
    fetchData('/services/articles', 'articles', setArticles);
  }, []);

  return articles;
};

export const useApiArticlesByStore = (id: string): Article[] | null => {
  const [articles, setArticles] = useState<Article[] | null>([]);

  useEffect(() => {
    fetchData(`/services/articles/stores/${id}`, 'articles', setArticles);
  }, []);

  return articles;
};

export const useApiStores = () => {
  const [stores, setStores] = useState<Store[] | null>([]);

  useEffect(() => {
    fetchData('/services/stores', 'stores', setStores);
  }, []);

  return stores;
};
