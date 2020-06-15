import React from 'react';
import dsmpPhoto from '../../img/dsmp.png';
import './dsmp.component.styles.scss'

const Dsmp = () =>{
    return(
        <div className='dsmp-item'>
            <p>Соціальна та молодіжна політика на Вінниччині</p>
            <a  className="App-link"
            href="http://smp.vin.ua/joomla/"
            target="_blank"
            rel="noopener noreferrer"> 
                <img className='img-main-page' src={dsmpPhoto} alt='dsmp' />
            </a>   
        </div>
    )
};

export default Dsmp;