import React from 'react';
import DistrictsCard from '../district-card/district-card.component';

import './districts-list.styles.scss'

const DistrictsList = () =>{
    return(
        <div>
            <h2>districts list</h2>
    <div className='districts-list'>
        <DistrictsCard />
        <DistrictsCard />
        <DistrictsCard />
        </div>
        </div>
    
       
    )
};

export default DistrictsList;