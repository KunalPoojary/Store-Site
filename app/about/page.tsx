"use client";

import Image from "next/image";
import React from "react";
import Pic from "@/public/41106-2000x1333-desktop-hd-cnco-wallpaper-image.jpg";

const page = () => {
  return (
    <div className="visible w-full relative z-[1]">
      <div className="w-full relative z-[1]">
        <div className="w-full relative z-[1]">
          <div className="w-full h-[100vh] fixed top-0 left-0 z-0 overflow-hidden">
            <div className="size-full absolute top-0 left-0 z-0">
              <Image
                width={1920}
                height={1080}
                alt="Background Image"
                src={Pic}
              />
            </div>
            <div className="size-full absolute top-0 left-0 z-[5] bg-B/30"></div>
          </div>
          <header className="w-full min-h-450 flex flex-col justify-between items-start relative text-white z-[5] min-[62.5em]:min-h-450 min-[62.5em]:h-full">
            <div className="w-full pt-96 pb-52 px-48">
              <h1 className="text-5xl">
                <span className="block">About Us</span>
              </h1>
              <p className="text-lg font-medium ">
                At REVZZ, we’re passionate about fashion that empowers. Discover
                trendy t-shirts designed to express your unique style and
                personality.
              </p>
            </div>
          </header>
          <div className="w-full relative">
            <div className="hidden "></div>
            <section className="w-full pt-121 px-sp30 pb-122 backdrop-blur-[5px] backdrop-brightness-[.6] text-W bg-B/40 tl:pt-201 tl:px-pc136 tl:pb-199">
              <div className="w-full pl-48 pb-12 pr-64">
                <header className="w-full pt-36 ">
                  <h2 className="text-5xl">Our Story</h2>
                </header>
                <p className="mt-8">
                  At REVZZ, fashion is more than just clothing—it’s a way of
                  life. Our journey began with a simple idea: to create stylish
                  and innovative t-shirts that empower individuals to express
                  their unique personalities and passions. Founded by a team of
                  fashion enthusiasts with a shared vision for creativity and
                  self-expression, REVZZ quickly evolved into a dynamic fashion
                  brand dedicated to revolutionizing the way people dress
                </p>

                <header className="w-full pt-20 ">
                  <h2 className="text-5xl">Our Mission</h2>
                </header>
                <p className="mt-8">
                  At REVZZ, fashion is more than just clothing—it’s a way of
                  life. Our journey began with a simple idea: to create stylish
                  and innovative t-shirts that empower individuals to express
                  their unique personalities and passions. Founded by a team of
                  fashion enthusiasts with a shared vision for creativity and
                  self-expression, REVZZ quickly evolved into a dynamic fashion
                  brand dedicated to revolutionizing the way people dress
                </p>

                <header className="w-full pt-20 ">
                  <h2 className="text-5xl">Our Commitment</h2>
                </header>
                <p className="mt-8">
                  At REVZZ, we’re committed to providing our customers with an
                  exceptional shopping experience from start to finish. Whether
                  you’re browsing our latest collection online or shopping
                  in-store, we strive to make every interaction memorable and
                  enjoyable. With our dedication to quality, creativity, and
                  customer satisfaction, we’re confident that REVZZ will become
                  your go-to destination for all things fashion.{" "}
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
