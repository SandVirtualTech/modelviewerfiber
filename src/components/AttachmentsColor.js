import React from 'react';
//import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
//import { makeStyles } from '@material-ui/core/styles';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import Button from '@material-ui/core/Button';

export default function AttacmentsButton() {
  return (
    <div>
      <ButtonGroup>
        <Button
          variant="contained"
          color="primary"
          startIcon={<ColorLensOutlinedIcon />}
        />
        <Button
          variant="contained"
          color="secondary"
          startIcon={<ColorLensOutlinedIcon />}
        />
      </ButtonGroup>
      
    </div>
  );
}