import React, { useEffect, useRef, useState } from "react";
import Logo from "../../src/assets/logo.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Input, Layout, Menu } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import Kerry1 from "../../src/assets/poster4.jpg";
import Kerry2 from "../../src/assets/poster3.jpg";
import Kerry3 from "../../src/assets/poster5.jpg";
import TL from "../../src/assets/poster2.jpg";
import XBM from "../../src/assets/poster1.jpg";

const { Header, Sider, Content } = Layout;

export default function ImageEditor() {
  const navigate = useNavigate();
  const location = useLocation();
  const imageSrc = location.state?.image || "default_image.jpg";

  const [name, setName] = useState("");
  const [role, setrole] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const canvasRef = useRef(null);
  // const downloadBtnRef = useRef(null);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    updateImageWithText();
  }, [imageSrc]);

  const updateImageWithText = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = imageSrc;

    img.onload = function () {
      canvas.width = 1080;
      canvas.height = 1080;

      const scale = Math.min(
        canvas.width / img.width,
        canvas.height / img.height
      );
      const x = (canvas.width - img.width * scale) / 2;
      const y = (canvas.height - img.height * scale) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      let nameX, nameY, roleX, roleY, nameColor, roleColor;

      // Adjust text positions and colors based on the imageSrc
      if (imageSrc === XBM) {
        nameX = canvas.width / 2;
        nameY = canvas.height - 100;
        roleX = canvas.width / 2;
        roleY = canvas.height - 55;
        nameColor = "#F4D081";
        roleColor = "white";
      } else if (imageSrc === TL) {
        nameX = canvas.width / 2 - -170; // Shift text left
        nameY = canvas.height - 200; //shift text top
        roleX = canvas.width / 2 - -170;
        roleY = canvas.height - 160;
        nameColor = "#E30613";
        roleColor = "#042B60";
      } else if (imageSrc === Kerry2) {
        nameX = canvas.width / 2 + 280; // Shift text right
        nameY = canvas.height - 260; //shift text top
        roleX = canvas.width / 2 + 280;
        roleY = canvas.height - 220;
        nameColor = "#fff";
        roleColor = "#fff";
      } else if (imageSrc === Kerry1) {
        nameX = canvas.width / 2 - 280; // Shift text left
        nameY = canvas.height - 260; //shift text top
        roleX = canvas.width / 2 - 285;
        roleY = canvas.height - 220;
        nameColor = "#1061A3";
        roleColor = "#1B1B1B";
      } else if (imageSrc === Kerry3) {
        nameX = canvas.width / 2;
        nameY = canvas.height - 240; //shift text top
        roleX = canvas.width / 2;
        roleY = canvas.height - 200;
        nameColor = "#1762A6";
        roleColor = "#1B1B1B";
      }

      const capitalizedName = name.replace(/\b\w/g, (char) =>
        char.toUpperCase()
      );
      ctx.font = "500 38px 'Montserrat'";
      ctx.fillStyle = nameColor;
      ctx.fillText(capitalizedName, nameX, nameY);

      ctx.font = "24px 'Montserrat'";
      ctx.fillStyle = roleColor;
      ctx.fillText(role.toUpperCase(), roleX, roleY);

      // downloadBtnRef.current.style.display = "inline-block";
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    updateImageWithText();
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    const imageUrl = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "updated_image.png";
    link.click();
  };

  useEffect(() => {
    updateImageWithText();
  }, [imageSrc, name, role]);

  return (
    <Layout style={{ width: "100%", minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        breakpoint="md"
        style={{ backgroundColor: "#FFFFFF", textAlign: "center", padding: 20 }}
      >
        {!collapsed && (
          <img src={Logo} style={{ marginTop: 20, width: "80%" }} alt="Logo" />
        )}
        <Menu mode="inline" defaultSelectedKeys={["1"]}>
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
        <Header
          style={{
            backgroundColor: "#042B60",
            textAlign: "center",
            padding: "20px",
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

        <Content
          style={{ padding: 20, backgroundColor: "white", textAlign: "center" }}
        >
          <div
            style={{
              maxWidth: "800px",
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 20,
            }}
          >
            <Input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ height: 44, width: "70%" }}
            />
            <Input
              placeholder="Role"
              value={role}
              onChange={(e) => setrole(e.target.value)}
              style={{ height: 44, width: "70%" }}
            />
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 10,
              }}
            >
              {/* <Button
                onClick={updateImageWithText}
                style={{
                  backgroundColor: "#042B60",
                  color: "white",
                  padding: 10,
                }}
              >
                Submit
              </Button> */}
              <Button
                icon={<DownloadOutlined />}
                onClick={() => handleDownload(canvasRef.current)}
                style={{
                  backgroundColor: "#042B60",
                  color: "white",
                  padding: 10,
                }}
              >
                Download
              </Button>
            </div>
            <canvas
              ref={canvasRef}
              style={{ maxWidth: "70%", border: "1px solid #ccc" }}
            ></canvas>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
