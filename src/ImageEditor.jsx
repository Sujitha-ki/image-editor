import React, { useState, useRef, useEffect } from "react";
import Poster1 from "../src/assets/poster1.jpg";
import Poster2 from "../src/assets/poster2.jpg";
import Poster3 from "../src/assets/poster3.jpg";
import Poster4 from "../src/assets/poster4.jpg";
import Poster5 from "../src/assets/poster5.jpg";

const ImageForm = () => {
  const [name, setName] = useState("");
  const [role, setrole] = useState("");
  const [selectedImage, setSelectedImage] = useState(Poster1); // Default image
  const canvasRef = useRef(null);
  const downloadBtnRef = useRef(null);

  // Load Montserrat font from Google Fonts
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const updateImageWithText = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = selectedImage;

    img.onload = function () {
      canvas.width = 1080;
      canvas.height = 1080;

      const scale = Math.min(
        canvas.width / img.width,
        canvas.height / img.height
      );
      const x = (canvas.width - img.width * scale) / 2;
      const y = (canvas.height - img.height * scale) / 2;

      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      let nameX, nameY, roleX, roleY, nameColor, roleColor;

      // Adjust text positions and colors based on the selected image
      if (selectedImage === Poster1) {
        nameX = canvas.width / 2;
        nameY = canvas.height - 100;
        roleX = canvas.width / 2;
        roleY = canvas.height - 55;
        nameColor = "#F4D081";
        roleColor = "white";
      } else if (selectedImage === Poster2) {
        nameX = canvas.width / 2 - -170; // Shift text left
        nameY = canvas.height - 200; //shift text top
        roleX = canvas.width / 2 - -170;
        roleY = canvas.height - 160;
        nameColor = "#E30613";
        roleColor = "#042B60";
      } else if (selectedImage === Poster3) {
        nameX = canvas.width / 2 + 280; // Shift text right
        nameY = canvas.height - 260; //shift text top
        roleX = canvas.width / 2 + 280;
        roleY = canvas.height - 220;
        nameColor = "#fff";
        roleColor = "#fff";
      } else if (selectedImage === Poster4) {
        nameX = canvas.width / 2 - 280; // Shift text left
        nameY = canvas.height - 260; //shift text top
        roleX = canvas.width / 2 - 285;
        roleY = canvas.height - 220;
        nameColor = "#1061A3";
        roleColor = "#1B1B1B";
      } else if (selectedImage === Poster5) {
        nameX = canvas.width / 2;
        nameY = canvas.height - 240; //shift text top
        roleX = canvas.width / 2;
        roleY = canvas.height - 200;
        nameColor = "#1762A6";
        roleColor = "#1B1B1B";
      }

      ctx.font = "500 38px 'Montserrat'";
      ctx.fillStyle = nameColor;
      ctx.fillText(name, nameX, nameY);

      ctx.font = "24px 'Montserrat'";
      ctx.fillStyle = roleColor;
      ctx.fillText(role.toUpperCase(), roleX, roleY);

      downloadBtnRef.current.style.display = "inline-block";
    };
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page
    updateImageWithText();
  };

  // Handle image selection change
  const handleImageChange = (e) => {
    // Select the correct image based on the dropdown selection
    if (e.target.value === "poster1") {
      setSelectedImage(Poster1);
    } else if (e.target.value === "poster2") {
      setSelectedImage(Poster2);
    } else if (e.target.value === "poster3") {
      setSelectedImage(Poster3);
    } else if (e.target.value === "poster4") {
      setSelectedImage(Poster4);
    } else if (e.target.value === "poster5") {
      setSelectedImage(Poster5);
    }
  };

  // Handle download button click
  const handleDownload = () => {
    const canvas = canvasRef.current;
    const imageUrl = canvas.toDataURL("image/png"); // Get the image as a data URL

    // Create a link element to trigger the download
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "updated_image.png"; // Specify the filename for the download
    link.click(); // Trigger the download
  };

  // Update the image when the selected image or form changes
  useEffect(() => {
    updateImageWithText();
  }, [selectedImage, name, role]);

  return (
    <div>
      <h2>Enter Your Details</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <br />
        <label htmlFor="role">Role: </label>
        <input
          type="text"
          id="role"
          name="role"
          value={role}
          onChange={(e) => setrole(e.target.value)}
          required
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>

      <h3>Preview Image:</h3>
      <canvas ref={canvasRef}></canvas>
      <br />

      {/* Image selection from internal asset library */}
      <label htmlFor="imageSelect">Select Image: </label>
      <select
        id="imageSelect"
        onChange={handleImageChange}
        value={
          selectedImage === Poster1
            ? "poster1"
            : selectedImage === Poster2
            ? "poster2"
            : selectedImage === Poster3
            ? "poster3"
            : selectedImage === Poster4
            ? "poster4"
            : "poster5"
        }
      >
        <option value="poster1">Ramadan Poster1</option>
        <option value="poster2">Ramadan Poster2</option>
        <option value="poster3">Ramadan Poster3</option>
        <option value="poster4">Ramadan Poster4</option>
        <option value="poster5">Ramadan Poster5</option>
      </select>
      <br />
      <br />

      {/* Button to download the updated image */}
      <button
        id="downloadBtn"
        ref={downloadBtnRef}
        style={{ display: "none" }}
        onClick={handleDownload}
      >
        Download Image
      </button>
    </div>
  );
};

export default ImageForm;
