import React, { FunctionComponent } from 'react';
import { Article as ArticleProps } from '../../interfaces';

const Article: FunctionComponent<ArticleProps> = props => {
  return (
    <article>
      id: {props.id} <br />
      name: {props.name} <br />
      description: {props.description} <br />
      total_in_shelf: {props.total_in_shelf} <br />
      total_in_vault: {props.total_in_vault} <br />
    </article>
  );
};

export default Article;
