import React from 'react';

const About: React.FC = () => {
  return (
    <div className="p-4 bg-chumbo-light min-h-screen">
      <h1 className="text-heading-28 md:text-heading-36 2xl:text-heading-44 font-bold">About Page</h1>
      <p className="text-body-16 md:text-body-16 2xl:text-body-20">This is the about page with TanStack Router.</p>
    </div>
  );
};

export default About;