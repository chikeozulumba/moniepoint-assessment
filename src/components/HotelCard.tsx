/* eslint-disable @next/next/no-img-element */
import { HOTEL } from "@/constants/hotel";
import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

function Like() {
  return (
    <div className="h-[36px] w-[36px] top-[10px] right-[10px] rounded-full bg-white flex items-center justify-center z-[9999] absolute group hover:bg-custom-text-black hover:transition-all">
      <HeartIcon
        height={16}
        width={16}
        className="group-hover:text-white text-custom-text-black"
      />
    </div>
  );
}

export function HotelCard({
  hotel,
  onClick,
}: {
  hotel: (typeof HOTEL)[0];
  onClick: (hotel: (typeof HOTEL)[0]) => void;
}) {
  return (
    <div
      role="button"
      onClick={() => onClick(hotel)}
      className="hotel-card border border-custom-grey-2"
    >
      <div className="image relative">
        <Like />
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
      <div className="content">
        <div className="flex flex-col flex-nowrap gap-x-[8px]">
          <h2 className="text-[18px] text-custom-text leading-[24px] font-[500]">
            {hotel.name}
          </h2>
          <h5 className="text-[14px] text-custom-text-grey leading-[20px]">
            {hotel.address}
          </h5>
        </div>
        <div className="flex flex-row justify-between flex-nowrap gap-x-[8px w-full">
          <h5 className="text-[14px] leading-[20px] text-custom-text space-x-1">
            <span className="font-[600]">
              {new Intl.NumberFormat("en-US", {
                currency: "USD",
                style: "currency",
              }).format(hotel.price)}
            </span>
            <span className="text-custom-text-grey">/</span>
            <span className="text-custom-text-grey">night</span>
          </h5>
          <span className="flex items-center space-x-1">
            <StarIcon className="text-custom-text h-[16px] w-[16px]" />
            <span className="text-custom-text-grey text-[14px] leading-[20px]">
              {new Intl.NumberFormat("en-US", {
                minimumSignificantDigits: 2,
              }).format(hotel.rating)}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
