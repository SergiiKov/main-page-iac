import React from 'react';

import './district-card.styles.scss'

const DistrictsCard = (props) =>{
    const { name, webSite, id, href } = props;
    return(
       <a href={href} target="_blank" rel="noopener noreferrer">
            <div className='card-container'>
                <img src={require(`../../img/${id}.png`)} alt='district card' className='img-district' />
                <h2>{'Назва: ' + name}</h2>
                <a href={href}>{'Cайт: ' + webSite}</a>
            </div>
       </a> 
    )
};

export default DistrictsCard;