import React from 'react';
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';

import logo from '../../img/logo.svg';


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
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      }
  }))
  


export default function Header (props) {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    return(
        <React.Fragment>
            <ElevationScroll>
                <AppBar>
               
                    <Toolbar>
                    <Button  className={classes.logoContainer}  disableRipple>
                    <img src={logo} alt='company logo' className={classes.logo} />
                  </Button> 
                  
                  <Tabs value={0} className={classes.tabContainer}>
                            < Tab className={classes.tab}  label='IAC' />
                            <Tab className={classes.tab}  label='DSMP' />
                        </Tabs> 
                  
                  <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

                    
                    </Toolbar>
        
                </AppBar>
            </ElevationScroll>
            <div className={classes.ToolbarMargin} />
        </React.Fragment>
       
    
    )
}