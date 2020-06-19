import React from 'react';

import '../footer/footer.styles.scss'

const Footer = () =>{
    return(
        <div className='footer'>
            <div className='options'>
                <div>
                <a href='http://smp.vin.ua/wordpress/'>ОКО Інформаційно-аналітичний центр з обслуговування установ соціального захисту населення</a>
                <p>2020 рік</p>
                </div>
               
                <div className='adres-block'>
                <p>Адреса: 21100 м. Вінниця, вул. Хмельницьке шосе 15</p>
                <p>E-mail: 25502211@mail.gov.ua </p>
                <p>Телефон: (0432) 57-04-45, (0432) 52-47-82</p>
                </div>
            </div> 
        </div>
    );
};

export default Footer;