import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddIcon from '@material-ui/icons/Add';
import Link from 'next/link';

export const mainListItems = (
  <div>
    <Link href="/">
      <ListItem button component="a">
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Stores" />
      </ListItem>
    </Link>
    <Link href="/create-store">
      <ListItem button component="a">
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary="Create Store" />
      </ListItem>
    </Link>

    <Link href="/articles">
      <ListItem button component="a">
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Articles" />
      </ListItem>
    </Link>
  </div>
);
