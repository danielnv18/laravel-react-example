import React, { FunctionComponent } from 'react';
import { Store as StoreProps } from '../../interfaces';

const Store: FunctionComponent<StoreProps> = props => {
  return (
    <article>
      id: {props.id} <br />
      name: {props.name} <br />
      address: {props.address} <br />
    </article>
  );
};

export default Store;
