import React from 'react';
import { Menu } from 'antd';
import { ShoppingCartOutlined, HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Navigation = (props) => {
  return (
    <div>
      <Menu theme='dark' mode='horizontal' defaultSelectedKeys={props.url}>
        <Menu.Item key='1' onClick={() => props.setUrl('1')}>
          <Link to='/'>
            <HomeOutlined />
          </Link>
        </Menu.Item>
        <Menu.Item key='2' onClick={() => props.setUrl('2')}>
          <Link to='/cart'>
            Cart <ShoppingCartOutlined /> <strong>({props.cart.length})</strong>
          </Link>
        </Menu.Item>
        <Menu.Item key='3' onClick={() => props.setUrl('3')}>
          <Link to='/about'>About</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    url: state.url,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setUrl: (urlKey) => dispatch({ type: 'SET_URL', payload: urlKey }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
