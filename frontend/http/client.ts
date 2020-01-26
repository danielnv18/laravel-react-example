import fetch from 'isomorphic-unfetch';

export default async (uri: string): Promise<Response> => {
  const baseUrl = 'http://gap.lndo.site/api';
  return fetch(`${baseUrl}${uri}`, {
    headers: new Headers({
      Authorization: `Basic bXlfdXNlcjpteV9wYXNzd29yZA==`,
    }),
  });
};
