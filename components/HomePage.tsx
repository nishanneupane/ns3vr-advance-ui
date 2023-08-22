"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const HomePage = () => {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
      <div className="py-10 sm:py-0 flex sm:block flex-col items-center justify-center">
        <motion.h2
          className="text-white font-bold text-5xl md:text-6xl lg:text-7xl leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Get Experienced with Seamless
          <span className="text-sky-500"> VR Experience </span>
        </motion.h2>

        <motion.div
          className="py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <button
            onClick={() => router.push("/games")}
            className="bg-sky-500 rounded-full font-semibold text-lg px-8 py-3 hover:bg-sky-600 cursor-pointer shadow-md hover:shadow-lg transition-colors duration-300"
          >
            Enroll Now
          </button>
        </motion.div>
      </div>
      <motion.div
        className="flex items-center justify-center"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Image
          src={"/vr4.jpg"}
          width={700}
          height={600}
          alt="vr"
          className="sm:w-full min-w-[400px] min-h-[200px] sm:h-full rounded-md"
        />
      </motion.div>
    </div>
  );
};

export default HomePage;