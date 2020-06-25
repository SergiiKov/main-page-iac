import React from 'react';
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';


function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  const useStyles = makeStyles(theme => ({
    ToolbarMargin: {
      ...theme.mixins.toolbar,
      marginBottom: '3em'
    },
    logo: {
      height: "8em"
    },
    logoContainer:{
      padding:0,
      '&hover': {
        backgroundColor:'transparent'
      }
    },
    tabContainer:{
      marginLeft: 'auto'
    },
    tab: {
      ...theme.typography.tab,
      minWidth:10,
      marginLeft:'25px'
    },
    button: {
      borderRadius: '50px',
      marginLeft: '50px',
      marginRight:'25px',
      ...theme.typography.estimate
    },
    menu: {
      backgroundColor: theme.palette.common.blue,
      color: 'white'
    },
    menuItem: {
      ...theme.typography.tab,
      opacity: 0.7,
      '&:hover': {
        opacity: 1
      }
    }
  }))
  


export default function Header (props) {
    const classes = useStyles();

    return(
        <React.Fragment>
            <ElevationScroll>
                <AppBar>
                    <Toolbar>IAC</Toolbar>
                    <Toolbar>DSMP</Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.ToolbarMargin} />
        </React.Fragment>
       
    
    )
}