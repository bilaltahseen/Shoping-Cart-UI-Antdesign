import React from 'react';
import { Layout, Menu } from 'antd';
import { ShoppingCartOutlined, HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Navigation = (props) => {
  return (
    <div>
      <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
        <Menu.Item key='1'>
          <Link to='/'>
            <HomeOutlined />
          </Link>
        </Menu.Item>
        <Menu.Item key='2'>
          <Link to='/cart'>
            Cart <ShoppingCartOutlined /> <strong>({props.cart.length})</strong>
          </Link>
        </Menu.Item>
        <Menu.Item key='3'>
          <Link to='/about'>About</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};
const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Navigation);
