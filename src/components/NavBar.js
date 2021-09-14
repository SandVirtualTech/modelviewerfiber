import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Divider } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
    
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const ScrollableTabsButtonForce = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  //const three = useThree();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          aria-label="scrollable force tabs example"
          
        >
            <Tab label="Front" icon={<VideocamOutlinedIcon />} {...a11yProps(0)} />
            <Tab label="Back" icon={<VideocamOutlinedIcon />} {...a11yProps(1)} />
            <Tab label="Left" icon={<VideocamOutlinedIcon />} {...a11yProps(2)} />
            <Tab label="Right" icon={<VideocamOutlinedIcon />} {...a11yProps(3)} />
            <Tab label="Top" icon={<VideocamOutlinedIcon />} {...a11yProps(4)} />
            <Tab label="Bottom" icon={<VideocamOutlinedIcon />} {...a11yProps(5)} />
            <Divider orientation="vertical"/>
            <ButtonGroup variant="text" color="primary" aria-label="outlined primary button group">
                <Button
                    color='#1f1f1f'
                    className={classes.button}
                    startIcon={<VisibilityOffOutlinedIcon />}
                    
                    >
                Hide Upper
                </Button>
                <Button
                    color='#1f1f1f'
                    className={classes.button}
                    startIcon={<VisibilityOffOutlinedIcon />}
                    >
                Hide Lower
                </Button>
            </ButtonGroup>
        </Tabs>
      </AppBar>
    </div>
  );
}


export default ScrollableTabsButtonForce;