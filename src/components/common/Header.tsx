import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const headerLinks: { title: string; href: string }[] = [
  { title: "Help and Support", href: "#support" },
  { title: "Activate", href: "#activate" },
  { title: "Account", href: "#accoun" },
  { title: "Buy", href: "#buy" },
];

const headerLinksStart: { title: string; href: string }[] = [
  { title: "Supplement", href: "#supplement" },
  { title: "Laser", href: "#laser" },
  { title: "Revies", href: "#revies" },
  { title: "Journal", href: "#journal" },
  { title: "About", href: "#about" },
];

const headerLinksStartMobile: { title: string; href: string }[] = [
  { title: "About", href: "#about" },
  { title: "Journal", href: "#journal" },
];

const headerLinksMobile: { title: string; href: string }[] = [
  { title: "Activate", href: "#activate" },
  { title: "Buy", href: "#buy" },
];

const Header = () => {
  return (
    <header className="bg-grey-100 text-grey-400 h-[65px]">
      <div className="container flex flex-row items-baseline py-5 mx-auto justify-evenly md:justify-around font-montserrat lg:items-center lg:justify-between">
        <div className="leading-8 font-light tracking-widest hidden flex-row items-baceline space-x-[32px] text-[10px] uppercase lg:flex lg:text-[14px] lg:leading-10 lg:tracking-wide">
          {headerLinksStart.map(({ title, href }, index: number) => (
            <Link href={href} passHref key={index}>
              <a className="cursor-pointer hover:text-grey-800 hover:transition-colors">{title}</a>
            </Link>
          ))}
        </div>
        <div className="leading-8 font-light tracking-wide flex flex-row items-baseline space-x-[15px] text-[10px] uppercase lg:hidden">
          {headerLinksStartMobile.map(({ title, href }, index: number) => (
            <Link href={href} passHref key={index}>
              <a className="cursor-pointer hover:text-grey-800 items hover:transition-colors">{title}</a>
            </Link>
          ))}
        </div>
        <div className="px-2">
          <Image src="/logo/logo.svg" width={98} height={13} />
        </div>
        <div className="leading-8 font-light tracking-widest hidden flex-row items-baceline space-x-[15px] text-[10px] uppercase lg:flex lg:text-[14px] lg:leading-10 lg:tracking-wide">
          {headerLinks.map(({ title, href }, index: number) => (
            <Link href={href} passHref key={index}>
              <a className="cursor-pointer hover:text-grey-800 hover:transition-colors">{title}</a>
            </Link>
          ))}
        </div>
        <div className="leading-8 font-light tracking-wide flex flex-row items-baseline space-x-[15px] text-[10px] uppercase lg:hidden">
          {headerLinksMobile.map(({ title, href }, index: number) => (
            <Link href={href} passHref key={index}>
              <a className="cursor-pointer hover:text-grey-800 hover:transition-colors">{title}</a>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
