import React from "react";

const Accordion = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="collapse collapse-plus bg-white shadow-md border border-gray-200 rounded-lg mb-2">
        <input type="radio" name="library-accordion" defaultChecked />
        <div className="collapse-title font-semibold text-lg">
          How can I become a library member?
        </div>
        <div className="collapse-content text-gray-700">
          Visit our library and fill out a membership form, or sign up online through our website.
        </div>
      </div>
      <div className="collapse collapse-plus bg-white shadow-md border border-gray-200 rounded-lg mb-2">
        <input type="radio" name="library-accordion" />
        <div className="collapse-title font-semibold text-lg">
          How do I borrow books?
        </div>
        <div className="collapse-content text-gray-700">
          Use your library card to check out books at our front desk or through our online catalog.
        </div>
      </div>
      <div className="collapse collapse-plus bg-white shadow-md border border-gray-200 rounded-lg mb-2">
        <input type="radio" name="library-accordion" />
        <div className="collapse-title font-semibold text-lg">
          What are the library’s opening hours?
        </div>
        <div className="collapse-content text-gray-700">
          Our library is open Monday to Friday from 9 AM to 7 PM, and Saturday from 10 AM to 5 PM.
        </div>
      </div>
    </div>
  );
};

export default Accordion;