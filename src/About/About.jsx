import React from 'react';

const About = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold text-center mb-4">About Our Library</h1>
            <p className="text-lg text-gray-700 mb-4">
                Welcome to our library, a place where knowledge meets curiosity. Our mission is to provide a quiet,
                resourceful, and engaging environment for book lovers, researchers, and students.
            </p>
            <h2 className="text-2xl font-semibold mt-6">Our Collection</h2>
            <p className="text-lg text-gray-700 mb-4">
                We offer an extensive collection of books, journals, and digital resources across various genres
                and subjects. Whether you're looking for fiction, non-fiction, academic resources, or digital archives,
                we have something for everyone.
            </p>
            <h2 className="text-2xl font-semibold mt-6">Facilities & Services</h2>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
                <li>Comfortable reading spaces</li>
                <li>Free Wi-Fi and computer access</li>
                <li>Online catalog and book reservations</li>
                <li>Regular literary events and book clubs</li>
                <li>Assistance from knowledgeable staff</li>
            </ul>
            <h2 className="text-2xl font-semibold mt-6">Visit Us</h2>
            <p className="text-lg text-gray-700">
                Our library is open to all, and we welcome you to explore our resources. Visit us today and immerse yourself
                in a world of knowledge and discovery.
            </p>
        </div>
    );
};

export default About;