import React from 'react';

const Slider = () => {
  return (
    <div>
      <div className="carousel w-full">
  
  <div id="item1" className="carousel-item w-full">
    <div className="w-full p-8 bg-blue-100 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Featured Books</h2>
      <div className="flex gap-4">
        <img
          src="a.jpg"
          className="w-32 h-48 object-cover rounded-lg"
          alt="Book Cover 1"
        />
        <img
          src="b.jpg"
          className="w-32 h-48 object-cover rounded-lg"
          alt="Book Cover 2"
        />
        <img
          src="c.jpg"
          className="w-32 h-48 object-cover rounded-lg"
          alt="Book Cover 3"
        />
      </div>
    </div>
  </div>

  
  <div id="item2" className="carousel-item w-full">
    <div className="w-full p-8 bg-green-100 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">New Arrivals</h2>
      <div className="flex gap-4">
        <img
          src="m.jpg"
          className="w-32 h-48 object-cover rounded-lg"
          alt="New Book 1"
        />
        <img
          src="x.jpg"
          className="w-32 h-48 object-cover rounded-lg"
          alt="New Book 2"
        />
        <img
          src="y.webp"
          className="w-32 h-48 object-cover rounded-lg"
          alt="New Book 3"
        />
      </div>
    </div>
  </div>

  
  <div id="item3" className="carousel-item w-full">
    <div className="w-full p-8 bg-yellow-100 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
      <ul className="list-disc pl-6">
        <li className="mb-2">Book Reading Session - October 15th</li>
        <li className="mb-2">Author Meet & Greet - October 20th</li>
        <li className="mb-2">Library Workshop - October 25th</li>
      </ul>
    </div>
  </div>

  
  <div id="item4" className="carousel-item w-full">
    <div className="w-full p-8 bg-purple-100 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Library Hours</h2>
      <p className="text-lg">Monday - Friday: 9 AM - 7 PM</p>
      <p className="text-lg">Saturday: 10 AM - 5 PM</p>
      <p className="text-lg">Sunday: Closed</p>
    </div>
  </div>
</div>


<div className="flex w-full justify-center gap-2 py-2">
  <a href="#item1" className="btn btn-xs">1</a>
  <a href="#item2" className="btn btn-xs">2</a>
  <a href="#item3" className="btn btn-xs">3</a>
  <a href="#item4" className="btn btn-xs">4</a>
</div>
    </div>
  );
};

export default Slider;