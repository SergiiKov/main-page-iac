import React from 'react';
import iacPhoto from '../../img/iac.png';
import './iac.component.styles.scss'

const Iac = () =>{
    return(
        <div className='iac-item'>
            <p>
            OКО Інформаційно-аналітичний центр з обслуговування установ соціального захисту населення
            </p>
           <div className='background-image'>
           <a  className="App-link"
            href="http://smp.vin.ua/wordpress/"
            target="_blank"
            rel="noopener noreferrer"> 
            <img className='img-main-page' src={iacPhoto} alt='iac' />
            </a>
           </div>
          
        </div>
    )
};

export default Iac;