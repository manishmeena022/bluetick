import React from 'react';
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl";
import { FaQuora } from "react-icons/fa";

const Footer = () => {

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto">
        {/* Company Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Bluetick Consultants</h3>
            <p>Bluetick Consultants LLP</p>
            <p><a href="mailto:contact@bluetickconsultants.com" className="text-gray-400 hover:text-white transition duration-300">contact@bluetickconsultants.com</a></p>
            <p>Glassdoor Review Bluetick Consultants ISO Certified</p>
          </div>
          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-4">RESOURCES</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Blogs</a></li>
            </ul>
          </div>
          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-4">PRODUCTS</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Talk To Code</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">InterviewGPT</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">PrivacyDoc</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Sales Call Evaluator</a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Social Media Icons */}
      <div className="text-center mt-8">
          <p className="text-gray-400">Follow us on : </p>
          <TiSocialFacebook className="inline-block mr-4 text-3xl" />
          <SlSocialInstagram className="inline-block mr-4 text-3xl" />
          <TiSocialTwitter className="inline-block mr-4 text-3xl" />
          <SlSocialLinkedin className="inline-block mr-4 text-3xl" />
          <FaQuora className="inline-block mr-4 text-3xl" />
      </div>
      {/* Copyright */}
      <p className="text-center mt-8">&copy; 2024 All rights reserved by Bluetick Consultants LLP</p>
    </footer>
  )
}

export default Footer;
