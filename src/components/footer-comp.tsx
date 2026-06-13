import React from "react";
import Image from "next/image";
import GTC from "../public/GTC Logo circular.png";

const FooterComp = () => {
  return (
    <footer className="bg-black text-gray-400 body-font">
      <div className="container px-5 py-8 mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 flex flex-col items-start">
          <a className="flex title-font font-medium items-center text-white mb-4">
            <Image
              src={GTC}
              alt="Galgotias Tech Council Logo"
              width={50}
              height={50}
            />
            <span className="ml-3 text-xl">Galgotias Tech Council</span>
          </a>
          <p className="text-sm">
            A hub for technology enthusiasts fostering innovation and
            collaboration.
          </p>
        </div>

        <div className="w-full md:w-1/4 mt-6 md:mt-0">
          <h2 className="text-white font-medium tracking-widest text-sm mb-3">
            Quick Links
          </h2>
          <nav className="list-none space-y-2">
            <li>
              <a href="/about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/events" className="hover:text-white">
                Events
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:text-white">
                Projects
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact Us
              </a>
            </li>
          </nav>
        </div>

        <div className="w-full md:w-1/4 mt-6 md:mt-0">
          <h2 className="text-white font-medium tracking-widest text-sm mb-3">
            Contact
          </h2>
          <p className="text-sm">
            <strong>Email:</strong> techcouncil@galgotiasuniversity.ac.in
          </p>
          <p className="text-sm">
            <strong>Phone:</strong> +91 18000 0000
          </p>
          <p className="text-sm">
            <strong>Address:</strong> Galgotias University, Greater Noida, India
          </p>
        </div>

        <div className="w-full md:w-1/4 mt-6 md:mt-0">
          <h2 className="text-white font-medium tracking-widest text-sm mb-3">
            Newsletter
          </h2>
          <p className="text-sm mb-4">
            Subscribe to our newsletter for the latest updates and events.
          </p>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              className="bg-gray-800 text-gray-300 rounded border border-gray-600 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Your Email"
            />
            <button
              type="submit"
              className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-light transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="bg-gray-800 py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Galgotias Tech Council. All rights
            reserved.
          </p>
          <div className="inline-flex space-x-3 mt-4 md:mt-0">
            <a
              href="https://facebook.com"
              className="text-gray-400 hover:text-white"
            >
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-400 hover:text-white"
            >
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-400 hover:text-white"
            >
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <circle cx="4" cy="4" r="2"></circle>
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComp;
