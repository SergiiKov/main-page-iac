import React from 'react';
import MainPage from '../page/main-page/main-page';

import theme from '../components/ui/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import Header from '../components/ui/header';
import Footer from '../components/ui/footer';

const App = () => {  
    return(
            <ThemeProvider theme={theme}>
                    <Header />
                    <MainPage />
                    <Footer />
            </ThemeProvider>
        );
    };

export default App;

