import React from 'react';
import { Route as Routes, Switch } from 'react-router-dom';

import { Layout, Divider } from 'antd';

import Navigation from './Components/Navigation';

const { Header, Content, Footer } = Layout;

export const Router = () => {
  return (
    <div>
      <React.Suspense fallback={<p>Loading</p>}>
        <Layout>
          <Header className='header'>
            <Navigation />
          </Header>
          <Divider type='vertical' />
          <Content style={{ padding: '0 20px' }}>
            <Routes
              path='/'
              exact
              component={React.lazy(() => import('./Pages/Home'))}
            ></Routes>
            <Switch>
              <Routes
                path='/cart'
                component={React.lazy(() => import('./Pages/Cart'))}
              ></Routes>
              <Routes
                path='/about'
                component={React.lazy(() => import('./Pages/About'))}
              ></Routes>
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Bilal Tahseen ©2020 Created with Ant UED
          </Footer>
        </Layout>
      </React.Suspense>
    </div>
  );
};
