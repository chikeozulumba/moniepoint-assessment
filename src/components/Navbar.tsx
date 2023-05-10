import Link from "next/link";
import { Logo } from "./Logo";
import { Avatar } from "./Avatar";
import classNames from "classnames";

const links = ["Stays", "Experiences", "Online Experiences"];

export function Navbar() {
  return (
    <div className="h-[72px] flex items-center justify-between px-[32px] py-[16px] border-b-[1px] border-custom-grey">
      <Logo />
      <ul className="navbar-menu flex items-center space-x-[40px] relative py-[12px]">
        {links.map((link) => {
          const path = link.replaceAll(" ", "-").toLowerCase();
          return (
            <li
              key={link}
              className={classNames(
                "navbar-menu-item flex items-center",
                path === "stays" ? "border-b-[3px] border-custom-red" : ""
              )}
            >
              <Link
                className={classNames(
                  "text-[14px] tracking-wide",
                  path === "stays"
                    ? "text-custom-text-black font-medium"
                    : "text-custom-text-grey"
                )}
                href={`/${path}`}
              >
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
      <Avatar />
    </div>
  );
}
