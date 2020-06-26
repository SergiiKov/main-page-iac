import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import theme from './theme';
import { useTheme } from '@material-ui/core/styles';
import FooterAdornment from '../../img/Footer Adornment.svg';

const useStyles = makeStyles(theme=>({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: '100%',
        zIndex: theme.zIndex.modal + 1,
        position: 'relative'
    },
    footerAdornment:{
        width: '5em',
        verticalAlignment: 'bottom'
    }
}))

export default function Footer() {
    const classes = useStyles();

    return(
        <footer className={classes.footer}>
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