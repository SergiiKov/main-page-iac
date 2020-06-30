import React from 'react';

import theme from '../components/ui/theme';
import { ThemeProvider } from '@material-ui/core/styles';

import Header from '../components/ui/header';
import Footer from '../components/ui/footer';
import DistrictsList from '../components/districts-list/districts-list.component';
import Scroll from '../components/scroll/scroll.component';
import MediaCardIac from '../components/ui/card-iac';
import MediaCardSmp from '../components/ui/card-smp';

import './app.styles.scss';

import { districts } from '../components/districts';

class App extends React.Component {
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
            <ThemeProvider theme={theme}>
                    <Header  placeholder={'Введіть назву закладу'} 
                    handleChange={this.handleChange}  />
                <div className='grid-container'>
                    <div className='grid-item left'>
                        <MediaCardSmp />
                        <MediaCardIac />
                    </div>
                    <div className='grid-item right'>
                        <Scroll>
                        <DistrictsList districts={filterDistricts} />
                        </Scroll> 
                    </div>
            </div>
                    <Footer />
            </ThemeProvider>
        )
    };
}



export default App;

