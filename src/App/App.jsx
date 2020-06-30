import React from 'react';

import theme from '../components/ui/theme';
import { ThemeProvider } from '@material-ui/core/styles';

import Header from '../components/ui/header';
import Footer from '../components/ui/footer';
import DistrictsList from '../components/districts-list/districts-list.component';
import Scroll from '../components/scroll/scroll.component';
import MediaCardIac from '../components/ui/card-iac';
import MediaCardSmp from '../components/ui/card-smp';
import Grid from '@material-ui/core/Grid';
import { districts } from '../components/districts';

import './app.styles.scss';

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
               
               <Grid container>
                   <Grid item xs={12} md={6} sm={12} className='grid-item left' >
                        <MediaCardSmp />
                        <MediaCardIac />
                   </Grid>
                   <Grid item xs={12} md={6} sm={12} className='grid-item right' >
                         <Scroll>
                        <DistrictsList districts={filterDistricts} />
                        </Scroll> 
                   </Grid>
               </Grid>
                    <Footer />
            </ThemeProvider>
        )
    };
}



export default App;

