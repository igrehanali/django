"use client";

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import Image from "next/image";
import menu from "../../../../public/menu.png";

const links = [
  {
    title: "OVERVIEW",
    path: "/overview",
  },
  {
    title: "DOWNLOAD",
    path: "/download",
  },
  {
    title: "NEWS",
    path: "/news",
  },
  {
    title: "COMMUNITY",
    path: "/community",
  },
  {
    title: "DOCUMENTATION",
    path: "/documentation",
  },
  {
    title: "CODE",
    path: "/code",
  },
  {
    title: "ISSUE",
    path: "/issue",
  },
  {
    title: "ABOUT",
    path: "/about",
  },
  {
    title: "DONATE",
    path: "/donate",
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className="text-xs font-bold hidden md:block py-4">
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
      </div>
      <Image
        className="absolute right-2 mr-5  md:hidden py-2"
        src={menu}
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div
          className={`relative grid justify-end text-end md:hidden pr-5 top-10 pb-10 ${
            open ? "h-full duration-700" : "h-0"
          }`}
        >
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
