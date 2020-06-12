import React from 'react';
import Iac from '../components/iac/iac.component';
import Dsmp from '../components/dsmp/dsmp.component';
import DistrictsList from '../components/districts-list/districts-list.component';
import { districts } from  '../components/districts';
import './main-page.styles.scss'

const MainPage = () =>{
    return(
        <div>
            <Dsmp />
            <Iac />
            <DistrictsList districts={districts}  /> 
        </div>
    );
};

export default MainPage;