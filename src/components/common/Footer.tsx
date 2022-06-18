import React from "react";
import Link from "next/link";

const footerLinksStart: { title: string; href: string }[] = [
  { title: "Benefits", href: "#benefits" },
  { title: "Formula", href: "#formula" },
  { title: "Immunity", href: "#immunity" },
  { title: "Journal", href: "#journal" },
];

const footerLinksMiddle: { title: string; href: string }[] = [
  { title: "About", href: "#about" },
  { title: "Journal", href: "#journal" },
  { title: "FAQs", href: "#faqs" },
  { title: "Contact", href: "#contact" },
];

const footerLinksEnd: { title: string; href: string }[] = [
  { title: "Activate", href: "#activate" },
  { title: "My subscription", href: "#subscription" },
  { title: "Login details", href: "#logdetail" },
  { title: "Payment method", href: "#payment" },
];

const Footer = () => {
  return (
    <footer className="text-white bg-black-900 h-[200px] lg:h-[250px]">
      <div className="container flex flex-col mx-auto font-montserrat">
        <div className="flex flex-row items-baseline justify-center lg:justify-between md:justify-center">
          <div className="flex-row justify-between hidden py-4 space-x-10 lg:py-12 lg:flex">
            <div className="leading-8 text-grey-500 font-light tracking-widest flex flex-col items-baceline space-y-[15px] text-[10px] lg:text-[14px] lg:leading-10 lg:items-center lg:tracking-wide">
              <h2 className="pb-2 text-white uppercase text-[17px]">Supplement</h2>
              {footerLinksStart.map(({ title, href }, index: number) => (
                <Link href={href} passHref key={index}>
                  <a className="cursor-pointer hover:text-grey hover:transition-colors">{title}</a>
                </Link>
              ))}
            </div>
            <div className="leading-8 text-grey-500 font-light tracking-widest flex flex-col items-baceline space-y-[15px] text-[10px] lg:text-[14px] lg:leading-10 lg:items-center lg:tracking-wide">
              <h2 className="pb-2 text-white uppercase text-[17px]">About</h2>
              {footerLinksMiddle.map(({ title, href }, index: number) => (
                <Link href={href} passHref key={index}>
                  <a className="cursor-pointer hover:text-grey hover:transition-colors">{title}</a>
                </Link>
              ))}
            </div>
            <div className="leading-8 text-grey-500 font-light tracking-widest flex flex-col items-baceline space-y-[15px] text-[10px] lg:text-[14px] lg:leading-10 lg:items-center lg:tracking-wide">
              <h2 className="pb-2 text-white uppercase text-[17px]">Account</h2>
              {footerLinksEnd.map(({ title, href }, index: number) => (
                <Link href={href} passHref key={index}>
                  <a className="cursor-pointer hover:text-grey hover:transition-colors">{title}</a>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col py-6 space-y-[15px] lg:items-end items-center lg:leading-10">
            <h2 className="pb-2 text-white font-light text-[12px] uppercase lg:text-[17px]">Newsletter</h2>
            <span className="text-grey-500 text-[10px] lg:text-[14px]">Subscribe to our newsletter.</span>
            <div className="flex flex-row mx-auto">
              <input
                type="text"
                placeholder="LYMA Newsletter"
                className="px-3 py-1 lg:py-2 text-grey-500 text-[10px] lg:text-[13px] border-2 border-white bg-black-900"
              />
              <Link href="#link" passHref>
                <button className="px-6 py-1 lg:py-3 font-light text-[12px] lg:text-[16px] text-black uppercase transition-colors bg-white border-2 border-white hover:text-white hover:bg-black-900 hover:transition-colors">
                    Sigh up
                </button>
              </Link>
            </div>
            <p className="font-futura font-medium text-12 leading-16 tracking-0.03 text-grey-100">© {new Date().getFullYear()} © LYMA Life Ltd.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
