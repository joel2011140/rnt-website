import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="p-4 bg-chumbo-light min-h-screen">
      <h1 className="text-heading-28 md:text-heading-36 2xl:text-heading-44 font-bold">Home Page</h1>
      <p className="text-body-16 md:text-body-16 2xl:text-body-20">Welcome to the home page using the custom design system.</p>
      <button className="button-lg rounded-lg text-white hover:bg-aqua-rnt-dark">Large Button</button>
      {/* Add an image as an example asset */}
      <img src="/assets/images/example.jpg" alt="Example" className="mt-4" />
      {/* Add a video as an example asset */}
      <video controls className="mt-4 w-full max-w-lg">
        <source src="/assets/videos/example.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Add an SVG as an example asset */}
      <div className="mt-4">
        <svg className="w-16 h-16 text-aqua-rnt" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
        </svg>
      </div>
    </div>
  );
};

export default Home;