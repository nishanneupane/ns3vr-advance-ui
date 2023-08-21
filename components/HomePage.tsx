"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
      <div className="py-2 flex sm:block flex-col items-center justify-center">
        <h2 className="text-white font-bold text-6xl leading-tight">
          Get Experienced with Seamless
          <span className="text-sky-500"> VR Experience </span>
        </h2>

        <div className="py-5">
          <button
            onClick={() => router.push("/games")}
            className="bg-sky-500 rounded-full font-semibold p-3 px-5 hover:bg-sky-600 cursor-pointer"
          >
            Enroll Now
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={"/vr4.jpg"}
          width={700}
          height={600}
          alt="vr"
          className="sm:w-full min-w-[400px] min-h-[200px] sm:h-full rounded-md"
        />
      </div>
    </div>
  );
};

export default HomePage;
