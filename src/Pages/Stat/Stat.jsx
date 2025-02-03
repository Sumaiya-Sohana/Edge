import React from "react";

const Stat = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="stats shadow-lg w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10h11M9 21V3m6 18V3m6 18V3"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Books</div>
          <div className="stat-value text-primary">50K</div>
          <div className="stat-desc">5% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 16l-4-4m0 0l4-4m-4 4h16"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Borrowed Books</div>
          <div className="stat-value text-secondary">12K</div>
          <div className="stat-desc">8% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-accent">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb" alt="Library Member" />
              </div>
            </div>
          </div>
          <div className="stat-title">Active Members</div>
          <div className="stat-value text-accent">3.5K</div>
          <div className="stat-desc">200 new members this month</div>
        </div>
      </div>
    </div>
  );
};

export default Stat;