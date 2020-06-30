import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import FooterAdornment from '../../img/footer44.svg';

const useStyles = makeStyles(theme=>({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: '100%',
        zIndex: theme.zIndex.modal + 1,
        position: 'relative',
        flex: '0 0 auto'

    },
    footerAdornment:{
        width: '24em',
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

            <Hidden mdDown>
            <Grid container justify='center' className={classes.mainContainer}>
                <Grid item className={classes.gridItem}>
                    <Grid container direction='column' spacing={2}>
                        <Grid item className={classes.link}>
                        ОКО Інформаційно-аналітичний центр з обслуговування установ соціального захисту населення
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
            </Hidden>
             <img src={FooterAdornment} alt='company logo' className={classes.footerAdornment} />
        </footer>
    )

}