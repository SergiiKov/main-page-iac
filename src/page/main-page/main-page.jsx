import React from 'react';
import Iac from '../../components/iac/iac.component';
import Dsmp from '../../components/dsmp/dsmp.component';
import DistrictsList from '../../components/districts-list/districts-list.component';
import  SearchBox from '../../components/serch-box/serch-box.component';
import Scroll from '../../components/scroll/scroll.component';
import { districts } from '../../components/districts';

import MediaCardIac from '../../components/ui/card-iac';

import './main-page.styles.scss'

class MainPage extends React.Component {
    constructor(){
        super();

        this.state = {
            searchField:'',
            districts: districts 
        }
    };

    handleChange = e => {
        this.setState({searchField: e.target.value});
    }

    render(){
        const { searchField } = this.state;
        const filterDistricts = this.state.districts.filter(district => 
        district.name.toLowerCase().includes(searchField.toLowerCase()))
        return(
            <div >
            <div className='grid-container'>
                <div className='grid-item left'>
                   
                    {/* <Dsmp /> */}

                    <MediaCardIac />

                    <Iac />
                </div>
                <div className='grid-item right'>
                <Scroll>
                    <SearchBox 
                    placeholder={'Введіть назву закладу'} 
                    handleChange={this.handleChange} />
                        <DistrictsList districts={filterDistricts}  /> 
                    </Scroll> 
                    
                </div>
            </div> 
        </div>
        )
    };
}

export default MainPage;