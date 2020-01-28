import React, { FunctionComponent, useState, ReactNode } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

interface ResponsiveDialogProps {
  title: string;
  content: string | ReactNode;
  isOpen: boolean;
  actions?: ReactNode | null;
}

const ResponsiveDialog: FunctionComponent<ResponsiveDialogProps> = props => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={props.isOpen}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">{props.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{props.content}</DialogContentText>
      </DialogContent>
      {props.actions ? <DialogActions>{props.actions}</DialogActions> : null}
    </Dialog>
  );
};

export default ResponsiveDialog;

/* <Button autoFocus onClick={handleClose} color="primary">
          Disagree
        </Button>
        <Button onClick={handleClose} color="secondary" autoFocus>
          Agree
        </Button> */
