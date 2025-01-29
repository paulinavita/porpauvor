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
          <div className="relative flex gap-10 bg-blue-500 block lg:left-44 md:h-100 lg:bottom-12">
            <MorphingText className="absolute" texts={texts} />
          </div>
          <div className="flex md:mt-8 sm:mt-4 lg:mt-0">
            dev things; most that makes me happy. sugar & 🍒 on top would be
            productivity, blockchain, and bits of data analysis.
          </div>
          <div className="flex md:mt-8 sm:mt-4 lg:mt-0">
            site is on a bit progress, i will add more of my dev works soon!
          </div>
          <div className="text-xs flex md:mt-8 sm:mt-4 lg:mt-0">
            um, this is not my tarot booking commerce web but it&apos;s on the
            way!
          </div>
        </div>
        <div className="flex items-center justify-center md:mb-0">
          <Image src="/pau.svg" alt="hero" width={200} height={200} />
        </div>
      </div>
    </div>
  );
};

export default Intro;
