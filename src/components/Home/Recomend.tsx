import React from "react";
import Image from "next/image";

const Recomend = () => {
  return (
    <section id="#recomend" className="bg-grey-100 h-[490px] lg:h-[424px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center py-10 space-y-8 lg:py-30 lg:items-baseline lg:flex-row lg:justify-around">
          <div className="flex flex-col text-center items w-[250px]">
            <p className="pb-4 lg:pb-8">“Your one stop solution to feeling energised and focused.”</p>
            <Image src="/forbes.svg" width={284} height={40} />
          </div>
          <div className="flex flex-col text-center items w-[200px]">
            <p className="pb-4 lg:pb-8">“A revelation. Not just about looking better and feeling better. LYMA is about real health benefits.”</p>
            <Image src="/daily-telegraph.svg" width={284} height={70} />
          </div>
          <div className="flex flex-col text-center items w-[250px]">
            <p className="pb-4 lg:pb-8">“Experts are queuing up to praise LYMA.”</p>
            <Image src="/financial-times.svg" width={284} height={60} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recomend;
