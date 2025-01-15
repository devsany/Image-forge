import React, { useEffect, useRef, useState } from "react";
import * as fabric from "fabric";
import { useParams } from "react-router-dom";
import "./CanvasEditor.css"; // Ensure this file contains the updated styles

const CanvasEditor = () => {
  const { id } = useParams();
  const [imageSrc, setImageSrc] = useState(id);
  const canvasRef = useRef(null);

  useEffect(() => {
    let canvas = new fabric.Canvas(canvasRef.current);
    canvasRef.current = canvas;

    if (imageSrc) {
      fabric.FabricImage.fromURL(imageSrc, (img) => {
        canvas.clear(); // Clear canvas before adding a new image

        img.set({
          left: 0,
          top: 0,
          selectable: false, // Disable selection and edit of the image itself
        });

        img.scaleToWidth(canvas.width);
        img.scaleToHeight(canvas.height);

        canvas.add(img); // Add image to canvas as a background
        canvas.renderAll();
      });
    }

    // Cleanup the canvas when component unmounts or imageSrc changes
    return () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.clear();
      }
    };
  }, [imageSrc]);

  // Add Text to the canvas (text will be editable)
  const addText = () => {
    const canvas = canvasRef.current;
    const text = new fabric.Textbox("Your Text Here", {
      left: 50,
      top: 50,
      fontSize: 20,
      editable: true, // Make text editable
      fill: "black", // Default text color
    });
    canvas.add(text); // Add text to canvas above the image
    canvas.renderAll();
  };

  // Add Shape to the canvas
  const addShape = (shapeType) => {
    const canvas = canvasRef.current;
    let shape;

    switch (shapeType) {
      case "circle":
        shape = new fabric.Circle({
          radius: 50,
          fill: "blue",
          left: 100,
          top: 100,
          selectable: true,
          hasControls: true,
        });
        break;
      case "rectangle":
        shape = new fabric.Rect({
          width: 100,
          height: 60,
          fill: "red",
          left: 200,
          top: 200,
          selectable: true,
          hasControls: true,
        });
        break;
      default:
        return;
    }

    // Add shape to canvas and render
    canvas.add(shape);
    canvas.renderAll();
  };

  // Download the canvas as an image
  const downloadImage = () => {
    const canvas = canvasRef.current;
    const dataURL = canvas.toDataURL({
      format: "png",
      quality: 1,
    });

    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "modified-image.png";
    link.click();
  };

  return (
    <div className="canvas-editor-container">
      <h2 className="title">Canvas Editor</h2>
      <div className="canvas-wrapper">
        <canvas ref={canvasRef} width={800} height={400}></canvas>
      </div>
      <div className="controls">
        <p className="instructions">
          Use the tools below to add text, shapes, or download your canvas
          image.
        </p>

        <div className="button-container">
          <button
            className="control-button"
            onClick={addText}
            title="Add editable text to the canvas"
          >
            Add Text
          </button>
          <button
            className="control-button"
            onClick={() => addShape("circle")}
            title="Add a circle shape"
          >
            Add Circle
          </button>
          <button
            className="control-button"
            onClick={() => addShape("rectangle")}
            title="Add a rectangle shape"
          >
            Add Rectangle
          </button>
          <button
            className="control-button"
            onClick={downloadImage}
            title="Download the modified canvas as an image"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default CanvasEditor;
