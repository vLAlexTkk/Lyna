import React from "react";
import Link from "next/link";

const CTABlock = () => {
  return (
    <section id="#cta" className="bg-no-repeat bg-cover bg-cta h-[729px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center py-40 text-center">
          <h2 className="text-white tracking-0.04 text-[30px] lg:text-[57px] uppercase">
            Wellness innovation at its scientific best.
          </h2>
          <div className="flex flex-col items-center py-10 space-y-6 lg:items-baseline lg:space-x-6 lg:flex-row">
            <Link href="#supplement" passHref>
              <button className="w-[251px] tracking-0.05 text-white px-5 py-2 uppercase bg-transparent transition-colors border-2 border-white hover:bg-white hover:text-black-900">
                Supplement
              </button>
            </Link>
            <Link href="#laser" passHref>
              <button className="w-[251px] tracking-0.05 text-white px-5 py-2 uppercase bg-transparent transition-colors border-2 border-white hover:bg-white hover:text-black-900">
                Laser
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABlock;
