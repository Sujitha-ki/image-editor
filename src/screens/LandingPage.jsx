import { Layout, Menu } from "antd";
import React, { useState } from "react";
import Logo from "../../src/assets/logo.svg";
import Kerry1 from "../../src/assets/poster4.jpg";
import Kerry2 from "../../src/assets/poster3.jpg";
import Kerry3 from "../../src/assets/poster5.jpg";
import TL from "../../src/assets/poster2.jpg";
import XBM from "../../src/assets/poster1.jpg";
import { Link, useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;

export default function LandingPage() {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false); // Collapsible Sidebar

  return (
    <Layout style={{ width: "100%", minHeight: "100vh" }}>
      {/* Sidebar with Collapse Feature */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        breakpoint="md"
        style={{
          backgroundColor: "#FFFFFF",
          textAlign: "center",
          padding: collapsed ? 10 : 20,
        }}
      >
        {!collapsed && (
          <img src={Logo} style={{ marginTop: 20, width: "80%" }} alt="Logo" />
        )}
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{ marginTop: 20, textAlign: "center", fontSize: "16px" }}
        >
          <Menu.Item key="1" onClick={() => navigate("/")}>
            Ramadan
          </Menu.Item>
          <Menu.Item key="2" onClick={() => navigate("/tamil-new-year")}>
            Tamil New Year
          </Menu.Item>
          <Menu.Item key="3" onClick={() => navigate("/good-friday")}>
            Good Friday
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout>
        {/* Header */}
        <Header
          style={{
            backgroundColor: "#042B60",
            height: 82,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "white",
              fontWeight: "600",
              fontSize: "clamp(20px, 4vw, 32px)",
            }}
          >
            Welcome To XBM Groups
          </p>
        </Header>

        {/* Content */}
        <Content style={{ padding: 20, backgroundColor: "white" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: 30,
            }}
          >
            {/* Kerry Indev Section */}
            <div style={{ width: "100%", maxWidth: 600 }}>
              <p
                style={{
                  color: "#1B1B1B",
                  fontSize: "clamp(18px, 2vw, 24px)",
                  fontWeight: 600,
                }}
              >
                Kerry Indev
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 30,
                  justifyContent: "flex-start",
                }}
              >
                {[Kerry1, Kerry2, Kerry3].map((imgSrc, index) => (
                  <Link key={index} to="/editor" state={{ image: imgSrc }}>
                    <img
                      src={imgSrc}
                      style={{
                        height: "auto",
                        width: "100%",
                        maxWidth: 160,
                        borderRadius: 8,
                        objectFit: "contain",
                      }}
                      alt={`Kerry ${index + 1}`}
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* Timelapse Section */}
            <div style={{ width: "100%", maxWidth: 600, textAlign: "left" }}>
              <p
                style={{
                  color: "#1B1B1B",
                  fontSize: "clamp(18px, 2vw, 24px)",
                  fontWeight: 600,
                }}
              >
                Timelapse
              </p>
              <Link to="/editor" state={{ image: TL }}>
                <img
                  src={TL}
                  style={{
                    height: "auto",
                    width: "100%",
                    maxWidth: 160,
                    borderRadius: 8,
                    objectFit: "contain",
                  }}
                  alt="Timelapse"
                />
              </Link>
            </div>

            {/* XBM Technologies Section */}
            <div style={{ width: "100%", maxWidth: 600, textAlign: "left" }}>
              <p
                style={{
                  color: "#1B1B1B",
                  fontSize: "clamp(18px, 2vw, 24px)",
                  fontWeight: 600,
                }}
              >
                XBM Technologies
              </p>
              <Link to="/editor" state={{ image: XBM }}>
                <img
                  src={XBM}
                  style={{
                    height: "auto",
                    width: "100%",
                    maxWidth: 160,
                    borderRadius: 8,
                    objectFit: "contain",
                  }}
                  alt="XBM Technologies"
                />
              </Link>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
