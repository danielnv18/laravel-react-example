import fetch from 'isomorphic-unfetch';

export default function client(uri: string, options = {}): Promise<Response> {
  const baseUrl = 'http://localhost:8000/api';
  const defaultOptions: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic bXlfdXNlcjpteV9wYXNzd29yZA==`,
    },
  };
  const init = { ...defaultOptions, ...options };

  return fetch(`${baseUrl}${uri}`, init);
}

export const createStore = async body => {
  return client('/services/stores/', {
    method: 'POST',
    body: JSON.stringify(body),
  }).then(response => response.json());
};

export const updateStore = async (id, body) => {
  return client(`/services/stores/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
  }).then(response => response.json());
};

export const updateArticle = async (id, body) => {
  return client(`/services/articles/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
  }).then(response => response.json());
};

export const deleteArticle = async id => {
  return client(`/services/articles/${id}`, {
    method: 'DELETE',
  }).then(respose => respose.json());
};

export const deleteStore = async id => {
  return client(`/services/stores/${id}`, {
    method: 'DELETE',
  }).then(respose => respose.json());
};
