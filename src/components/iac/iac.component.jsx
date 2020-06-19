import React from 'react';
import iacPhoto from '../../img/iac.png';
import './iac.component.styles.scss'

const Iac = () =>{
    return(
        <div>
            <a  className="App-link"
            href="http://smp.vin.ua/wordpress/"
            target="_blank"
            rel="noopener noreferrer"> 
                <div className='iac-item'>
                <p>OКО Інформаційно-аналітичний центр з обслуговування установ соціального захисту населення</p>
                    <img className='img-main-page' src={iacPhoto} alt='iac' />
                </div>
           </a>
        </div>  
    )
};

export default Iac;