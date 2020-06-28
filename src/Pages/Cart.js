import React from 'react';
import {
  Layout,
  Breadcrumb,
  Row,
  Col,
  Table,
  Space,
  Divider,
  Statistic,
  Button,
} from 'antd';
import { CreditCardOutlined, DeleteOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
const { Content } = Layout;
const Cart = (props) => {
  const columns = [
    {
      title: 'Id',
      dataIndex: 'itemId',
      key: 'itemId',
      render: (text) => <span>{text}</span>,
    },
    {
      title: 'Name',
      dataIndex: 'itemName',
      key: 'itemName',
    },

    {
      title: 'Price',
      key: 'itemPrice',
      dataIndex: 'itemPrice',
      render: (text, record) => (
        <Space size='middle'>
          <p>$ {text}</p>
        </Space>
      ),
    },
  ];

  const total = [0];
  props.cart.forEach((elem) => total.push(elem.itemPrice));

  return (
    <div>
      <Layout>
        <Content className='site-layout-background'>
          <Breadcrumb>Cart</Breadcrumb>
          <br></br>
          <Row justify='end'>
            <Col>
              <Button onClick={props.removeCart} danger>
                <DeleteOutlined />
                &nbsp;
                <span>Delete Cart</span>
              </Button>
            </Col>
          </Row>
          <h2>
            Total Items <strong>({props.cart.length})</strong>
          </h2>
          <br></br>
          <Table columns={columns} dataSource={props.cart} pagination={false} />
          <Divider orientation='right'>
            <p>Billing</p>
          </Divider>
          <Row justify='start'>
            <Col md={12}>
              <Divider orientation='left'>Policy</Divider>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <Divider orientation='left'>Terms</Divider>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </Col>
          </Row>
          <br></br>
          <Row justify='end'>
            <Col>
              <Statistic
                title='Total (tax incl).'
                value={`$ ${Math.round(
                  total.reduce((total, num) => total + num)
                ).toFixed(2)}`}
                precision={2}
              />
              <Button style={{ marginTop: 16 }} type='primary'>
                Pay now <CreditCardOutlined />
              </Button>
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  removeCart: () => dispatch({ type: 'DELETE_CART' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
