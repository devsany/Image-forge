# Canvas Editor Web Application

A powerful and interactive canvas editor built with React.js and Fabric.js. This application allows users to upload images, add text and shapes (circle, rectangle), and download the modified canvas as an image. It also integrates a search feature to find images from an external API (Pexels) for use on the canvas.

## Features

- **Upload and display image**: Upload an image from the Pexels API and display it on the canvas.
- **Add text**: Add editable text to the canvas at any position.
- **Add shapes**: Add customizable shapes like circles and rectangles to the canvas.
- **Download canvas as an image**: Save the modified canvas as a PNG image.
- **Search for images**: Use the search bar to find images based on a query and load them onto the canvas.

## Technologies Used

- **React.js**: For building the user interface.
- **Fabric.js**: To manage and manipulate the canvas elements.
- **Axios**: To make HTTP requests to the Pexels API.
- **Pexels API**: To fetch free stock images based on the search query.

## Getting Started

### Prerequisites

Make sure you have the following installed on your local machine:

- **Node.js**: Download and install from [Node.js official website](https://nodejs.org/).
- **npm** or **yarn**: These are package managers that come with Node.js.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/canvas-editor.git
   cd canvas-editor
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Open your browser and visit http://localhost:3000 to see the app in action.
   ```bash
   npm run dev
   ```

### Usage

1.  Search for Images: Enter a search term in the search bar and click the "Search" button to fetch images from the Pexels API.
2.  Select an Image: Click on any image thumbnail to add it to the canvas.
3.  Add Text: Click the "Add Text" button to add a default text box on the canvas. You can move, resize, and edit the text.
4.  Add Shapes: Choose between a circle or rectangle by clicking the respective buttons. Shapes can be resized and moved around.
5.  Download Image: Once you've finished editing the canvas, click the "Download" button to save the modified canvas as a PNG image.

### Code Structure

canvas-editor/
├── src/
│ ├── components/
│ │ ├── CanvasEditor.jsx # Main canvas editor component
│ │ ├── ImageGallery.jsx # Image gallery with search functionality
│ │ ├── SearchBar.jsx # Search bar for querying images
│ ├── App.js # Main React component
│ ├── index.js # Entry point for React application
├── public/
│ └── index.html # HTML file
├── package.json # Project dependencies and scripts
└── README.md # Project documentation

### Styling

The application uses custom CSS (or optionally Tailwind CSS) for styling the canvas and controls. The main style files are:

CanvasEditor.css: Styles for the canvas and control buttons.
ImageGallery.css: Styles for the image gallery and thumbnails.
