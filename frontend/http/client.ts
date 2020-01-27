import fetch from 'isomorphic-unfetch';
import base64 from 'base-64';
export default async (uri: string, options = {}): Promise<Response> => {
  const baseUrl = 'http://localhost:8000/api';
  const defaultOptions: RequestInit = {
    // mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic bXlfdXNlcjpteV9wYXNzd29yZA==`,
    },
  };
  //Authorization: `Basic bXlfdXNlcjpteV9wYXNzd29yZA==`,
  const init = { ...defaultOptions, ...options };

  return fetch(`${baseUrl}${uri}`, init);
};
