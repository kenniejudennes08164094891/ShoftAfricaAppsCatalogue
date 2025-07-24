import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExchangeAlt,
  faMoneyBillWave,
  faWallet,
  faPiggyBank,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { ImageProps,OniduuruRoutes } from "../utils/models/stores";
import OniduuruQR from "../components/OniduuruQR";

function Oniduuru() {
   const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fefce8] via-[#fef3c7] to-[#fcd34d] text-gray-800">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-[#1e293b] text-white shadow-md">
        <div className="text-2xl font-bold">Oniduuru Marketplace</div>
        <button   onClick={() => setShowModal(true)} className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300">QR scan</button>
      </nav>

      {/* Hero Section */}
      <section id="home" className="grid md:grid-cols-2 items-center gap-8 px-6 py-20">
        <div>
          <h1 className="text-5xl font-extrabold leading-tight text-[#1e293b]">
            Empowering African Talents<br />through <span className="text-yellow-500">Opportunities</span>
          </h1>
          <p className="mt-6 text-lg">
            Oniduuru is a Marketplace-as-a-Service platform that bridges professional solution providers with recruiters across Africa, fostering collaboration and driving financial independence
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button onClick={() => window.open(OniduuruRoutes.scouterSignUp, "_blank")} className="bg-[#1e293b] text-white px-6 py-3 rounded-lg hover:bg-[#334155]">Scouter Sign-up</button>
            <button onClick={() => window.open(OniduuruRoutes.talentSignUp, "_blank")} className="bg-white border border-[#1e293b] px-6 py-3 rounded-lg hover:bg-gray-100">Join as Talent</button>
          </div>
        </div>
        <img src={ImageProps.oniduuruBg} alt="African Professionals" className="rounded-2xl shadow-xl" />
      </section>

      {/* Talents & Scouters Section */}
      <section id="talents" className="px-6 py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-[#1e293b] mb-4">For Talents & Scouters</h2>
        <p className="text-lg max-w-3xl mx-auto mb-12">
          Talents can showcase their services or products while scouters easily find and recruit verified professionals across Africa.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 border rounded-lg shadow hover:shadow-lg group relative">
            {/* Image wrapper with zoom effect */}
            <div className="overflow-hidden rounded-xl relative">
              <img
                src={ImageProps.talentPicture}
                alt="Talents"
                className="mb-4 rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-105"
              />

              {/* Fade-in overlay */}
              <div
                className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
              ></div>
            </div>

            <h3 className="text-xl font-semibold text-[#1e293b] mt-4">Talents</h3>
            <p>Create your profile, showcase your work, and connect with top recruiters across Africa.</p>
          </div>

          <div className="p-6 border rounded-lg shadow hover:shadow-lg group relative">
            {/* Image wrapper with zoom and overlay */}
            <div className="overflow-hidden rounded-xl relative">
              <img
                src={ImageProps.scouterPicture}
                alt="Scouters"
                className="mb-4 rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-105"
              />

              {/* Fade-in overlay on hover */}
              <div
                className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
              ></div>
            </div>

            <h3 className="text-xl font-semibold text-[#1e293b] mt-4">Scouters</h3>
            <p>Sign up, discover vetted talents, manage contracts, & resolve business needs.</p>
          </div>

        </div>
      </section>

      {/* Wallet Platform Section */}
      <section id="wallet" className="py-16 md:py-24 bg-gray-900 text-white shadow-lg mx-4 md:mx-auto my-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Secure & Seamless Wallet
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
            Manage your funds effortlessly within the Oniduuru ecosystem.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Transfer */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center transform hover:scale-105 transition duration-300">
              <div className="text-green-400 text-5xl mb-4">
                <FontAwesomeIcon icon={faExchangeAlt} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Funds Transfer</h3>
              <p className="text-gray-400 text-center">
                Send and receive payments securely and instantly for services rendered or received.
              </p>
            </div>

            {/* Withdrawal */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center transform hover:scale-105 transition duration-300">
              <div className="text-yellow-400 text-5xl mb-4">
                <FontAwesomeIcon icon={faMoneyBillWave} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Withdrawal</h3>
              <p className="text-gray-400 text-center">
                Withdraw your earnings directly to your bank account with minimal fees.
              </p>
            </div>

            {/* Deposits */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center transform hover:scale-105 transition duration-300">
              <div className="text-blue-400 text-5xl mb-4">
                <FontAwesomeIcon icon={faWallet} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Deposits</h3>
              <p className="text-gray-400 text-center">
                Fund your wallet easily to pay for services or save for future projects.
              </p>
            </div>

            {/* Savings */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center transform hover:scale-105 transition duration-300">
              <div className="text-red-400 text-5xl mb-4">
                <FontAwesomeIcon icon={faPiggyBank} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Savings</h3>
              <p className="text-gray-400 text-center">
                Utilize our integrated savings feature to grow your funds securely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-16 bg-gray-900 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-lg mb-8">Join the most vibrant African marketplace platform today.</p>
        <button  onClick={() => window.open(OniduuruRoutes.appUrl, "_blank")} className="bg-yellow-400 text-black px-8 py-3 rounded hover:bg-yellow-300">Get started</button>
      </section>
      <br />

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 md:py-16 shadow-inner">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Oniduuru Marketplace</h3>
            <p className="text-gray-400 mb-4">
              Connecting Africa's finest talents with global opportunities.
            </p>
            <div className="flex space-x-4 text-2xl ml-[60px]">
              <a href="#" className="hover:text-white transition duration-300">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="hover:text-white transition duration-300">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="hover:text-white transition duration-300">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="#" className="hover:text-white transition duration-300">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition duration-300">Home</a></li>
              <li><a href="#marketplace" className="hover:text-white transition duration-300">Marketplace</a></li>
              <li><a href="#wallet" className="hover:text-white transition duration-300">Wallet</a></li>
              <li><a href="#about" className="hover:text-white transition duration-300">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition duration-300">Blog</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Support</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">
              <i className="fas fa-map-marker-alt mr-2"></i> 123 Africa Blvd, Lagos, Nigeria
            </p>
            <p className="text-gray-400 mb-2">
              <i className="fas fa-envelope mr-2"></i> info@oniduuru.com
            </p>
            <p className="text-gray-400 mb-2">
              <i className="fas fa-phone mr-2"></i> +234 800 123 4567
            </p>
          </div>
        </div>
        <div className="container mx-auto text-center mt-10 border-t border-gray-700 pt-8">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} Oniduuru Marketplace. All rights reserved.</p>
        </div>
      </footer>
      {/* QR Modal */}
        <OniduuruQR isOpen={showModal} onClose={() => setShowModal(false)}>
        <h2 className="text-xl font-semibold mb-4">Scan to Connect</h2>
      </OniduuruQR>
    </div>
  );
}

export default Oniduuru;