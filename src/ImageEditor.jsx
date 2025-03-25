import React, { useState, useRef, useEffect } from "react";
import Poster1 from "../src/assets/poster1.jpeg";
import Poster2 from "../src/assets/poster2.jpeg";
import Poster3 from "../src/assets/poster3.jpeg";

const ImageForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
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

  // Update image with text on the canvas
  const updateImageWithText = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Create a new image element
    const img = new Image();
    img.src = selectedImage; // Use selected or default image

    img.onload = function () {
      // Set canvas dimensions to 1080x1080
      canvas.width = 1080;
      canvas.height = 1080;

      // Calculate scaling factor to fit the image within 1080x1080 canvas
      const scale = Math.min(
        canvas.width / img.width,
        canvas.height / img.height
      );
      const x = (canvas.width - img.width * scale) / 2;
      const y = (canvas.height - img.height * scale) / 2;

      // Draw the scaled image onto the canvas
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);

      // Set text properties for the name using Montserrat
      ctx.font = "500 38px 'Montserrat'"; // Change font to Montserrat
      ctx.fillStyle = "#f4d081"; // Text color for name
      ctx.textAlign = "center"; // Center the text horizontally
      ctx.textBaseline = "middle"; // Vertically align the text to the middle

      // Calculate the bottom center Y position for the text
      const bottomY = canvas.height - 50; // 50px above the bottom

      // Add name at the bottom center
      ctx.fillText(name, canvas.width / 2, bottomY - 40); // Place the name slightly above the bottom

      // Set text properties for the phone number using Montserrat
      ctx.font = "24px 'Montserrat'"; // Different font style and size for phone number
      ctx.fillStyle = "white"; // Text color for phone number

      // Add phone number below the name
      ctx.fillText(phone, canvas.width / 2, bottomY); // Place the phone number below the name

      // Show the download button after the image is updated
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
  }, [selectedImage, name, phone]);

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
        <label htmlFor="phone">Phone Number: </label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
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
            : "poster3"
        }
      >
        <option value="poster1">Ramadan Poster1</option>
        <option value="poster2">Ramadan Poster2</option>
        <option value="poster3">Ramadan Poster3</option>
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
