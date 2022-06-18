import React from "react";
import Link from "next/link";
import Image from "next/image";

const ServiceBlock = () => {
  return (
    <section id="#service" className="py-10 h-[800px] bg-black-900">
      <div className="container flex flex-col items-center mx-auto">
        <div className="flex flex-col space-y-6">
          <h2 className="text-white pb-8 text-center uppercase text-[24px] lg:text-[43px] tracking-0.05">The quest of better</h2>
        </div>
        <div>
          <Image src="/catalog.png" width={444} height={366} />
        </div>
        <div className="pt-10">
          <p className="font-normal text-center text-white tracking-0.05 text-[12px] lg:text-[16px] leading-25">
            At LYMA, we're always searching for the perfect balance of science, <br /> nature and technology. Every LYMA
            product has been designed to <br /> work together. We know that when we discover the best, you'll <br />{" "}
            discover yours.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceBlock;
