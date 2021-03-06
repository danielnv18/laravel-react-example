import { useState, useEffect } from 'react';
import client from '../http/client';
import { Article, Store } from '../interfaces';
async function fetchData(url: string, key: string, setCallback: Function) {
  const res = await client(url);
  return res.json().then(res => setCallback(res[key]));
}

export const useApiArticles = (refech): Article[] | null => {
  const [articles, setArticles] = useState<Article[] | null>([]);

  useEffect(() => {
    fetchData('/services/articles', 'articles', setArticles);
  }, [refech]);

  return articles;
};

export const useApiStore = (
  id: string | number,
  refresh: string
): Store | null => {
  const [store, setStore] = useState<Store | null>(null);

  useEffect(() => {
    fetchData(`/services/stores/${id}`, 'store', setStore);
  }, [refresh]);

  return store;
};

export const useApiArticlesByStore = (
  id: string | number,
  refresh: string
): Article[] | null => {
  const [articles, setArticles] = useState<Article[] | null>([]);

  useEffect(() => {
    fetchData(`/services/articles/stores/${id}`, 'articles', setArticles);
  }, [refresh]);

  return articles;
};

export const useApiStores = (lastRefech: string) => {
  const [stores, setStores] = useState<Store[] | null>([]);

  useEffect(() => {
    fetchData('/services/stores', 'stores', setStores);
  }, [lastRefech]);

  return stores;
};
