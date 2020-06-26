import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import theme from './theme';
import { useTheme } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import FooterAdornment from '../../img/Footer Adornment.svg';

const useStyles = makeStyles(theme=>({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: '100%',
        zIndex: theme.zIndex.modal + 1,
        position: 'relative'
    },
    footerAdornment:{
        width: '12em',
        verticalAlignment: 'bottom'
    },
    mainContainer: {
        position: 'absolute'
    },
    link:{
        color: 'white',
        fontFamily:'Arial',
        fontSize:'0.75rem',
        fontWeight: 'bold',
        textDecoration: 'none'
    },
    gridItem: {
        margin: '2em'
    }
}))

export default function Footer() {
    const classes = useStyles();

    return(
        <footer className={classes.footer}>
            <Grid container justify='center' className={classes.mainContainer}>
                <Grid item className={classes.gridItem}>
                    <Grid container direction='column' spacing={2}>
                        <Grid item className={classes.link}>
                        ОКО Інформаційно-аналітичний центр з обслуговування установ соціального захисту населення
                        </Grid>
                        <Grid item className={classes.link}>
                        2020 рік
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction='column' spacing={2}>
                        <Grid item className={classes.link}>
                        Адреса: 21100 м. Вінниця, вул. Хмельницьке шосе 15
                        </Grid>
                        <Grid item className={classes.link}>
                        E-mail: 25502211@mail.gov.ua
                        </Grid>
                        <Grid item className={classes.link}>
                        Телефон: (0432) 57-04-45, (0432) 52-47-82
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
             <img src={FooterAdornment} alt='company logo' className={classes.footerAdornment} />
              {/* <div>
                <a href='http://smp.vin.ua/wordpress/'>ОКО Інформаційно-аналітичний центр з обслуговування установ соціального захисту населення</a>
                <p>2020 рік</p>
                </div> */}
               
                {/* <div className='adres-block'>
                <p>Адреса: 21100 м. Вінниця, вул. Хмельницьке шосе 15</p>
                <p>E-mail: 25502211@mail.gov.ua </p>
                <p>Телефон: (0432) 57-04-45, (0432) 52-47-82</p>
                </div> */}
        </footer>
    )

}