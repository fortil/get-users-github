import React from 'react';
import Provider from './containers/Providers';
import Layout from './containers/Layout';
import Home from './pages/Home';
import USER from './pages/User';

function App() {
  return (
    <Provider>
      <Layout exact path='/'>
        <Home />
      </Layout>
      <Layout path='/user'>
        <USER />
      </Layout>
    </Provider>
  );
}

export default App;
