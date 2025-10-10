// src/app/contact/page.tsx
'use client';

import { useState } from 'react';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaWhatsapp,
  FaTelegram
} from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: FaPhone,
      title: "Phone",
      details: "+251 9 135 48 797",
      subtitle: "Call us directly",
      href: "tel:+251913548797",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaEnvelope,
      title: "Email",
      details: "info@waliinfarm.com",
      subtitle: "Send us an email",
      href: "mailto:info@waliinfarm.com",
      color: "from-emerald-500 to-green-500"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Address",
      details: "Ashewa Meda, Addis Ababa",
      subtitle: "Visit our farm",
      href: "#",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: FaClock,
      title: "Hours",
      details: "24/7 Available",
      subtitle: "For bookings & inquiries",
      href: "#",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const socialLinks = [
    {
      icon: FaWhatsapp,
      name: "WhatsApp",
      href: "https://wa.me/251913548797",
      color: "hover:bg-green-500"
    },
    {
      icon: FaTelegram,
      name: "Telegram",
      href: "https://t.me/waliinfarm",
      color: "hover:bg-blue-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-emerald-50/30 pt-24 pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-200/[0.02] bg-[size:60px_60px]"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 mb-6">
            <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Get In Touch</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 bg-gradient-to-r from-gray-800 via-emerald-700 to-amber-600 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Reach out to us and let&apos;s create unforgettable Partnership.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-0 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:border-gray-300 transition-all duration-500 hover:scale-105 hover:shadow-xl shadow-sm"
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${method.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-800 text-lg mb-2">{method.title}</h3>
                  <p className="text-gray-900 font-semibold mb-1">{method.details}</p>
                  <p className="text-gray-500 text-sm">{method.subtitle}</p>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50">
              <h3 className="font-bold text-gray-800 text-xl mb-6">Connect With Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl transition-all duration-300 ${social.color} hover:text-white hover:scale-110 shadow-sm`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 text-gray-600" />
                  </a>
                ))}
              </div>
            </div>

            {/* Farm Location Map Placeholder */}
            {/* <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50">
              <h3 className="font-bold text-gray-800 text-xl mb-4">Visit Our Farm</h3>
              <div className="aspect-video bg-gradient-to-br from-emerald-100 to-amber-100 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <FaMapMarkerAlt className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <p className="text-gray-600 font-medium">Ashewa Meda, Addis Ababa</p>
                  <p className="text-gray-500 text-sm">Interactive Map Coming Soon</p>
                </div>
              </div>
            </div> */}
          </div>

          {/* Contact Form */}
          {/* <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-200/50 shadow-xl">
            <div className="mb-8">
              <h2 className="text-3xl font-serif font-bold text-gray-800 mb-3">Send us a Message</h2>
              <p className="text-gray-600">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    placeholder="+251 ___ ______"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="general">General Information</option>
                    <option value="partnership">Partnership</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </div>
  );
}