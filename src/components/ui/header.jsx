import React from 'react';

import { useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';

import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import logo from '../../img/logo4.svg';


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
      marginBottom: '1em',
      [theme.breakpoints.down('md')]:{
        marginBottom: '2em'
      },
      [theme.breakpoints.down('xs')]:{
        marginBottom: '1.25em'
      }
    },
    logo: {
      height: "6em",
      [theme.breakpoints.down('md')]:{
        height: "6em" 
      },
      [theme.breakpoints.down('xs')]:{
        height: "5em" 
      }

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
      marginLeft:'25px',
      paddingLeft: '20px',
      paddingRight: '20px',
      color: 'white',
      '&:hover': {
        opacity: 0.9
      }
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
        marginRight: theme.spacing(6),
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
      },
      drawerIconContainer: {
marginLeft: 'auto',
          '&hover': {
        backgroundColor:'transparent'
      }
    },
    drawerIcon: {
        height: '50px',
        width: '50px'
    },
    drawer: {
      backgroundColor: "#0B72B9"
    },
    drawerItem: {
      ...theme.typography.tab,
      color: 'white'
    },
    appBar:{
      zIndex: theme.zIndex.modal + 1
    }
  }))
  
export default function Header (props) {
    const classes = useStyles();
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const [openDrawer, setOpenDrawer] = useState(false);
    
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    

    const tabs = (
        <React.Fragment>
              <Tabs className={classes.tabContainer}>
                                <Tab className={classes.tab} href="http://smp.vin.ua/joomla/" label='СМП' />
                                <Tab className={classes.tab} href="http://smp.vin.ua/wordpress/"  label='ІАЦ' />
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
        </React.Fragment>
    )

    const drawer = (
        <React.Fragment>
            <SwipeableDrawer 
                disableBackdropTransition={!iOS} 
                disableDiscovery={iOS} 
                open={openDrawer} 
                onClose={()=>setOpenDrawer(false)}
                onOpen={()=>setOpenDrawer(true)}
                classes={{paper: classes.drawer}}
            > 
            <List disablePadding>
            <div className={classes.ToolbarMargin} />
                <ListItem divider button onClick={()=>setOpenDrawer(false)} >
                    <ListItemText className={classes.drawerItem} href="http://smp.vin.ua/joomla/" target="_blank" rel="noopener noreferrer">
                    IAC
                    </ListItemText>
                    </ListItem>
                <ListItem className={classes.drawerItem} divider button href="http://smp.vin.ua/wordpress/" onClick={()=>setOpenDrawer(false)}>DSMP</ListItem>
            </List>
            </SwipeableDrawer> 
            <IconButton className={classes.drawerIconContainer} onClick={()=>setOpenDrawer(!openDrawer)} disableRipple>
                <MenuIcon className={classes.drawerIcon} />
            </IconButton>
        </React.Fragment>
    )

    return(
        <React.Fragment>
            <ElevationScroll>
                <AppBar position='fixed' className={classes.appBar} >
                    <Toolbar disableGutters>
                        <Button  className={classes.logoContainer}  disableRipple>
                            <img src={logo} alt='company logo' className={classes.logo} />
                        </Button> 
                        {matches ? drawer : tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.ToolbarMargin} />
        </React.Fragment>
    )
}