import React from 'react';
import { Layout, Row, Divider } from 'antd';
import ProductCard from '../Components/ProductCard';

const { Content } = Layout;
const Home = () => {
  const items = [
    {
      itemId: 0,
      itemName: 'Nike React Miler',
      itemPrice: '$130',
      itemImage:
        'https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/i1-f4a2691f-131f-4d2a-855b-d5c62fe68ccd/react-miler-mens-running-shoe-DgF6nr.jpg',
      itemDescription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      itemId: 1,
      itemName: 'Nike React Infinity Run Flyknit',
      itemPrice: '$160',
      itemImage:
        'https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/i1-f6bf583f-a3f3-4e98-af0b-5450583870d5/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg',
      itemDescription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      itemId: 2,
      itemName: "Nike Air Force 1 '07",
      itemPrice: '$90',
      itemImage:
        'https://c.static-nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/jomszuqr8gw3h18xhpro/air-force-1-07-mens-shoe-JkTGzADv.jpg',
      itemDescription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      itemId: 3,
      itemName: 'Nike SB Nyjah Free 2',
      itemPrice: '$95',
      itemImage:
        'https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/4688228a-b95b-4e49-9127-54723a205f1e/sb-nyjah-free-2-skate-shoe-MNkJB3.jpg',
      itemDescription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      itemId: 4,
      itemName: "Nike Blazer Mid '77 Vintage",
      itemPrice: '$100',
      itemImage:
        'https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/eric5lwitzffpoisq0rj/blazer-mid-77-vintage-shoe-flCCX4.jpg',
      itemDescription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      itemId: 5,
      itemName: 'Air Jordan 1 Low',
      itemPrice: '$90',
      itemImage:
        'https://static.nike.com/a/images/w_1536,c_limit/8dbe6e88-7289-4a62-803f-67fc1bd137be/image.jpg',
      itemDescription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      itemId: 6,
      itemName: 'Nike Air Max 2090',
      itemPrice: '$150',
      itemImage:
        'https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/i1-6a26d542-211b-4d07-b9f0-ad86040ed292/air-jordan-1-low-shoe-z3Tl2VeJ.jpg',
      itemDescription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      itemId: 7,
      itemName: 'Nike Air VaporMax Plus',
      itemPrice: '$200',
      itemImage:
        'https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/71a31b15-d464-48b5-a0df-80a6bc20c69c/air-max-2090-mens-shoe-3pVM46.jpg',
      itemDescription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      itemId: 8,
      itemName: 'Nike Air Vapormax 360',
      itemPrice: '$225',
      itemImage:
        'https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/4caca439-6eff-4347-bfa7-3f0c06f6af03/air-vapormax-plus-mens-shoe-w4xgr4.jpg',
      itemDescription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      itemId: 9,
      itemName: 'Air Jordan 1 Low SE',
      itemPrice: '$100',
      itemImage:
        'https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/i1-9944e829-002c-4a6b-93ed-cc8801c7eb0c/air-vapormax-360-mens-shoe-b09bdB.jpg',
      itemDescription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      itemId: 10,
      itemName: 'LeBron 17 Low',
      itemPrice: '$160',
      itemImage:
        'https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/d3b70ac4-2d16-4238-ba42-f02ebef80a32/air-jordan-1-low-se-shoe-B422jW.jpg',
      itemDescription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      itemId: 11,
      itemName: 'Nike Air VaporMax Flyknit 3',
      itemPrice: '$200',
      itemImage:
        'https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/e71e470a-9940-4304-8037-fdc5d5c1d6d6/lebron-17-low-basketball-shoe-fHcqqM.jpg',
      itemDescription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      itemId: 12,
      itemName: 'Nike Air Max 90 N7',
      itemPrice: '$130',
      itemImage:
        'https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/0461588d-8aae-46b2-a7cf-ab23b86a07af/air-vapormax-flyknit-3-mens-shoe-JsWsB7.jpg',
      itemDescription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      itemId: 13,
      itemName: 'Kyrie 6 N7',
      itemPrice: '$130',
      itemImage:
        'https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/67835ada-210e-45a8-bd77-7d359269938d/air-max-90-n7-mens-shoe-9qDv5V.jpg',
      itemDescription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      itemId: 14,
      itemName: 'Kyrie 6',
      itemPrice: '$130',
      itemImage:
        'https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/78ae93c8-4076-4619-aa94-6e48f9499775/kyrie-6-n7-basketball-shoe-n61njg.jpg',
      itemDescription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      itemId: 15,
      itemName: 'KD13',
      itemPrice: '$150',
      itemImage:
        'https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/f4cdfbef-f9a9-4db6-bb82-9960bdf87a5c/kyrie-6-basketball-shoe-TW3wsC.jpg',
      itemDescription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      itemId: 16,
      itemName: 'PG 4',
      itemPrice: '$110',
      itemImage:
        'https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/58303425-b100-41a9-b6aa-dd5264c1bd2f/kd13-basketball-shoe-kbKpNV.jpg',
      itemDescription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      itemId: 17,
      itemName: 'Nike Air Zoom UNVRS FlyEase',
      itemPrice: '$160',
      itemImage:
        'https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/0f9faf39-46f8-4b9d-93db-dc0163054609/pg-4-basketball-shoe-tszRns.jpg',
      itemDescription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      itemId: 18,
      itemName: 'Nike Air VaporMax FlyKnit 3 USA',
      itemPrice: '$200',
      itemImage:
        'https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/1b676324-6618-4f02-a810-63a941873172/air-zoom-unvrs-flyease-basketball-shoe-29tFGs.jpg',
      itemDescription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      itemId: 19,
      itemName: 'Nike Air Max 2090 BETRUE',
      itemPrice: '$150',
      itemImage:
        'https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/i1-0a8ccb39-2565-47b2-862c-24b206e6f156/air-vapormax-flyknit-3-usa-mens-shoe-SKwDlj.jpg',
      itemDescription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      itemId: 20,
      itemName: 'Nike Air Trainer 3',
      itemPrice: '$130',
      itemImage:
        'https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/c77ab6ec-a87e-4b4e-9b7f-9ed7a2adb818/air-max-2090-betrue-mens-shoe-vR9RlQ.jpg',
      itemDescription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      itemId: 21,
      itemName: 'Nike Air Max 90 Unlocked By You',
      itemPrice: '$160',
      itemImage:
        'https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/8ed5018a-6e99-48a5-83b1-6b1567856f28/air-trainer-3-mens-shoe-PMWWgS.jpg',
      itemDescription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      itemId: 22,
      itemName: 'Nike Air Zoom Pegasus 37',
      itemPrice: '$120',
      itemImage:
        'https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/d3d78cb7-e242-4e56-b02e-3521c554a6ea/custom-nike-air-max-90-unlocked-by-you.jpg',
      itemDescription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      itemId: 23,
      itemName: 'Nike Zoom Fly 3',
      itemPrice: '$160',
      itemImage:
        'https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/1a21d694-5d37-477a-9cab-73391716d27b/air-zoom-pegasus-37-mens-running-shoe-KLvDcj.jpg',
      itemDescription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ];
  return (
    <div>
      <Layout style={{ padding: '24px 0' }}>
        <Content className='site-layout-background'>
          <h1>Buy Online</h1>
          <Divider orientation='left'>How to buy</Divider>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </p>
          <center>
            <Row justify='start' gutter={[40, 16]} className='products-row'>
              {items.map((elem) => {
                return (
                  <ProductCard
                    itemId={elem.itemId}
                    itemName={elem.itemName}
                    itemDescription={elem.itemDescription}
                    itemImage={elem.itemImage}
                    itemPrice={elem.itemPrice}
                  />
                );
              })}
            </Row>
          </center>
        </Content>
      </Layout>
    </div>
  );
};

export default Home;
