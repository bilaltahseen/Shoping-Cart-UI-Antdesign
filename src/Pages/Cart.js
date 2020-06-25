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
const { Content } = Layout;
const Cart = () => {
  const columns = [
    {
      title: 'Id',
      dataIndex: 'Product',
      key: 'Product',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Name',
      dataIndex: 'ProductName',
      key: 'ProductName',
    },

    {
      title: 'Price',
      key: 'Price',
      dataIndex: 'Price',
      render: (text, record) => (
        <Space size='middle'>
          <p>$ {text}</p>
        </Space>
      ),
    },
  ];

  const data = [
    {
      Product: '1',
      ProductName: 'Apple Smart Watch',

      Price: 12.99,
    },
    {
      Product: '1',
      ProductName: 'Apple Smart Watch',

      Price: 12.99,
    },
    {
      Product: '1',
      ProductName: 'Apple Smart Watch',

      Price: 12.99,
    },
    {
      Product: '1',
      ProductName: 'Apple Smart Watch',

      Price: 12.99,
    },

    {
      Product: '1',
      ProductName: 'Apple Smart Watch',

      Price: 12.99,
    },
    {
      Product: '1',
      ProductName: 'Apple Smart Watch',

      Price: 12.99,
    },
    {
      Product: '1',
      ProductName: 'Apple Smart Watch',

      Price: 12.99,
    },

    {
      Product: '1',
      ProductName: 'Apple Smart Watch',

      Price: 12.99,
    },
  ];
  const total = [];
  data.forEach((elem) => total.push(elem.Price));

  return (
    <div>
      <Layout>
        <Content className='site-layout-background'>
          <Breadcrumb>Cart</Breadcrumb>
          <br></br>
          <Row justify='end'>
            <Col>
              <Button danger>
                <DeleteOutlined />
                &nbsp;
                <span>Delete Cart</span>
              </Button>
            </Col>
          </Row>
          <h2>
            Total Items <strong>({total.length})</strong>
          </h2>
          <br></br>
          <Table columns={columns} dataSource={data} pagination={false} />
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

export default Cart;
