import React from 'react';
import { Card, Col, Row, Button, Divider, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
const ProductCard = (props) => {
  const [inCart, setCart] = React.useState(false);
  const addCart = (item) => {
    props.add_cart(item);
    setCart(true);
  };
  return (
    <Col key={props.itemId} md={8}>
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
          title={<h2>{props.itemName}</h2>}
          description={props.itemDescription}
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
          $ {props.itemPrice}
          <span style={{ fontSize: '16px' }}>/month</span>
        </p>
        <Row justify='end'>
          <Col>
            <Button
              disabled={
                props.cart
                  ? props.cart.filter((elem) => elem.itemId === props.itemId)
                      .length
                  : false
              }
              onClick={() =>
                addCart({
                  itemId: props.itemId,
                  itemName: props.itemName,
                  itemPrice: props.itemPrice,
                  itemDescription: props.itemDescription,
                })
              }
              type='primary'
            >
              Add to cart
            </Button>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  add_cart: (item) => dispatch({ type: 'ADD_PRODUCT', payload: item }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
