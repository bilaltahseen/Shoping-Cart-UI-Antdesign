import React from 'react';
import { Card, Col, Row, Button, Divider, notification } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
const ProductCard = (props) => {
  const addCart = (item) => {
    props.add_cart(item);
    openNotification();
  };

  const openNotification = () => {
    notification.open({
      style: {
        color: '#1DA57A',
        fontWeight: 'bold',
        opacity: 0.9,
        cursor: 'pointer',
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
            src={props.itemImage}
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
        <Row gutter={[10]} className='add-cart-btn-row'>
          <Col>
            <Button
              title='Add item to cart'
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
          <Col>
            <Button
              title='Remove item from cart'
              disabled={
                !(props.cart
                  ? props.cart.filter((elem) => elem.itemId === props.itemId)
                      .length
                  : false)
              }
              onClick={() => props.remove_single(props.itemId)}
              type='primary'
              danger
            >
              <DeleteOutlined />
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
  remove_single: (itemId) =>
    dispatch({ type: 'REMOVE_SINGLE', payload: itemId }),
  setUrl: (urlKey) => dispatch({ type: 'SET_URL', payload: urlKey }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProductCard));
