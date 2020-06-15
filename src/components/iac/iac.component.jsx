import React from 'react';
import iacPhoto from '../../img/blue-and-yellow-graph-on-stock-market-monitor-159888.jpg';
import './iac.component.styles.scss'

const Iac = () =>{
    return(
        <div>
            <p>iac</p>
            <a  className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"> 
            <img src={iacPhoto} alt='iac' />
            </a>
        </div>
    )
};

export default Iac;