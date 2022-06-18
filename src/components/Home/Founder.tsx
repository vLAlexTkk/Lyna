import React from "react";
import Link from "next/link";

const Founder = () => {
  return (
    <section id="#founder" className="h-[500px] bg-white bg-cover bg-no-repeat">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center py-40">
          <div className="flex flex-col items-center space-y-8">
            <h2 className="text-black text-[20px] lg:text-[35px]">Meet our founder</h2>
            <p className="text-grey-600">Lucy's story is one you really need to read. <br className="lg:hidden"/> It changed an industry forever.</p>
            <Link href="#laser" passHref>
              <button className="w-[251px] tracking-0.05 text-black-900 px-5 py-2 uppercase bg-transparent transition-colors border-2 border-black-900 hover:bg-black-900 hover:text-white">
                Learn more
              </button>
            </Link>         
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
