import React from 'react';
import Iac from '../components/iac/iac.component';
import Dsmp from '../components/dsmp/dsmp.component';
import Districts from '../components/districts/districts.component';

import './main-page.styles.scss'

const MainPage = () =>{
    return(
        <div>
            <Dsmp />
            <Iac />
            <Districts /> 
        </div>
    );
};

export default MainPage;