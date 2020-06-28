import React from 'react';
import { Layout, Row, Col, Divider } from 'antd';
const { Content } = Layout;
const About = () => {
  return (
    <div>
      <Layout style={{ padding: '24px 0' }}>
        <Content className='site-layout-background'>
          <h1>About Us</h1>
          <Row align='middle' justify='space-between'>
            <Col md={12} sm={24}>
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
            <Col
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
              md={12}
              sm={24}
            >
              <img
                style={{ paddingBottom: 20 }}
                src='https://img.icons8.com/color/240/000000/shopaholic.png'
              />
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
};

export default About;
