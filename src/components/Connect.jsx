import React, { useState } from 'react';

const Connect = () => {

    // Define state for form data
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        contactNumber: '',
        subject: '',
        message: ''
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    
    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };
  
    return (
        <div className="connect-container bg-gray-100 py-4 px-2 sm:px-0 text-center">
            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">LET'S CONNECT</h1>
            {/* Description */}
            <p className="text-lg text-gray-600 mb-4">Contact our Support to make an appointment with our experts.</p>
            
            {/* Form */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
   
                {/* Full Name input */}
                <div className="mb-2">
                    <label htmlFor="fullName" className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 placeholder-gray-500"
                        placeholder="Enter your full name"
                    />
                </div>
   
                {/* Email input */}
                <div className="mb-2">
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email *</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 placeholder-gray-500"
                        placeholder="Enter your email address"
                    />
                </div>
   
                {/* Contact Number input */}
                <div className="mb-2">
                    <label htmlFor="contactNumber" className="block text-gray-700 font-semibold mb-2">Contact Number *</label>
                    <input
                        type="tel"
                        id="contactNumber"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 placeholder-gray-500"
                        placeholder="Enter your contact number"
                    />
                </div>
   
                {/* Subject input */}
                <div className="mb-2">
                    <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">Subject *</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 placeholder-gray-500"
                        placeholder="Enter the subject of your message"
                    />
                </div>
   
                {/* Message input */}
                <div className="mb-2">
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message *</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 placeholder-gray-500"
                        placeholder="Enter your message"
                    ></textarea>
                </div>
   
                {/* Submit button */}
                <button type="submit" className="submit-button bg-blue-500 text-white py-3 px-8 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out">Submit</button>
            </form>
        </div>
    )
}

export default Connect;
