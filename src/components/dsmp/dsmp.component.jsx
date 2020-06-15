import React from 'react';
import dsmpPhoto from '../../img/graphs-job-laptop-papers-590016.jpg';
import './dsmp.component.styles.scss'

const Dsmp = () =>{
    return(
        <div>
            <p>dsmp</p>
            <a  className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"> 
                <img src={dsmpPhoto} alt='dsmp' />
            </a>   
        </div>
    )
};

export default Dsmp;