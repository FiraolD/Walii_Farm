'use client';

import { useState } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitSuccess(true);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section className="py-20 bg-dark text-light">
      <div className="container">
        <h2 className="text-4xl font-serif font-bold text-center mb-4">
          Get In Touch
        </h2>
        <p className="text-center mb-16 text-accent max-w-2xl mx-auto">
          Have questions about your stay? Reach out to us!
        </p>

        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          {submitSuccess ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
              <p>We&apos;ll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-light placeholder:text-light/70"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-light placeholder:text-light/70"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-light placeholder:text-light/70"
                  placeholder="Booking inquiry, general question, etc."
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-light placeholder:text-light/70"
                  placeholder="Tell us how we can help..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-medium transition ${
                  isSubmitting 
                    ? 'bg-gray-500 cursor-not-allowed' 
                    : 'bg-primary hover:bg-secondary text-white'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}




// 'use client';

// import { 
//   FaPhone, 
//   FaEnvelope, 
//   FaMapMarkerAlt, 
//   FaClock,
//   FaWhatsapp,
//   FaTelegram,
//   FaInstagram,
//   FaFacebook,
//   FaLeaf
// } from 'react-icons/fa';

// export function ContactInfo() {
//   const contactMethods = [
//     {
//       icon: FaPhone,
//       title: "Call Us",
//       details: "+251 9 135 48 797",
//       subtitle: "Available 24/7 for bookings",
//       href: "tel:+251913548797",
//       color: "from-blue-500 to-cyan-500",
//       buttonText: "Call Now"
//     },
//     {
//       icon: FaWhatsapp,
//       title: "WhatsApp",
//       details: "+251 9 135 48 797",
//       subtitle: "Quick chat support",
//       href: "https://wa.me/251913548797",
//       color: "from-green-500 to-emerald-500",
//       buttonText: "Message"
//     },
//     {
//       icon: FaEnvelope,
//       title: "Email Us",
//       details: "info@waliinfarm.com",
//       subtitle: "We reply within 2 hours",
//       href: "mailto:info@waliinfarm.com",
//       color: "from-amber-500 to-orange-500",
//       buttonText: "Send Email"
//     },
//     {
//       icon: FaMapMarkerAlt,
//       title: "Visit Us",
//       details: "Ashewa Meda, Addis Ababa",
//       subtitle: "Experience farm life firsthand",
//       href: "#",
//       color: "from-purple-500 to-pink-500",
//       buttonText: "Get Directions"
//     }
//   ];

//   const socialLinks = [
//     {
//       icon: FaInstagram,
//       name: "Instagram",
//       href: "https://instagram.com/waliinfarm",
//       color: "hover:bg-gradient-to-r from-purple-500 to-pink-500",
//       bgColor: "bg-pink-500/10",
//       iconColor: "text-pink-600"
//     },
//     {
//       icon: FaFacebook,
//       name: "Facebook",
//       href: "https://facebook.com/waliinfarm",
//       color: "hover:bg-gradient-to-r from-blue-500 to-blue-600",
//       bgColor: "bg-blue-500/10",
//       iconColor: "text-blue-600"
//     },
//     {
//       icon: FaTelegram,
//       name: "Telegram",
//       href: "https://t.me/waliinfarm",
//       color: "hover:bg-gradient-to-r from-cyan-500 to-blue-400",
//       bgColor: "bg-cyan-500/10",
//       iconColor: "text-cyan-600"
//     },
//     {
//       icon: FaWhatsapp,
//       name: "WhatsApp",
//       href: "https://wa.me/251913548797",
//       color: "hover:bg-gradient-to-r from-green-500 to-emerald-500",
//       bgColor: "bg-green-500/10",
//       iconColor: "text-green-600"
//     }
//   ];

//   const businessHours = [
//     { day: "Monday - Friday", hours: "6:00 AM - 10:00 PM" },
//     { day: "Saturday", hours: "6:00 AM - 11:00 PM" },
//     { day: "Sunday", hours: "6:00 AM - 9:00 PM" }
//   ];

