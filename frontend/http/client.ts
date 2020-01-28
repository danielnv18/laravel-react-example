import fetch from 'isomorphic-unfetch';
export default async (uri: string, options = {}): Promise<Response> => {
  const baseUrl = 'http://localhost:8000/api';
  const defaultOptions: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic bXlfdXNlcjpteV9wYXNzd29yZA==`,
    },
  };
  const init = { ...defaultOptions, ...options };

  return fetch(`${baseUrl}${uri}`, init);
};
