import React, { FunctionComponent } from 'react';
import { Article} from '../../interfaces'
// export type ArticleProps = {
//   id: number;
//   name: string;
//   description: string;
//   price: number;
//   total_in_shelf: number;
//   total_in_vault: number;
//   created_at: Date;
//   updated_at: Date;
// };

const Article: FunctionComponent<Article> = props => {
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
