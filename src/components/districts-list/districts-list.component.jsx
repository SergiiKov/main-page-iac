import React from 'react';
import DistrictsCard from '../district-card/district-card.component';
// import SearchBox from '../serch-box/serch-box.component';
import './districts-list.styles.scss'

const DistrictsList = ({ districts }) => {

  return(
    <div>
       {
         districts.map( (user, i) =>{
          return(
            <DistrictsCard className='districts-list'
            key={i} 
            id={districts[i].id}  
            name={districts[i].name} 
            webSite={districts[i].webSite} />
          );
      })
       }
    </div>
)
}

    
   



export default DistrictsList;