import React from 'react';
import DistrictsCard from '../district-card/district-card.component';
import SearchBox from '../serch-box/serch-box.component';
import './districts-list.styles.scss'


const DistrictsList = ({districts}) =>{
    const districtCardComponent = districts.map((district, i)=>{
        return (<DistrictsCard
        key={i} 
        id={districts[i].id} 
        name={districts[i].name} 
        webSite={districts[i].webSite} />
        );
    })
    return(
        <div>
            <h2>districts list</h2>
            <SearchBox />
                <div className='districts-list'>
                 {districtCardComponent}
                </div>
        </div> 
    )
};

export default DistrictsList;