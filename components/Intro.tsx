"use client";
import Image from "next/image";
import MorphingText from "./ui/morphing-text";
import SparklesText from "./ui/sparkles-text";

const texts = ["frontend", "mobile-hybrid", "fullstack"];

const Intro = () => {
  return (
    <div>
      <div className="w-full flex flex-col-reverse lg:flex-row gap-4 justify-center align-items-center items-center -z-10">
        <div className="flex flex-col gap-2 w-full lg:w-4/5">
          <SparklesText
            colors={{ first: "#f0f0f0", second: "#000000" }}
            text="hiya"
          />
          <div className="flex flex-col gap-4">
            <span className="font-sans ">
              it&apos;s <b>paulina ❀</b> here. i do{" "}
            </span>
          </div>
          <div className="relative flex gap-10 bg-blue-500 block lg:left-44 md:h-100 lg:bottom-12 ">
            <MorphingText className="absolute" texts={texts} />
          </div>
          <div className="flex md:mt-8 sm:mt-8 lg:mt-0">
            dev things + those that make me happy; years of fintech and
            e-commerce experience. <br />
            sugar & 🍒 on top would be productivity, blockchain, and bits of
            data analysis.
          </div>
          <div className="flex text-sm md:mt-8 sm:mt-1 lg:mt-0">
            site is in progress, i will add more of my dev works soon!
          </div>
          <span className="text-xs md:mt-3 sm:mt-1 lg:mt-0">
            the site&apos;s name porpauvor derives from{" "}
            <span className="italic">por favor</span>, spanish for{" "}
            <span className="italic">please</span>. just a wordplay for not
            using my fullname for a website 🙃 🪄
          </span>
        </div>
        <div className="flex items-center justify-center md:mb-0">
          <Image src="/pau.svg" alt="hero" width={200} height={200} />
        </div>
      </div>
    </div>
  );
};

export default Intro;
