import React from 'react';
import MainPage from '../page/main-page/main-page';
import Header from '../components/header/header.component';
import Footer from '../components/footer/footer.component';

const App = () => {  
    return(
        <div>
          <Header />
          <MainPage />
          <Footer />
      </div>
        );
    };

export default App;

