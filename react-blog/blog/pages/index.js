import React, { useState } from "react";
import Head from "next/head";
import { Row, Col, List, Icon } from "antd";
import Header from "../components/Header";
import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import "../static/style/pages/index.css";
import axios from "axios";


const Home = (list) => {
  console.log(list);
  
  const [mylist, setMylist] = useState(list.data);
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <List
            header={<div>最新日志</div>}
            itemLayout="vertical" //
            dataSource={mylist}
            renderItem={item => (
              <List.Item>
                <div className="list-title">{item.title}</div>
                <div className="list-icon">
                  <span><Icon type="calendar" /> {item.addTime}</span>
                  <span><Icon type="folder" />  {item.typeName}</span>
                  <span><Icon type="fire" /> {item.view_count}</span>
                </div>
                <div className="list-context">{item.introduce}</div>
              </List.Item>
            )}
          />
        </Col>
        <Col className="comm-box" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
        </Col>
      </Row>
      <Footer />
    </>
  );
};

Home.getInitialProps = async ()=> {
  const promise = new Promise((resolve)=> {
    axios("http://127.0.0.1:7001/default/getArticleList").then((res)=>{
      console.log('data：：：',res.data);
      resolve(res.data)
    });
  })

  return await promise
}
export default Home;
