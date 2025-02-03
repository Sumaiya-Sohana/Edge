import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-neutral text-neutral-content p-10 w-full flex flex-col md:flex-row justify-between">
        <aside className="mb-6 md:mb-0">
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M12 2L1 21h22L12 2zm0 3.3l7.53 13.7H4.47L12 5.3zM11 10v4h2v-4h-2zm0 6v2h2v-2h-2z" />
          </svg>
          <p>
            Library Hub
            <br />
            Empowering Readers Since 2001
          </p>
          <p>123 Library Street, Booktown, BK 45678</p>
          <p>Email: support@libraryhub.com | Phone: (123) 456-7890</p>
        </aside>
        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Catalog</a></li>
            <li><a href="#">Membership</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>
        <nav>
          <h6 className="footer-title">Follow Us</h6>
          <div className="grid grid-flow-col gap-4">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;