import React, { useState } from "react";
import Hamburger from "hamburger-react";

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const features = [
    "Automated Workflows",
    "No technical expertise required",
    "Copyright safe",
    "Build anything you can imagine",
  ];

  return (
    <div className="flex flex-col md:flex-row w-full h-screen p-6 md:p-20 bg-gray-200 shadow-xl" style={{ backgroundImage: "url('https://dl.dropboxusercontent.com/scl/fi/btuqnop2og68m2qr946go/artistic-blurry-colorful-wallpaper-background.jpg?rlkey=s2ueauvas02n5upfkvr2d6hg2&e=1&st=ojfe90jq&dl=0')" }}>
<div className="w-full flex flex-col md:flex-row h-full bg-white rounded-4xl outline-8 outline-gray-100/50 overflow-hidden">        <div className="w-[95%] md:w-1/2 bg-cover bg-no-repeat rounded-4xl py-8 md:p-8 m-2" style={{ backgroundImage: "url('https://dl.dropboxusercontent.com/scl/fi/btuqnop2og68m2qr946go/artistic-blurry-colorful-wallpaper-background.jpg?rlkey=s2ueauvas02n5upfkvr2d6hg2&e=1&st=ojfe90jq&dl=0')" }}>
          <img alt="" className="max-w-[90%] sm:max-w-xs " src="/Logo.png" />
        </div>
        <div className="w-full md:w-1/2 h-full flex flex-col gap-4 p-6 md:p-12">
          <div className="w-full flex justify-end gap-4 items-center">
            <button className="rounded-xl border px-4 py-2 border-black">Get Early Access</button>
            <div className="relative">
              <Hamburger toggled={isOpen} toggle={setIsOpen} />
              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-xl overflow-hidden">
                  <ul className="text-gray-700">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Home</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Features</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Pricing</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Contact</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="my-6 md:my-10 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-8xl w-full md:w-5/6">
              A New Way to <br />
              <span className="text-orange-400">create</span> <span>with the</span>
              <br />
              power of AI.
            </h1>
            <ul className="text-lg md:text-xl text-gray-500 flex flex-col gap-4 my-6 md:my-8">
              {features.map((feature, index) => (
                <li key={index}>
                  <span>✓</span> {feature}
                </li>
              ))}
            </ul>
            <button className="bg-black rounded-lg text-white px-4 py-3 w-full md:w-auto">Get Early Access</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
