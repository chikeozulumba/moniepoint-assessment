"use client";

import { Dialog } from "@headlessui/react";
import { Modal } from "./Modal";
import classNames from "classnames";

type Props = {
  open: boolean;
  setModal: any;
};

const PLACES_OPTS = [
  ["Entire Place", "A place all to yourself"],

  [
    "Private room",
    "Your own room in a home or a hotel, plus some shared common spaces.",
  ],

  [
    "Shared room",
    "A sleeping space and common areas that may be shared with others.",
  ],
];

const UTILITIES = ["Bedrooms", "Beds", "Baths"];
const UTILITIES_OPTS = ["Any", "1", "2", "3", "4", "5+"];

export function FilterModal({ open, setModal }: Props) {
  return (
    <Modal open={open} setModal={setModal}>
      <div
        id="filter-modal-container"
        className="pt-[24px] pb-[240px] flex flex-col flex-nowrap h-full text-custom-text-black relative"
      >
        <div className="px-[24px] flex justify-between w-full">
          <h3 className="text-[18px] font-[600] leading-[24px]">Filters</h3>
          <h6 id="clear" role="button" className="text-custom-red text-[14px]">
            Clear All
          </h6>
        </div>

        <div className="px-[24px]">
          <div className="divider"></div>
        </div>

        <div className="px-[24px] gap-y-[16px] flex flex-col">
          <div className="space-y-[4px]">
            <h3 className="text-[18px] font-[600] leading-[24px]">
              Price range
            </h3>
            <h5 className="text-[14px] leading-[20px] text-custom-grey-3">
              The average nightly price is $133
            </h5>
          </div>

          <div className="grid grid-cols-2 gap-[12px]">
            <div className="col-span-1 flex flex-col gap-[8px]">
              <label className="text-[12px] leading-[20px]">Min Price</label>
              <input
                readOnly
                className="rounded-[12px] text-[14px] py-[12px] px-[16px] border-[1px] border-[rgba(17, 17, 17, 0.2)] focus-visible:outline-none hover:border-custom-grey-4 cursor-pointer"
                defaultValue={"$0"}
              />
            </div>
            <div className="col-span-1 flex flex-col gap-[8px]">
              <label className="text-[12px] leading-[20px]">Max Price</label>
              <input
                readOnly
                className="rounded-[12px] text-[14px] py-[12px] px-[16px] border-[1px] border-[rgba(17, 17, 17, 0.2)] focus-visible:outline-none hover:border-custom-grey-4 cursor-pointer"
                defaultValue={"$500+"}
              />
            </div>
          </div>
        </div>

        <div className="px-[24px]">
          <div className="divider"></div>
        </div>

        <div className="px-[24px] gap-y-[16px] flex flex-col">
          <div className="space-y-[4px]">
            <h3 className="text-[18px] font-[600] leading-[24px]">
              Type of place
            </h3>
          </div>

          <div className="flex flex-col gap-y-[16px]">
            {PLACES_OPTS.map(([a, b], i) => (
              <div key={i} className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="offers"
                    name="offers"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-custom-red focus:ring-transparent"
                  />
                </div>
                <div className="text-sm leading-6 flex flex-col gap-[4px]">
                  <label
                    htmlFor={a}
                    className="text-[rgb(17, 17, 17)] text-[16px] font-[400]"
                  >
                    {a}
                  </label>
                  <p className="text-[rgb(113, 113, 113)] text-[14px] leading-[20px]">
                    {b}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="px-[24px]">
          <div className="divider"></div>
        </div>

        <div className="px-[24px] gap-y-[16px] flex flex-col">
          <div className="space-y-[4px]">
            <h3 className="text-[18px] font-[600] leading-[24px]">
              Rooms, beds, and baths
            </h3>
          </div>

          <div className="flex flex-col gap-y-[12px]">
            {UTILITIES.map((a, i) => (
              <div key={i} className="relative flex flex-col gap-y-[8px]">
                <label className="text-[14px] leading-[20px] text-[rgb(17, 17, 17)]">
                  {a}
                </label>
                <div className="flex gap-x-[8px] max-w-[352px]">
                  {UTILITIES_OPTS.map((u, i) => (
                    <input
                      key={i}
                      readOnly
                      className={classNames(
                        "h-[36px] gap-[16px] w-[52px] rounded-[100px] text-[14px] inline-flex items-center text-center border-[1px] border-[rgba(17, 17, 17, 0.2)] focus-visible:outline-none hover:border-custom-grey-4 cursor-pointer",
                        u === "Any" && "!bg-[#111111] !text-white"
                      )}
                      defaultValue={u}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bottom-0 left-0 w-full h-[96px] p-[24px] flex items-center justify-center sticky bg-white border-t-[1px] border-[rgba(17, 17, 17, 0.1)]">
          <button
            id="filter-cta"
            className="w-full h-[48px] text-white py-8px px-[24px] rounded-[12px] text-[14px] leading-[20px] font-[500]"
          >
            Show 836 homes
          </button>
        </div>
      </div>
    </Modal>
  );
}
