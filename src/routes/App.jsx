import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Routes
import Layout from '../components/Layout';
import Home from '../containers/Home';

//Style
import '../styles/routes/App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