//   return (
//     <section className="relative py-20 bg-gradient-to-br from-gray-900 via-emerald-900/90 to-gray-800 text-white overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
//       <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
//       {/* Floating Leaves */}
//       <div className="absolute top-20 left-10 animate-float">
//         <FaLeaf className="w-8 h-8 text-emerald-400/30" />
//       </div>
//       <div className="absolute top-40 right-20 animate-float-delayed">
//         <FaLeaf className="w-6 h-6 text-amber-400/20" />
//       </div>
//       <div className="absolute bottom-32 left-1/4 animate-float-slow">
//         <FaLeaf className="w-5 h-5 text-emerald-300/25" />
//       </div>

//       <div className="container relative z-10">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
//             <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
//             <span className="text-sm font-medium text-white/90">Get In Touch</span>
//           </div>
//           <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-white via-amber-100 to-emerald-200 bg-clip-text text-transparent">
//             Contact Us
//           </h2>
//           <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
//             Ready to experience authentic farm living? Choose your preferred way to reach us.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//           {/* Contact Methods */}
//           <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
//             {contactMethods.map((method, index) => (
//               <div
//                 key={index}
//                 className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-xl"
//               >
//                 <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${method.color} mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
//                   <method.icon className="w-6 h-6 text-white" />
//                 </div>
//                 <h3 className="font-bold text-white text-xl mb-3">{method.title}</h3>
//                 <p className="text-white/90 font-semibold text-lg mb-2">{method.details}</p>
//                 <p className="text-white/70 mb-4">{method.subtitle}</p>
//                 <a
//                   href={method.href}
//                   className={`inline-flex items-center justify-center w-full py-3 px-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl text-white font-semibold transition-all duration-300 group-hover:scale-105 border border-white/30 hover:border-white/50`}
//                 >
//                   {method.buttonText}
//                   <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                   </svg>
//                 </a>
//               </div>
//             ))}
//           </div>

//           {/* Sidebar Information */}
//           <div className="space-y-6">
//             {/* Social Links */}
//             <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
//               <h3 className="font-bold text-white text-xl mb-4 flex items-center">
//                 <FaInstagram className="w-5 h-5 mr-2 text-amber-300" />
//                 Follow Our Journey
//               </h3>
//               <p className="text-white/70 mb-4">See daily farm life and updates</p>
//               <div className="grid grid-cols-2 gap-3">
//                 {socialLinks.map((social, index) => (
//                   <a
//                     key={index}
//                     href={social.href}
//                     className={`flex items-center justify-center p-3 ${social.bgColor} rounded-xl transition-all duration-300 ${social.color} hover:text-white hover:scale-105 border border-white/10`}
//                     aria-label={social.name}
//                   >
//                     <social.icon className={`w-5 h-5 ${social.iconColor}`} />
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Business Hours */}
//             <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
//               <h3 className="font-bold text-white text-xl mb-4 flex items-center">
//                 <FaClock className="w-5 h-5 mr-2 text-emerald-300" />
//                 Business Hours
//               </h3>
//               <div className="space-y-3">
//                 {businessHours.map((schedule, index) => (
//                   <div key={index} className="flex justify-between items-center py-2 border-b border-white/10 last:border-b-0">
//                     <span className="text-white/80">{schedule.day}</span>
//                     <span className="text-white font-semibold">{schedule.hours}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Quick Response */}
//             <div className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/30">
//               <div className="text-center">
//                 <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
//                   <FaLeaf className="w-6 h-6 text-white" />
//                 </div>
//                 <h3 className="font-bold text-white text-lg mb-2">Quick Response</h3>
//                 <p className="text-white/80 text-sm mb-3">
//                   We typically respond within 30 minutes during business hours
//                 </p>
//                 <div className="inline-flex items-center px-3 py-1 bg-emerald-500/30 rounded-full">
//                   <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
//                   <span className="text-emerald-200 text-sm font-medium">Available Now</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom CTA */}
//         <div className="text-center mt-16">
//           <div className="inline-flex items-center space-x-2 text-white/70 mb-4">
//             <FaMapMarkerAlt className="w-4 h-4 text-amber-400" />
//             <span>Ashewa Meda, Addis Ababa, Ethiopia</span>
//           </div>
//           <p className="text-white/60">
//             Come visit us and experience the authentic farm life
//           </p>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(10deg); }
//         }
//         @keyframes float-delayed {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-15px) rotate(-5deg); }
//         }
//         @keyframes float-slow {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-10px) rotate(8deg); }
//         }
//         .animate-float { animation: float 6s ease-in-out infinite; }
//         .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite; }
//         .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
//       `}</style>
//     </section>
//   );
// }