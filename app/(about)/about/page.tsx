"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const About = () => {
  const router = useRouter();
  return (
    <div className="py-3 px-12">
      <div className="flex items-center justify-center py-4">
        <h2 className="font-bold text-4xl ">
          Experience the <span className="text-sky-500">Virtual</span> World{" "}
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 py-5">
        <div className="w-full px-5">
          <span className="text-gray-400 text-lg">
            Welcome to our store, where reality meets the extraordinary. Step
            into a world of immersive experiences with our cutting-edge 360 VR
            simulator, enhanced with the power of 9D technology. Get ready to
            embark on thrilling journeys that defy the boundaries of reality.
            Your adventure starts here.
          </span>
          <div className="py-4">
            <button
              onClick={() => router.push("/games")}
              className="w-full bg-sky-500 text-white font-semibold font-sans text-lg p-2 px-3 rounded-full"
            >
              Go to Store
            </button>
          </div>
        </div>
        <Image
          src={"/vr12.jpg"}
          width={500}
          height={500}
          alt="about"
          className="rounded-lg"
        />
      </div>

      <div className="border-t">
        <div className="p-2">
          <h2 className="font-bold text-4xl ">Connect With Us</h2>
          <span className="text-sm text-gray-500">
            com.nishanneupane@gmail.com
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          <form className="p-2 flex flex-col space-y-4 w-full sm:w-[500px]">
            <input
              type="email"
              placeholder="Your Email"
              className="bg-transparent border border-gray-500 p-2 rounded-2xl outline-none"
            />
            <input
              type="phone"
              placeholder="Your Phone"
              className="bg-transparent border border-gray-500 p-2 rounded-2xl outline-none"
            />
            <textarea
              placeholder="Your Message"
              className="bg-transparent border border-gray-500 p-2 rounded-2xl outline-none"
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-l from-sky-500 via-cyan-600 to-sky-700 text-white font-semibold font-sans text-lg p-2 px-3 rounded-full"
            >
              Send
            </button>
          </form>

          <div className="flex items-center justify-center sm:justify-end md:justify-start pt-5 sm:pt-1 space-x-4 ">
            <a
            className=" font-bold text-sky-500 bg-slate-800 p-2 rounded-3xl flex items-center justify-center"
            href="mailto:com.nishanneupane@gmail.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                />
              </svg>
            </a>

            <a
            className=" font-bold text-gray-50 bg-cyan-800 p-2 rounded-3xl flex items-center justify-center"
            href="tel:9803209232">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
