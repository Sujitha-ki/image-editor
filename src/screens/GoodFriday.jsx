import { Layout, Menu } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../src/assets/logo.svg";
import ComingSoon from "../../src/assets/comingsoon.png";

const { Header, Sider, Content } = Layout;

export default function GoodFriday() {
  const navigate = useNavigate();

  return (
    <Layout
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Sider
        style={{ backgroundColor: "#FFFFFF", textAlign: "center", padding: 20 }}
        width="15%"
      >
        <img src={Logo} style={{ marginTop: 20 }} />
        <Menu
          mode="inline"
          defaultSelectedKeys={["3"]}
          style={{ marginTop: 20, textAlign: "center" }}
        >
          <Menu.Item key="1" onClick={() => navigate("/")}>
            Ramadan
          </Menu.Item>
          <Menu.Item key="2" onClick={() => navigate("/tamil-new-year")}>
            Tamil New Year
          </Menu.Item>
          <Menu.Item
            key="3"
            //   icon={<SettingOutlined />}
            onClick={() => navigate("/good-friday")}
          >
            Good Friday
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            backgroundColor: "#042B60",
            height: 82,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              color: "white",
              fontWeight: "600",
              fontFamily: "Montserrat",
              fontSize: 32,
            }}
          >
            Welcome To XBM Groups
          </p>
        </Header>
        <Content
          style={{
            padding: 20,
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={ComingSoon}
            style={{ height: 500, width: 500, marginTop: 60 }}
          />
        </Content>
      </Layout>
    </Layout>
  );
}
