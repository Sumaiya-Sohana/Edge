import React from "react";

const Card = () => {
  const images = [
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1470163395405-d2b80e7450ed?w=400&h=300&fit=crop"
  ];

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {images.map((image, index) => (
        <div key={index} className="card bg-white w-full shadow-md rounded-lg overflow-hidden">
          <figure className="px-6 pt-6">
            <img
              src={image}
              alt={`Library Image ${index + 1}`}
              className="rounded-xl w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body items-center text-center p-4">
            <h2 className="card-title text-lg font-semibold">Book Title {index + 1}</h2>
            <p className="text-gray-600 text-sm">
              Explore the world of literature with our diverse collection.
            </p>
            <div className="card-actions mt-2">
              <button className="btn btn-primary">Borrow Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
