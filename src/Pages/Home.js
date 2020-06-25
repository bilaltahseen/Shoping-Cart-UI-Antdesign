import React from 'react';
import { Layout, Row, Col, Card, Button } from 'antd';
import ProductCard from '../Components/ProductCard';

const { Content } = Layout;
const Home = () => {
  return (
    <div>
      <Layout style={{ padding: '24px 0' }}>
        <Content className='site-layout-background'>
          <center>
            <Row justify='start' gutter={[40, 16]} className='products-row'>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </Row>
          </center>
        </Content>
      </Layout>
    </div>
  );
};

export default Home;
