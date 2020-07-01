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
import { styled } from '@material-ui/core/styles';

const GridStyles = styled(Grid)({
 
});

const GridStylesLeft = styled(Grid)({
    backgroundColor:'#b0bec5',
  });

  const GridStylesRight = styled(Grid)({
    backgroundColor:'#b0bec5',
    paddingTop: '20px'
  });


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
               <GridStyles container>
                   <GridStylesLeft item xs={12} md={6} sm={12} >
                        <MediaCardSmp />
                        <MediaCardIac />
                   </GridStylesLeft>
                   <GridStylesRight item xs={12} md={6} sm={12} >
                         <Scroll>
                        <DistrictsList districts={filterDistricts} />
                        </Scroll> 
                   </GridStylesRight>
               </GridStyles>
                    <Footer />
            </ThemeProvider>
        )
    };
}



export default App;

