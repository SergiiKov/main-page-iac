import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import theme from './theme';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme=>({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: '100%'
    }
}))

export default function Footer() {
    const classes = useStyles();

    return(
        <footer className={classes.footer}>
              <div>
                <a href='http://smp.vin.ua/wordpress/'>ОКО Інформаційно-аналітичний центр з обслуговування установ соціального захисту населення</a>
                <p>2020 рік</p>
                </div>
               
                {/* <div className='adres-block'>
                <p>Адреса: 21100 м. Вінниця, вул. Хмельницьке шосе 15</p>
                <p>E-mail: 25502211@mail.gov.ua </p>
                <p>Телефон: (0432) 57-04-45, (0432) 52-47-82</p>
                </div> */}
        </footer>
    )

}