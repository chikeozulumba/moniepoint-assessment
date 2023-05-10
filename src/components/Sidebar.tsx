"use client";
import { MENU } from "@/constants/menu";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { useEffect, useState } from "react";

export function Sidebar() {
  const [isShown, setIsShown] = useState(false);

  return (
    <aside
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      className="text-custom-text sticky top-[72px] border-r-[1px] border-custom-grey max-w-fit min-h-screen"
    >
      <ul className="py-[16px] flex flex-col flex-nowrap gap-y-[8px]">
        {MENU.map((item, i) => (
          <li
            key={i}
            className={classNames(
              "h-[48px] px-[32px] gap-x-[32px] py-[8px] flex flex-row items-center flex-nowrap text-[14px] hover:bg-custom-grey-2/50 cursor-pointer",
              i === 0 ? "border-r-[3px] border-custom-red-2" : ""
            )}
          >
            <ChevronRightIcon
              height={20}
              width={20}
              className="text-custom-text/50"
            />
            <span
              className={classNames(
                "tracking-wide text-custom-text",
                isShown ? "" : "hidden"
              )}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
