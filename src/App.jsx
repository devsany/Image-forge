import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import ImageGallery from "./components/ImageGallery";
import CanvasEditor from "./components/CanvasEditor";

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const handleImageSelect = (imageSrc) => {
    console.log("Image Selected:", imageSrc);
    setSelectedImage(imageSrc);
    // Navigate with the image source as a query parameter, encoded properly
    navigate(`/canvas-editor/${encodeURIComponent(imageSrc)}`);
  };

  return (
    <Routes>
      <Route path="/" element={<ImageGallery onSelect={handleImageSelect} />} />
      <Route path="/canvas-editor/:id" element={<CanvasEditor />} />
    </Routes>
  );
};

export default App;
