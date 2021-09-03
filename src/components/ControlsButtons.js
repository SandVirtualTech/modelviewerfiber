import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SkipPreviousOutlinedIcon from '@material-ui/icons/SkipPreviousOutlined';
import PlayArrowOutlinedIcon from '@material-ui/icons/PlayArrowOutlined';
import SkipNextOutlinedIcon from '@material-ui/icons/SkipNextOutlined';
//import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function BasicButtonGroup() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup variant="text" color="default" aria-label="text primary button group">
        <IconButton aria-label="backward">
            <SkipPreviousOutlinedIcon />
        </IconButton>
        <IconButton aria-label="play">
            <PlayArrowOutlinedIcon />
        </IconButton>
        <IconButton aria-label="fordward">
            <SkipNextOutlinedIcon />
        </IconButton>
      </ButtonGroup>
    </div>
  );
}