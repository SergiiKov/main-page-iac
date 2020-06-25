import React from 'react';
import MainPage from '../page/main-page/main-page';
// import Header from '../components/header/header.component';
import Footer from '../components/footer/footer.component';

import theme from '../components/ui/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import Header from '../components/ui/header';

const App = () => {  
    return(
        <div>
 <ThemeProvider theme={theme}>
          <Header />
          <MainPage />
          <Footer />
 </ThemeProvider>
      </div>
        );
    };

export default App;

