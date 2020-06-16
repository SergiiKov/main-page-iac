import React from 'react';
import DistrictsCard from '../district-card/district-card.component';

import './districts-list.styles.scss'

const DistrictsList = ({ districts }) => {

  return(
    <div className='districts-list'>
       {
         districts.map( (user, i) =>{
          return(
            <DistrictsCard
            key={i} 
            id={districts[i].id}  
            name={districts[i].name} 
            webSite={districts[i].webSite}
            href={districts[i].href}
             />
          );
      })
       }
    </div>
)
}

    
   



export default DistrictsList;