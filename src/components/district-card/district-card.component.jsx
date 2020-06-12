import React from 'react';

import './district-card.styles.scss'

const DistrictsCard = (props) =>{
    const { name, webSite, id } = props;
    return(
        <div className='card-container'>
            <img src={require(`../../img/${id}.jpg`)} alt='district card' />
            <h2>{name}</h2>
            <p>{webSite}</p>
        </div>
    )
};

export default DistrictsCard;