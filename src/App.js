import React from 'react';
import './App.less';
import 'antd/dist/antd.less';

import { Router } from './Router';
import { connect } from 'react-redux';

function App(props) {
  React.useEffect(() => props.setUrl('1'), []);
  return (
    <React.Fragment>
      <Router />
    </React.Fragment>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setUrl: (urlKey) => dispatch({ type: 'SET_URL', payload: urlKey }),
});

export default connect(null, mapDispatchToProps)(App);
