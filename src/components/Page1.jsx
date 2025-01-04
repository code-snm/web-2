import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useState, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Nav from './Nav';

gsap.registerPlugin(ScrollTrigger);

const Page1 = () => {
  const [isauthen, setisauthen] = useState(false);
  const [username, setusername] = useState('');
  const [popupOpen, setPopupOpen] = useState(true); // To control popup visibility

  useEffect(() => {
    if (isauthen) {
      const forgeElement = document.querySelector('.forge');

      if (forgeElement) {
        gsap.to('.forge', {
          y: -370,
          x: -500,
          scale: 0.2,
          scrollTrigger: {
            trigger: '.forge',
            scroller: 'body',
            start: 'bottom 99%',
            scrub: 2,
            pin: true,
            onLeave: () => {
              // Change position to sticky dynamically
              forgeElement.style.position = 'sticky';
              forgeElement.style.top = '0'; // Adjust this as per your needs
            },
            onEnterBack: () => {
              // Reset position when scrolling back
              forgeElement.style.position = 'fixed';
            },
          },
        });
      }
    }
  }, [isauthen]); // Re-run animation when authenticated

  const signin = () => {
    if (username.trim() !== '') {
      setisauthen(true);
      setPopupOpen(false); // Close popup on successful sign-in
    } else {
      alert('Please enter valid credentials');
    }
  };

  const signout = () => {
    setisauthen(false);
    setusername('');
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Kill existing triggers
  };

  return (
    <>
      {/* Sign-In Popup */}
      {!isauthen && popupOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setPopupOpen(false)} // Close popup on clicking outside
          ></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-[#1c1c1c] p-8 rounded-lg shadow-lg text-white neumorphic-dark w-[90%] max-w-[400px]">
              <h2 className="text-xl font-semibold text-center mb-4">Sign In</h2>
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                className="w-full p-3 rounded-md bg-[#1f1f1f] text-white outline-none shadow-inner mb-6 placeholder-gray-400"
              />
              <div className="flex justify-center">
                <button
                  onClick={signin}
                  className="px-6 py-2 bg-green-600 rounded-md text-white shadow-md hover:bg-green-500 transition"
                >
                  Sign In
                </button>
                <button
                  onClick={() => setPopupOpen(false)}
                  className="ml-4 px-6 py-2 bg-gray-600 rounded-md text-white shadow-md hover:bg-gray-500 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Authenticated Content */}
      {isauthen && (
        <div className="font-integral w-full h-[100vh]">
          <Nav />
          <div className="w-full h-full flex justify-center items-center flex-col">
            <h3 className="mt-24 font-extralight text-xs">
              Forging experiences <br /> and creating a story
            </h3>
            <h1 className="forge text-[17rem]">FORGGE</h1>
            <button
              onClick={signout}
              className="mt-10 px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-500"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Page1;
