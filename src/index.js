import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header = () => (
  <header className="bg-gradient-to-r from-blue-400 to-purple-500 text-white text-center py-4">
    <h1 className="text-3xl font-bold">Essentra D. Agency</h1>
    <p className="text-lg">Private Essentials, Personally Delivered</p>
  </header>
);

const CEOSection = () => (
  <section className="text-center py-8 bg-gray-100">
    <h2 className="text-2xl font-bold text-blue-600 mb-4">Meet the CEO</h2>
    <img src="https://via.placeholder.com/300x400" alt="Daramola Damilola Dorcas" className="mx-auto mb-4 rounded-lg shadow-lg" />
    <p className="text-lg text-gray-800">Daramola Damilola Dorcas, the visionary founder and CEO, brings a wealth of experience in luxury service sectors.</p>
  </section>
);

const ServicesSection = () => (
  <section className="py-8 px-4 bg-white">
    <h2 className="text-2xl font-bold text-green-600 text-center mb-6">Our Signature Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-red-600">Elite Private Cleaning Services</h3>
        <p className="text-gray-700">Comprehensive and meticulous cleaning solutions tailored to the highest standards.</p>
      </div>
      <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-red-600">Bespoke Private Chef Services</h3>
        <p className="text-gray-700">Culinary indulgence with a private chef dedicated to your unique palate.</p>
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section className="bg-gradient-to-r from-purple-400 to-blue-500 text-white py-8 text-center">
    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
    <p className="text-lg">Phone: 08116774657, 09132606379</p>
    <p className="text-lg">Email: Essentra3d@gmail.com</p>
    <p className="text-lg">Address: Abeokuta, Lagos, Nigeria</p>
  </section>
);

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <CEOSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));