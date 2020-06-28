import React from 'react';
import { Layout, Row, Col, Card, Button, Divider } from 'antd';
import ProductCard from '../Components/ProductCard';

const { Content } = Layout;
const Home = () => {
  const items = [
    {
      itemId: 1,
      itemName: 'MAZDA-RX 8',
      itemImage:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/2006_Mazda_RX-8_2.6.jpg/280px-2006_Mazda_RX-8_2.6.jpg',
      itemPrice: 123.99,
      itemDescription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      itemId: 2,
      itemName: 'Tesla',
      itemImage:
        'https://www.tesla.com/sites/default/files/modelsx-new/social/model-x-social.jpg',
      itemPrice: 209.99,
      itemDescription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      itemId: 3,
      itemName: 'Vigo',
      itemImage:
        'https://apollo-singapore.akamaized.net/v1/files/i5x5yzq6iotk1-PK/image;s=850x0',
      itemPrice: 49.99,
      itemDescription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ];
  return (
    <div>
      <Layout style={{ padding: '24px 0' }}>
        <Content className='site-layout-background'>
          <h1>Rent a Car</h1>
          <Divider orientation='left'>How to rent</Divider>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </p>
          <center>
            <Row justify='start' gutter={[40, 16]} className='products-row'>
              {items.map((elem) => {
                return (
                  <ProductCard
                    itemId={elem.itemId}
                    itemName={elem.itemName}
                    itemDescription={elem.itemDescription}
                    itemImage={elem.itemImage}
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
