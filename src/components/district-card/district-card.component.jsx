import React from 'react';

import './district-card.styles.scss'

const DistrictsCard = (props) =>{
    const { name, webSite, id, href } = props;
    return(
        <div className='card-container'>
            <img src={require(`../../img/${id}.jpg`)} alt='district card' />
            <h2>{'Район: ' + name}</h2>
            <a href={href}>{'Веб сайт: ' + webSite}</a>
        </div>
    )
};

export default DistrictsCard;