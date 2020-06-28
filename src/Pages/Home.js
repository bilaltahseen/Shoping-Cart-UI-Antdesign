import React from 'react';
import { Layout, Row, Col, Card, Button } from 'antd';
import ProductCard from '../Components/ProductCard';

const { Content } = Layout;
const Home = () => {
  const items = [
    {
      itemId: 1,
      itemName: 'Nike Shoe',
      itemPrice: 129.99,
      itemDescription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      itemId: 2,
      itemName: 'Addidas Shoe',
      itemPrice: 209.99,
      itemDescription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      itemId: 3,
      itemName: 'Puma Shoe',
      itemPrice: 429.99,
      itemDescription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ];
  return (
    <div>
      <Layout style={{ padding: '24px 0' }}>
        <Content className='site-layout-background'>
          <center>
            <Row justify='start' gutter={[40, 16]} className='products-row'>
              {items.map((elem) => {
                return (
                  <ProductCard
                    itemId={elem.itemId}
                    itemName={elem.itemName}
                    itemDescription={elem.itemDescription}
                    itemPrice={elem.itemPrice}
                  />
                );
              })}
            </Row>
          </center>
        </Content>
      </Layout>
    </div>
  );
};

export default Home;
