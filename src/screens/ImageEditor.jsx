import React from "react";
import Logo from "../../src/assets/logo.svg";
import { useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";

const { Header, Sider, Content } = Layout;

export default function ImageEditor() {
  const location = useLocation();
  const imageSrc = location.state?.image || "default_image.jpg";

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
          defaultSelectedKeys={["1"]}
          style={{ marginTop: 20, textAlign: "center" }}
        >
          <Menu.Item key="1">Ramadan</Menu.Item>
          <Menu.Item key="2">Tamil New Year</Menu.Item>
          <Menu.Item
            key="3"
            //   icon={<SettingOutlined />}
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

        <Content style={{ padding: 20, backgroundColor: "white" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "center",
              gap: 30,
            }}
          >
            <img src={imageSrc} style={{ height: 500, width: 500 }} />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
