
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-gray-900 text-white pt-12 pb-8">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div>
//             <h3 className="text-2xl font-bold mb-4">PrintWear</h3>
//             <p className="text-gray-300 mb-4">
//               Custom apparel printing with quality materials and fast delivery.
//               Express yourself with our customizable clothing options.
//             </p>
//             <div className="flex space-x-4">
//               <a href="#" className="text-white hover:text-secondary">
//                 <span className="sr-only">Facebook</span>
//                 <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
//                 </svg>
//               </a>
//               <a href="#" className="text-white hover:text-secondary">
//                 <span className="sr-only">Instagram</span>
//                 <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.231.585 1.793 1.145.561.562.896 1.125 1.146 1.793.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.91 4.91 0 01-1.146 1.793c-.562.561-1.125.896-1.793 1.146-.636.247-1.363.416-2.427.465-1.024.048-1.366.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.91 4.91 0 01-1.793-1.146 4.91 4.91 0 01-1.146-1.793c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.91 4.91 0 011.146-1.793A4.91 4.91 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.09 3.09 0 00-.748-1.15 3.09 3.09 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
//                 </svg>
//               </a>
//               <a href="#" className="text-white hover:text-secondary">
//                 <span className="sr-only">Twitter</span>
//                 <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//                 </svg>
//               </a>
//             </div>
//           </div>
//           <>
//             <h4 className="text-lg font-semibold mb-4">Shop</h4>
//             <ul className="space-y-2">
//               <li><Link to="/products/t-shirts" className="text-gray-300 hover:text-white">T-Shirts</Link></li>
//               <li><Link to="/products/hoodies" className="text-gray-300 hover:text-white">Hoodies</Link></li>
//               <li><Link to="/products/caps" className="text-gray-300 hover:text-white">Caps</Link></li>
//               <li><Link to="/products/mugs" className="text-gray-300 hover:text-white">Mugs</Link></li>
//               <li><Link to="/custom-designer" className="text-gray-300 hover:text-white">Custom Designer</Link></li>
//             </ul>
        
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Help</h4>
//             <ul className="space-y-2">
//               <li><Link to="/faq" className="text-gray-300 hover:text-white">FAQ</Link></li>
//               <li><Link to="/shipping" className="text-gray-300 hover:text-white">Shipping Info</Link></li>
//               <li><Link to="/returns" className="text-gray-300 hover:text-white">Returns & Exchanges</Link></li>
//               <li><Link to="/size-guide" className="text-gray-300 hover:text-white">Size Guide</Link></li>
//               <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
//             <p className="text-gray-300 mb-4">Stay updated with our latest designs and promotions.</p>
//             <form className="flex flex-col space-y-2">
//               <input 
//                 type="email" 
//                 placeholder="Your email address" 
//                 className="px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
//               />
//               <button 
//                 type="submit" 
//                 className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary/90 transition-colors"
//               >
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div>
//         <div className="border-t border-gray-800 mt-10 pt-6">
//           <p className="text-gray-400 text-center">© 2025 PrintWear. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   )
// }



import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-white text-white">
      {/* Wave Shape */}
      <div className="relative -mt-10 animate-fadeIn">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <defs>
            <linearGradient id="blueGradient" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1E3A8A" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </linearGradient>
          </defs>
          <path
            d="M0 80C120 30 280 20 480 50C680 80 840 40 1080 50C1320 60 1440 30 1440 30V120H0V80Z"
            fill="url(#blueGradient)"
          />
        </svg>
      </div>

      {/* Newsletter */}
      <div className="bg-gray-900 px-6 py-10 text-center">
        <h2 className="text-2xl font-bold mb-2">Our Newsletters</h2>
        <p className="text-gray-400 mb-4 max-w-xl mx-auto">
          Subscribe to receive latest updates and offers from PrintWear.
        </p>
        <form className="flex flex-col md:flex-row justify-center gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 rounded-md text-black w-full md:flex-1"
          />
          <button type="submit" className="bg-green-600 hover:bg-green-500 px-5 py-2 rounded-md font-semibold">
            Submit
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 py-12 px-6 md:px-12 text-gray-300 text-sm">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div>
            <h2 className="text-2xl font-bold text-green-500">PrintWear</h2>
            <p className="mt-2 text-sm text-gray-400">Your one-stop custom print shop for t-shirts, mugs & more!</p>
            <div className="flex space-x-3 mt-4">
              <a href="#"><FaFacebookF className="hover:text-blue-500" /></a>
              <a href="#"><FaTwitter className="hover:text-blue-400" /></a>
              <a href="#"><FaInstagram className="hover:text-pink-400" /></a>
              <a href="#"><FaLinkedinIn className="hover:text-blue-300" /></a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Shop</h4>
                   <ul className="space-y-2">
                       <li><Link to="/products/t-shirts" className="text-gray-300 hover:text-white">T-Shirts</Link></li>
                            <li><Link to="/products/hoodies" className="text-gray-300 hover:text-white">Hoodies</Link></li>
                            <li><Link to="/products/caps" className="text-gray-300 hover:text-white">Caps</Link></li>
                            <li><Link to="/products/mugs" className="text-gray-300 hover:text-white">Mugs</Link></li>
                            <li><Link to="/custom-designer" className="text-gray-300 hover:text-white">Custom Designer</Link></li>
                          </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Help</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:underline">FAQs</Link></li>
              <li><Link to="/shipping" className="hover:underline">Shipping Info</Link></li>
              <li><Link to="/returns" className="hover:underline">Returns & Exchanges</Link></li>
              <li><Link to="/size-guide" className="hover:underline">Size Guide</Link></li>
            </ul>
          </div>

          {/* Work Hours */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Work Hours</h3>
            <p className="mb-2">Mon - Sat: 7AM - 5PM</p>
            <p className="text-gray-400">Reach out to us anytime during work hours.</p>
            <button className="bg-green-600 hover:bg-green-500 mt-4 px-4 py-2 rounded-md">
              Call Us
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 text-center text-xs text-gray-500">
          © {currentYear} PrintWear. All rights reserved.
        </div>
      </footer>

      {/* Animation */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out;
        }
      `}</style>
    </div>
  );
}
