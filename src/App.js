import React from 'react';
import logo from './logo.svg';
import './App.less';
import 'antd/dist/antd.less';

import { Router } from './Router';

function App() {
  return (
    <React.Fragment>
      <Router />
    </React.Fragment>
  );
}

export default App;
