import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Contact_Number: '',
    Institution_Name: '',
    Requirements: ''
  })

  const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    const res = await fetch('http://localhost:3000/api/form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    const data = await res.json();
    alert(data.message || 'Form submitted!');

    
    if(res.ok) {
      setFormData({
        Name: '',
        Email: '',
        Contact_Number: '',
        Institution_Name: '',
        Requirements: ''
      });
    }

    // Clear the form
    setFormData({
      Name: '',
      Email: '',
      Contact_Number: '',
      Institution_Name: '',
      Requirements: ''
    })

  } catch (error) {
    console.error(error);
    alert('Something went wrong.');
  }
};

  return (
    <div className='w-full px-3 mx-auto bg-white'>
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold text-gray-700">Get In Touch</h2>
        {/* <button className="text-xl text-gray-500 font-bold hover:text-black">&times;</button> */}
      </div>
      
      <p className="text-sm text-gray-600 mb-4">
        Have questions about our Products? Fill out the form below to get a call with us.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-sm">
        {/* Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Name *</label>
          <input
            type="text"
            placeholder="Name"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Email *</label>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Contact Number */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Contact Number *</label>
          <div className="flex">
            <span className="px-3 py-2 bg-gray-100 border border-r-0 rounded-l text-gray-600">+91</span>
            <input
              type="tel"
              placeholder="Contact Number"
              className="w-full px-3 py-2 border border-gray-300 rounded-r focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Institution Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Institution Name *</label>
          <input
            type="text"
            placeholder="Institution Name"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Requirements */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Requirements</label>
          <textarea
            placeholder="Requirements"
            className="w-full px-3 py-2 border border-gray-300 rounded h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-indigo-600 text-white font-medium py-2 rounded hover:bg-indigo-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form
