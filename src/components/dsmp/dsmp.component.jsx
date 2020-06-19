import React from 'react';
import dsmpPhoto from '../../img/dsmp.png';
import './dsmp.component.styles.scss'

const Dsmp = () =>{
    return(
        <div>
            <a className="App-link"
                href="http://smp.vin.ua/joomla/"
                target="_blank"
                rel="noopener noreferrer"> 
                    <div className='dsmp-item'>
                        <p>Соціальна та молодіжна політика на Вінниччині</p>
                        <img className='img-main-page' src={dsmpPhoto} alt='dsmp' />
                    </div>
            </a>  
        </div>    
    )
};

export default Dsmp;