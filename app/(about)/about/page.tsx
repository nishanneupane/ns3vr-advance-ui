"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const About = () => {
  const router = useRouter();

  return (
    <div className="py-10 px-8 sm:px-16 lg:px-24">
      <motion.div
        className="flex flex-col items-center justify-center space-y-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-center text-gray-50">
          Experience the{" "}
          <span className="text-sky-500">Virtual</span> World
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p className="text-gray-400">
              Welcome to our store, where reality meets the extraordinary. Step
              into a world of immersive experiences with our cutting-edge 360 VR
              simulator, enhanced with the power of 9D technology. Get ready to
              embark on thrilling journeys that defy the boundaries of reality.
              Your adventure starts here.
            </p>
            <button
              onClick={() => router.push("/games")}
              className="inline-block px-6 py-3 bg-sky-500 text-white font-semibold rounded-full shadow-lg hover:bg-sky-600 transition-colors duration-300"
            >
              Go to Store
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Image
              src={"/vr12.jpg"}
              width={700}
              height={650}
              alt="about"
              className="rounded-lg"
            />
          </motion.div>
        </div>
      </motion.div>

      <div className="border-t mt-12 pt-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-50">Connect With Us</h2>
          <span className="text-gray-400">com.nishanneupane@gmail.com</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mt-8">
          <form className="space-y-6">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 bg-gray-800 border border-gray-600 rounded-2xl outline-none focus:border-sky-500"
            />
            <input
              type="tel"
              placeholder="Your Phone"
              className="w-full p-4 bg-gray-800 border border-gray-600 rounded-2xl outline-none focus:border-sky-500"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-4 bg-gray-800 border border-gray-600 rounded-2xl outline-none focus:border-sky-500"
              rows={4}
            />
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-l from-sky-500 via-cyan-600 to-sky-700 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:bg-gradient-to-l hover:from-sky-600 hover:to-sky-700 transition-all duration-300"
            >
              Send
            </button>
          </form>

          <div className="space-y-6">
            <a
              className="flex items-center justify-center p-4 text-white font-bold bg-sky-500 rounded-3xl hover:bg-sky-600 transition-colors duration-300"
              href="mailto:com.nishanneupane@gmail.com"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l6-6m0 0l6 6m-6-6v12"
                />
              </svg>
              <span className="ml-2">Email Us</span>
            </a>
            <a
              className="flex items-center justify-center p-4 text-white font-bold bg-cyan-800 rounded-3xl hover:bg-cyan-700 transition-colors duration-300"
              href="tel:9803209232"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 0V5m0 0L8 9m4-4l-4 4m0 0v6m0 0l4 4m-4-4h6m0 0v3"
                />
              </svg>
              <span className="ml-2">Call Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
