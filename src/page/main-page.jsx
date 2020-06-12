import React from 'react';
import Iac from '../components/iac/iac.component';
import Dsmp from '../components/dsmp/dsmp.component';
import DistrictsList from '../components/districts-list/districts-list.component';
import { districts } from  '../components/districts';
import './main-page.styles.scss'

const MainPage = () =>{
    return(
        <div className='grid-container'>
            <div className='grid-item'>
                <Dsmp />
                <Iac />
            </div>
            <div className='grid-item'>
                <DistrictsList districts={districts}  /> 
            </div>
        </div>
    );
};

export default MainPage;