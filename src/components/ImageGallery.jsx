import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import "./ImageGallery.css"; // Ensure the path is correct

const ImageGallery = ({ onSelect }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchImages = async (query = "tv") => {
    const API_KEY = "9NEipd6TNkig5nALuVfgGo45JS2vnERdETN2oC3aAglinzlb4zE2HH1l"; // Replace with your API key
    const API_URL = `https://api.pexels.com/v1/search?query=${query}&per_page=12`;

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(API_URL, {
        headers: {
          Authorization: API_KEY,
        },
      });
      setImages(response.data.photos);
    } catch (err) {
      setError("Failed to fetch images. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchImages();
  }, []);
  return (
    <div>
      <SearchBar onSearch={fetchImages} />
      {loading && <p>Loading images...</p>}
      {error && <p className="error">{error}</p>}
      <div className="image-gallery">
        {images.map((image) => (
          <div key={image.id} className="thumbnail">
            <img src={image.src.medium} alt={image.alt} />
            <button onClick={() => onSelect(image.src.large)}>
              Add Captions
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
