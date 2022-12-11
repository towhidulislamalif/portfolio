import React from 'react';

const Blog = () => {
  return (
    <div className="h-screen flex items-center justify-center pb-16 text-grayish-blue">
      <div className="flex justify-center items-center">
        <p className="text-6xl font-bold">C</p>
        <div className="w-7 h-7 border-4 border-dashed rounded-full mb-2 animate-spin mt-3 border-primary"></div>
        <p className="text-6xl font-bold mr-2">ming</p>
        <p className="text-6xl font-bold">S</p>
        <div className="w-7 h-7 border-4 border-dashed rounded-full mb-2 animate-spin mt-3 border-primary"></div>
        <div className="w-7 h-7 border-4 border-dashed rounded-full mb-2 animate-spin mt-3 border-primary"></div>
        <p className="text-6xl font-bold">n</p>
      </div>
    </div>
  );
};

export default Blog;
