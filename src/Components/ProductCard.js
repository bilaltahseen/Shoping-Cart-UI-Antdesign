import React from 'react';
import { Card, Col, Row, Button, Divider, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
const ProductCard = () => {
  const [inCart, setCart] = React.useState(false);
  return (
    <Col md={8}>
      <Card
        style={{ padding: 10 }}
        cover={
          <img
            height='320px'
            width='280px'
            alt='example'
            src='https://www.kvt-fastening.ch/-/media/kvt/products/brands/loctite/loctite-neue-bilder/loctite-243-320-x-280.png?h=280&w=320&la=en&hash=A094DB04A60DDB326DDD5DA6998B203254282028'
          />
        }
      >
        <Card.Meta
          title={<h2>Europe Street Beat</h2>}
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        <br></br>
        <Divider orientation='center'>Price</Divider>
        <p
          style={{
            lineHeight: '28px',
            fontWeight: 'lighter',
            fontSize: '46px',
            color: '#2ecc71',
            textAlign: 'center',
          }}
        >
          $ 300.00<span style={{ fontSize: '16px' }}>/month</span>
        </p>
        <Row justify='end'>
          <Col>
            <Button
              disabled={inCart}
              onClick={() => setCart(true)}
              type='primary '
            >
              Add to cart
            </Button>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default ProductCard;
