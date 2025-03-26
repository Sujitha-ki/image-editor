import { Layout, Menu } from "antd";
import React from "react";
import Logo from "../../src/assets/logo.svg";
import Kerry1 from "../../src/assets/poster4.jpg";
import Kerry2 from "../../src/assets/poster3.jpg";
import Kerry3 from "../../src/assets/poster5.jpg";
import TL from "../../src/assets/poster2.jpg";
import XBM from "../../src/assets/poster1.jpg";
import { Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;

export default function LandingPage() {
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
              marginBottom: 80,
            }}
          >
            <div>
              <p style={{ color: "#1B1B1B", fontSize: 24, fontWeight: 600 }}>
                Kerry Indev
              </p>
              <div style={{ display: "flex", gap: 30 }}>
                {[Kerry1, Kerry2, Kerry3].map((imgSrc, index) => (
                  <Link key={index} to="/editor" state={{ image: imgSrc }}>
                    <img
                      src={imgSrc}
                      style={{
                        height: 160,
                        width: 160,
                        borderRadius: 8,
                        objectFit: "contain",
                      }}
                      alt={`Kerry ${index + 1}`}
                    />
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p style={{ color: "#1B1B1B", fontSize: 24, fontWeight: 600 }}>
                Timelapse
              </p>
              <Link to="/editor" state={{ image: TL }}>
                <img
                  src={TL}
                  style={{
                    height: 160,
                    width: 160,
                    borderRadius: 8,
                    objectFit: "contain",
                  }}
                />
              </Link>
            </div>
            <div>
              <p style={{ color: "#1B1B1B", fontSize: 24, fontWeight: 600 }}>
                XBM Technologies
              </p>
              <Link to="/editor" state={{ image: XBM }}>
                <img
                  src={XBM}
                  style={{
                    height: 160,
                    width: 160,
                    borderRadius: 8,
                    objectFit: "contain",
                  }}
                />
              </Link>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
