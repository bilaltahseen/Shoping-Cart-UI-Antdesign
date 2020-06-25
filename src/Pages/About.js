import React from 'react';
import { Layout } from 'antd';
const { Content } = Layout;
const About = () => {
  return (
    <div>
      <Layout style={{ padding: '24px 0' }}>
        <Content className='site-layout-background'>
          <h1>About</h1>
        </Content>
      </Layout>
    </div>
  );
};

export default About;
