import React from 'react';
import MainPage from '../page/main-page/main-page';
import SignIn from '../page/contact/contact-page';
import Header from '../components/header/header.component';
import { Switch, Route } from 'react-router-dom';

const App = () => {  
    return(
        <div>
          <Header />
          <MainPage />
        {/* <Switch>
          <Route exact path='/' component={MainPage} />
          <Route path='/signin' component={SignIn} />
        </Switch> */}
      </div>
        );
    };

export default App;

