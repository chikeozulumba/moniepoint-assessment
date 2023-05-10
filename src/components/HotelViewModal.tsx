/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import {
  ArrowUpOnSquareIcon,
  BoltIcon,
  CalendarDaysIcon,
  CalendarIcon,
  ChevronDownIcon,
  DocumentCheckIcon,
  ExclamationCircleIcon,
  HandThumbUpIcon,
  HeartIcon,
  ShieldCheckIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { FullModal as Modal } from "./FullModal";
import { HOTEL } from "@/constants/hotel";

type Props = {
  open: boolean;
  setModal: any;
  hotel: (typeof HOTEL)[0] | null;
};

const ITEMS = [
  "Kitchen",
  "Dedicated workspaces",
  "55” 4k TV",

  "Free dryer - in unit",

  "Private patio or balcony",

  "Wifi",

  "1 parking space",

  "Free washer - in unit",

  "Centrail air conditioning",

  "Heating",

  "Security cameras",

  "Ceiling fans",
];

const RATING = {
  Cleanliness: 4.3,
  Accuracy: 4.1,
  Communication: 3.8,
  Location: 3.5,
  "Check-in": 4.2,
  Value: 3.2,
};

function SidePanel({ hotel }: { hotel: (typeof HOTEL)[0] }) {
  return (
    <div className="top-[32px] sticky border-[1px] border-[rgba(17, 17, 17, 0.04)] w-[360px] min-h-[558px] bg-[#f5f5f4] rounded-[20px] p-[24px] gap-[24px] flex flex-col">
      <div className="flex flex-row justify-between flex-nowrap gap-x-[8px w-full">
        <h5 className="text-[24px] leading-[20px] text-custom-text space-x-1">
          <span className="font-[600]">
            {new Intl.NumberFormat("en-US", {
              currency: "USD",
              style: "currency",
              minimumFractionDigits: 0,
            }).format(hotel.price)}
          </span>
          <span className="text-custom-text-grey text-[14px]">/</span>
          <span className="text-custom-text-grey text-[14px]">night</span>
        </h5>
        <span className="flex items-center space-x-2">
          <StarIcon className="text-custom-text h-[16px] w-[16px]" />
          <span className="text-custom-text text-[14px] leading-[20px]">
            {new Intl.NumberFormat("en-US", {
              minimumSignificantDigits: 2,
            }).format(hotel.rating)}
          </span>
        </span>
      </div>

      <div className="grid grid-cols-2 gap-[12px]">
        <div className="col-span-1 flex flex-col gap-[8px]">
          <label className="text-[12px] text-custom-grey-3 leading-[20px]">
            Check In
          </label>
          <div className="bg-white inline-flex rounded-[12px] text-[14px] py-[12px] px-[16px] border-[1px] border-transparent focus-visible:outline-none hover:border-custom-grey-4 cursor-pointer gap-[12px]">
            <CalendarIcon height={20} width={20} className="text-custom-text" />
            <span>6/14/2023</span>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-[8px]">
          <label className="text-[12px] text-custom-grey-3 leading-[20px]">
            Check Out
          </label>
          <div className="bg-white inline-flex rounded-[12px] text-[14px] py-[12px] px-[16px] border-[1px] border-transparent focus-visible:outline-none hover:border-custom-grey-4 cursor-pointer gap-[12px]">
            <CalendarIcon height={20} width={20} className="text-custom-text" />
            <span>6/14/2023</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-[12px]">
        <div className="col-span-1 flex flex-col gap-[8px]">
          <label className="text-[12px] text-custom-grey-3 leading-[20px]">
            Guests
          </label>
          <div className="bg-white w-full inline-flex justify-between rounded-[12px] text-[14px] py-[12px] px-[16px] border-[1px] border-transparent focus-visible:outline-none hover:border-custom-grey-4 cursor-pointer gap-[12px]">
            <span>1 Guest</span>
            <ChevronDownIcon
              height={20}
              width={20}
              className="text-custom-text"
            />
          </div>
        </div>
      </div>

      <div className="divider"></div>

      <div className="flex flex-col gap-[12px]">
        <div className="inline-flex justify-between w-full">
          <h4 className="text-[14px] font-[500] flex gap-x-[2px] flex-1 leading-[20px] items-center">
            6 nights{" "}
            <ExclamationCircleIcon className="w-[12px] h-[12px] text-[#b0b0af]" />
          </h4>
          <h5 className="text-[14px] text-right leading-[20px]">$2,199</h5>
        </div>
        <div className="inline-flex justify-between w-full">
          <h4 className="text-[14px] font-[500] flex gap-x-[2px] flex-1 leading-[20px] items-center">
            Cleaning fee{" "}
            <ExclamationCircleIcon className="w-[12px] h-[12px] text-[#b0b0af]" />
          </h4>
          <h5 className="text-[14px] text-right leading-[20px]">$85</h5>
        </div>
        <div className="inline-flex justify-between w-full">
          <h4 className="text-[14px] font-[500] flex gap-x-[2px] flex-1 leading-[20px] items-center">
            Airbnb service fee{" "}
            <ExclamationCircleIcon className="w-[12px] h-[12px] text-[#b0b0af]" />
          </h4>
          <h5 className="text-[14px] text-right leading-[20px]">$322</h5>
        </div>
      </div>

      <div className="divider"></div>

      <div className="flex flex-col gap-[12px]">
        <div className="inline-flex justify-between w-full">
          <h4 className="text-[16px] font-[500] flex flex-col gap-[4px] flex-1 leading-[20px]">
            <span>Total</span>
            <span className="text-[12px] text-custom-grey-3 font-normal">
              Before taxes
            </span>
          </h4>
          <h5 className="text-[16px] text-right leading-[20px]">$2,606</h5>
        </div>
      </div>

      <div>
        <button
          id="filter-cta"
          className="w-full h-[48px] text-white py-8px px-[24px] rounded-[12px] text-[14px] leading-[20px] font-[500]"
        >
          Reserve
        </button>
      </div>
    </div>
  );
}

function RareFind() {
  return (
    <div className="top-[618px] sticky border-[1px] border-[#1111110a] w-[360px] bg-[#d43b510a] rounded-[20px] p-[24px] gap-[24px] flex items-start">
      <BoltIcon width={40} height={40} className="text-custom-red" />
      <div className="flex flex-col">
        <h3 className="text-[16px] font-[600] leading-[20px]">
          This is a rare find
        </h3>
        <p className="text-[14px] leading-[20px] text-[#717171]">
          Kathryn&apos;s place on Airbnb is usually fully booked.
        </p>
      </div>
    </div>
  );
}

export function HotelViewModal({ open, setModal, hotel }: Props) {
  return (
    <Modal open={open} setModal={setModal}>
      <div className="hotel-view text-custom-text-black p-[32px] gap-[32px] flex flex-col flex-nowrap">
        <div className="gap-[16px] flex items-start">
          <div className="rounded-[20px] h-[480px] relative w-[771.59px]">
            <div className="absolute bottom-[16px] left-[16px] text-custom-text-black z-[9999] bg-white px-[16px] py-[12px] text-[14px] text-[rgb(17, 17, 17)] rounded-[12px] h-[36px] inline-flex justify-center items-center border-[1px] border-[rgba(17, 17, 17, 0.1)]">
              View All Photos
            </div>
            <div className="image-bg-wrapper">
              <div>
                <img
                  width={"100%"}
                  height={"100%"}
                  src={
                    hotel?.image[0] ||
                    "https://framerusercontent.com/images/TQv9Req7ZME40dmudtRtkwz9lcQ.webp"
                  }
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col h-[480px] gap-[16px] w-[498.91px]">
            <div className="rounded-[20px] h-full relative">
              <div className="image-bg-wrapper">
                <div>
                  <img
                    width={"100%"}
                    height={"100%"}
                    src="https://framerusercontent.com/images/TQv9Req7ZME40dmudtRtkwz9lcQ.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="rounded-[20px] h-full relative">
              <div className="image-bg-wrapper">
                <div>
                  <img
                    width={"100%"}
                    height={"100%"}
                    src="https://framerusercontent.com/images/TQv9Req7ZME40dmudtRtkwz9lcQ.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[12px]">
          <div className="text-custom-text-black z-[9999] bg-white px-[16px] py-[12px] text-[14px] text-[rgb(17, 17, 17)] rounded-[12px] h-[36px] inline-flex justify-center items-center border-[1px] border-[rgba(17, 17, 17, 0.1)] w-fit">
            Superhost
          </div>

          <div className="flex gap-[32px]">
            <div className="flex-1 flex gap-[32px] flex-col">
              <div className="flex justify-between items-start w-full gap-x-[32px]">
                <div className="gap-[12px] flex flex-col">
                  <h3 className="text-[32px] font-[500] leading-[40px]">
                    {hotel?.name}
                  </h3>
                  <h6 className="text-[20px] leading-[20px] text-[#717171]">
                    {hotel?.address}
                  </h6>
                </div>
                <div className="inline-flex items-center gap-x-[12px]">
                  <div className="h-[36px] w-[36px] top-[10px] right-[10px] rounded-full bg-[#f5f5f4] flex items-center justify-center z-[9999] group hover:bg-custom-text-black hover:transition-all">
                    <HeartIcon
                      height={16}
                      width={16}
                      className="group-hover:text-white text-custom-text-black"
                    />
                  </div>
                  <div className="h-[36px] w-[36px] top-[10px] right-[10px] rounded-full bg-[#f5f5f4] flex items-center justify-center z-[9999] group hover:bg-custom-text-black hover:transition-all">
                    <ArrowUpOnSquareIcon
                      height={16}
                      width={16}
                      className="group-hover:text-white text-custom-text-black"
                    />
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-[40px] flex-row">
                <div className="flex gap-[12px] items-center">
                  <DocumentCheckIcon
                    height={16}
                    width={18}
                    className="text-custom-text"
                  />
                  <span className="text-[14px] leading-[20px] text-[#111111]">
                    6 guests
                  </span>
                </div>
                <div className="flex gap-[12px] items-center">
                  <DocumentCheckIcon
                    height={16}
                    width={18}
                    className="text-custom-text"
                  />
                  <span className="text-[14px] leading-[20px] text-[#111111]">
                    2 bedrooms
                  </span>
                </div>
                <div className="flex gap-[12px] items-center">
                  <DocumentCheckIcon
                    height={16}
                    width={18}
                    className="text-custom-text"
                  />
                  <span className="text-[14px] leading-[20px] text-[#111111]">
                    3 beds
                  </span>
                </div>
                <div className="flex gap-[12px] items-center">
                  <DocumentCheckIcon
                    height={16}
                    width={18}
                    className="text-custom-text"
                  />
                  <span className="text-[14px] leading-[20px] text-[#111111]">
                    3 baths
                  </span>
                </div>
              </div>

              <div className="divider"></div>

              <div className="flex gap-[32px]">
                <div className="flex flex-col gap-[16px]">
                  <div className="h-[56px] w-[56px] rounded-full bg-[#fef8f8] flex items-center justify-center z-[9999] group hover:bg-custom-text-black hover:transition-all">
                    <CalendarDaysIcon
                      height={24}
                      width={24}
                      className="text-custom-red-2"
                    />
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <h3 className="text-[16px] leading-[20px] font-[500]">
                      Dedicated workspace
                    </h3>
                    <h6 className="text-[14px] leading-[20px] text-[#717171]">
                      A private room with wifi that’s well-suited for working.
                    </h6>
                  </div>
                </div>
                <div className="flex flex-col gap-[16px]">
                  <div className="h-[56px] w-[56px] rounded-full bg-[#fef8f8] flex items-center justify-center z-[9999] group hover:bg-custom-text-black hover:transition-all">
                    <CalendarDaysIcon
                      height={24}
                      width={24}
                      className="text-custom-red-2"
                    />
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <h3 className="text-[16px] leading-[20px] font-[500]">
                      Self check-in
                    </h3>
                    <h6 className="text-[14px] leading-[20px] text-[#717171]">
                      Check yourself in with the keypad.
                    </h6>
                  </div>
                </div>
                <div className="flex flex-col gap-[16px]">
                  <div className="h-[56px] w-[56px] rounded-full bg-[#fef8f8] flex items-center justify-center z-[9999] group hover:bg-custom-text-black hover:transition-all">
                    <CalendarDaysIcon
                      height={24}
                      width={24}
                      className="text-custom-red-2"
                    />
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <h3 className="text-[16px] leading-[20px] font-[500]">
                      Free cancellation before Jul 25
                    </h3>
                    <h6 className="text-[14px] leading-[20px] text-[#717171]">
                      A private room with wifi that’s well-suited for working.
                    </h6>
                  </div>
                </div>
              </div>

              <div className="divider"></div>

              <div className="flex gap-[32px]">
                <div className="flex flex-col gap-[32px]">
                  <div className="flex flex-col gap-[8px]">
                    <h3 className="text-[18px] leading-[24px] font-[600]">
                      Dedicated workspace
                    </h3>
                    <h6 className="text-[14px] leading-[20px] text-[#717171]">
                      Enjoy a quiet getaway in this charming cottage renovated,
                      designed, and owned by Chip and Joanna Gaines. Originally
                      the carriage house for Hillcrest Estate, this home
                      includes one bedroom, one bath, an office nook and a
                      private back patio. This makes it the perfect getaway for
                      a party of two, or if you’re stopping through town and
                      need a restful place to retreat.
                    </h6>
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <h3 className="text-[16px] leading-[20px] font-[500]">
                      The Space
                    </h3>
                    <h6 className="text-[14px] leading-[20px] text-[#717171]">
                      An open living, dining, and kitchen area provide ample
                      room in this cozy cottage. French double doors lead you
                      out to the back patio to enjoy your own private outdoor
                      space. A dedicated, covered parking spot for your use. The
                      parking lot is shared with Hillcrest Estate guests.
                    </h6>
                  </div>
                  <h3 className="text-[14px] font-[600] leading-[20px] text-image">
                    Read more
                  </h3>
                </div>
              </div>

              <div className="divider"></div>

              <div className="flex gap-[32px] flex-col">
                <h3 className="text-[18px] leading-[24px] font-[600]">
                  What this place offers
                </h3>

                <div className="grid grid-cols-3 gap-[32px]">
                  {ITEMS.map((item, i) => (
                    <div
                      key={i}
                      className="inline-flex gap-[12px] items-center"
                    >
                      <HandThumbUpIcon
                        className="text-custom-red"
                        height={16}
                        width={20}
                      />
                      <span className="text-[14px] leading-[20px]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="divider"></div>

              <div className="flex gap-[32px] flex-col">
                <div className="flex justify-between items-center">
                  <h3 className="text-[18px] leading-[24px] font-[600]">
                    Reviews
                  </h3>
                  <span className="flex items-center space-x-2">
                    <StarIcon className="text-custom-text h-[16px] w-[16px]" />
                    <div className="inline-flex space-x-2 items-center">
                      <span className="text-custom-text text-[14px] leading-[20px]">
                        {new Intl.NumberFormat("en-US", {
                          minimumSignificantDigits: 2,
                        }).format(4.99)}
                      </span>
                      <span className="text-custom-text text-[14px] leading-[20px]">
                        — 124 reviews
                      </span>
                    </div>
                  </span>
                </div>

                <div className="flex flex-col gap-[16px]">
                  <div className="gap-[24px] p-[24px] rounded-[20px] border-[1px] border-[#1111111a] flex flex-col">
                    {Object.entries(RATING).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex items-center justify-between"
                      >
                        <div className="w-1/2">
                          <h3 className="text-[14px] font-[500] leading-[20px]">
                            {key}
                          </h3>
                        </div>
                        <div className="w-1/2 relative flex gap-[8px] items-start justify-center">
                          <div className="relative w-full mt-[6px]">
                            <div
                              style={{ width: `${(value / 5) * 100}%` }}
                              className="custom-bg absolute z-10 rounded-[100px] h-[8px]"
                            />
                            <div className="bg-custom-grey-2 w-full absolute z-0 rounded-[100px] h-[8px]" />
                          </div>
                          <p className="text-[12px] font-normal">{value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid gap-[16px] grid-cols-2 w-full">
                    <div className="gap-[24px] p-[24px] rounded-[20px] border-[1px] border-[#1111111a] flex flex-col">
                      <div className="flex gap-[16px]">
                        <div className="rounded-full overflow-hidden h-[56px] w-[56px]">
                          <img
                            className="h-[56px] w-[56px] object-cover"
                            src="/jack.png"
                          />
                        </div>
                        <div className="flex flex-col gap-[4px]">
                          <h3 className="text-[16px] font-[500] text-[#111111]">
                            Jack
                          </h3>
                          <h6 className="text-[12px] text-[#717171]">
                            March 2023
                          </h6>
                        </div>
                      </div>
                      <p className="text-[14px] text-[#111111]">
                        Abbe&apos;s place was so wonderful and just what I
                        needed. It was the perfect escape with a great wood
                        stove, beautiful views, horses, and nearby skiing.
                        I&apos;m so grateful.
                      </p>
                    </div>
                    <div className="gap-[24px] p-[24px] rounded-[20px] border-[1px] border-[#1111111a] flex flex-col">
                      <div className="flex gap-[16px]">
                        <div className="rounded-full overflow-hidden h-[56px] w-[56px]">
                          <img
                            className="h-[56px] w-[56px] object-cover"
                            src="/emily.png"
                          />
                        </div>
                        <div className="flex flex-col gap-[4px]">
                          <h3 className="text-[16px] font-[500] text-[#111111]">
                            Emily
                          </h3>
                          <h6 className="text-[12px] text-[#717171]">
                            March 2023
                          </h6>
                        </div>
                      </div>
                      <p className="text-[14px] text-[#111111]">
                        Abbe&apos;s place was so wonderful and just what I
                        needed. It was the perfect escape with a great wood
                        stove, beautiful views, horses, and nearby skiing.
                        I&apos;m so grateful.
                      </p>
                    </div>
                    <div className="gap-[24px] p-[24px] rounded-[20px] border-[1px] border-[#1111111a] flex flex-col">
                      <div className="flex gap-[16px]">
                        <div className="rounded-full overflow-hidden h-[56px] w-[56px]">
                          <img
                            className="h-[56px] w-[56px] object-cover"
                            src="/daniel.png"
                          />
                        </div>
                        <div className="flex flex-col gap-[4px]">
                          <h3 className="text-[16px] font-[500] text-[#111111]">
                            Daniel
                          </h3>
                          <h6 className="text-[12px] text-[#717171]">
                            March 2023
                          </h6>
                        </div>
                      </div>
                      <p className="text-[14px] text-[#111111]">
                        Abbe&apos;s place was so wonderful and just what I
                        needed. It was the perfect escape with a great wood
                        stove, beautiful views, horses, and nearby skiing.
                        I&apos;m so grateful.
                      </p>
                    </div>
                    <div className="gap-[24px] p-[24px] rounded-[20px] border-[1px] border-[#1111111a] flex flex-col">
                      <div className="flex gap-[16px] items-center">
                        <div className="rounded-full overflow-hidden h-[56px] w-[56px]">
                          <img
                            className="h-[56px] w-[56px] object-cover"
                            src="/jackson.png"
                          />
                        </div>
                        <div className="flex flex-col gap-[4px]">
                          <h3 className="text-[16px] leading-[20px] font-[500] text-[#111111]">
                            Jackson
                          </h3>
                          <h6 className="text-[12px] leading-[20px] text-[#717171]">
                            March 2023
                          </h6>
                        </div>
                      </div>
                      <p className="text-[14px] text-[#111111]">
                        Abbe&apos;s place was so wonderful and just what I
                        needed. It was the perfect escape with a great wood
                        stove, beautiful views, horses, and nearby skiing.
                        I&apos;m so grateful.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-[14px] font-[600] leading-[20px] text-image">
                  View more
                </h3>
              </div>

              <div className="divider"></div>

              <div className="flex gap-[32px] flex-col">
                <h3 className="text-[18px] leading-[24px] font-[600]">
                  Where you&apos;ll be
                </h3>

                <div className="w-full min-h-[400px] rounded-[20px] overflow-hidden">
                  <img className="h-[400px] object-cover" src="/map.png" />
                </div>

                <div className="gap-[16px] flex flex-col">
                  <h3 className="text-[16px] font-[500] leading-[20px] text-[#111111]">
                    Laglio, Lombardia, Italy
                  </h3>
                  <p className="text-[#717171] text-[14px]">
                    The property, given its close proximity to the refreshing
                    hillside town of Tagaytay and clear blue beaches of Nasugbu,
                    provides a quick escape from the hustle and bustle of city
                    life.
                  </p>
                </div>

                <h3 className="text-[14px] font-[600] leading-[20px] text-image">
                  View more
                </h3>
              </div>

              <div className="divider"></div>

              <div className="flex gap-[24px] flex-col">
                <h3 className="text-[18px] leading-[24px] font-[600]">Host</h3>

                <div className="flex justify-between w-full">
                  <div className="flex gap-[16px]">
                    <div className="rounded-full overflow-hidden h-[56px] w-[56px]">
                      <img
                        className="h-[56px] w-[56px] object-cover"
                        src="/brenda.jpeg"
                      />
                    </div>
                    <div className="flex flex-col gap-[4px]">
                      <h3 className="text-[16px] font-[500] leading-[20px] text-[#111111]">
                        Hosted by Brenda
                      </h3>
                      <h6 className="text-[12px] text-[#717171] leading-[20px]">
                        Joined in August 2014
                      </h6>
                    </div>
                  </div>
                  <button className="border-[1px] border-[#717171] rounded-[12px] h-[48px] px-[24px] py-[8px] text-[14px] font-[500] text-[#111111] leading-[20px] hover:border-custom-red-2">
                    Contact Host
                  </button>
                </div>

                <div className="gap-[16px] flex flex-col">
                  <div className="flex gap-[40px]">
                    <div className="flex gap-[12px] items-center">
                      <StarIcon
                        height={20}
                        width={20}
                        className="text-custom-text"
                      />
                      <span className="text-[14px] leading-[20px] text-[#111111]">
                        2,635 reviews
                      </span>
                    </div>
                    <div className="flex gap-[12px] items-center">
                      <ShieldCheckIcon
                        height={20}
                        width={20}
                        className="text-custom-text"
                      />
                      <span className="text-[14px] leading-[20px] text-[#111111]">
                        Identity verified
                      </span>
                    </div>
                    <div className="flex gap-[12px] items-center">
                      <TrophyIcon
                        height={16}
                        width={18}
                        className="text-custom-red-2"
                      />
                      <span className="text-[14px] leading-[20px] text-[#111111]">
                        Superhost
                      </span>
                    </div>
                  </div>
                  <p className="text-[#717171] text-[14px]">
                    As a mother of 4, living in Solana Beach for 25+ years, I
                    love to help families enjoy our beautiful area. Vacations
                    are special and we do our very best to make them affordable,
                    enjoy…
                  </p>
                </div>

                <h3 className="text-[14px] font-[600] leading-[20px] text-image">
                  View more
                </h3>
              </div>
            </div>

            <div className="flex flex-col gap-y-[16px]">
              {hotel && <SidePanel hotel={hotel} />}
              <RareFind />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
