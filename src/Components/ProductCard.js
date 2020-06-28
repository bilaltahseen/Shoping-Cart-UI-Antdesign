import React from 'react';
import { Card, Col, Row, Button, Divider, Badge, notification } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
const ProductCard = (props) => {
  const [inCart, setCart] = React.useState(false);
  const addCart = (item) => {
    props.add_cart(item);
    setCart(true);
    openNotification();
  };

  const openNotification = () => {
    notification.open({
      style: {
        color: '#1DA57A',
        fontWeight: 'bold',
        opacity: 0.9,
      },
      placement: 'bottomRight',
      message: 'Item Added',
      description: `${props.itemName} is added to your cart.`,
      onClick: () => {
        window.location.replace('/cart');
        props.setUrl('2');
      },
      duration: 10,
    });
  };
  console.log(props);
  return (
    <Col key={props.itemId} md={8}>
      <Card
        hoverable
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
  url_key: state.url_key,
});

const mapDispatchToProps = (dispatch) => ({
  add_cart: (item) => dispatch({ type: 'ADD_PRODUCT', payload: item }),
  setUrl: (urlKey) => dispatch({ type: 'SET_URL', payload: urlKey }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProductCard));
