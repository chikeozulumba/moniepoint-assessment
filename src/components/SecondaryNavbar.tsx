import {
  CalendarIcon,
  ChevronDownIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import {
  FunnelIcon,
  MapIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

type Props = {
  toggleFilter: () => void;
};

function MainFilter() {
  return (
    <div className="gap-[12px] flex">
      <div className="w-[240px] bg-custom-grey-2 bg-opacity-70 h-[48px] flex justify-between items-center px-[16px] py-[12px] rounded-[12px]">
        <span className="text-custom-text text-[14px] leading-[20px]">
          Anywhere
        </span>
        <ChevronDownIcon height={20} width={20} className="text-custom-text" />
      </div>
      <div className="bg-custom-grey-2 bg-opacity-70 h-[48px] flex justify-between items-center px-[16px] py-[12px] rounded-[12px] gap-x-[12px]">
        <CalendarIcon height={20} width={20} className="text-custom-text" />
        <span className="text-custom-text text-[14px] leading-[20px]">
          June 14 - 21
        </span>
      </div>
      <div className="bg-custom-grey-2 bg-opacity-70 h-[48px] flex justify-between items-center px-[8px] py-[12px] rounded-[12px] gap-x-[16px]">
        <div className="bg-white p-[8px] rounded-[8px]">
          <MinusIcon height={16} width={16} className="text-custom-red" />
        </div>
        <span className="text-custom-text text-[14px] leading-[20px]">
          4 guests
        </span>
        <div className="bg-white p-[8px] rounded-[8px]">
          <PlusIcon height={16} width={16} className="text-custom-red" />
        </div>
      </div>
    </div>
  );
}

function SideFilter({ toggleFilter }: Props) {
  return (
    <div
      role="button"
      className="bg-custom-grey-2 bg-opacity-70 hover:bg-opacity-100 cursor-pointer p-[8px] rounded-[8px] h-[48px] w-[48px] inline-flex items-center justify-center"
      onClick={toggleFilter}
    >
      <FunnelIcon height={16} width={16} className="text-custom-text" />
    </div>
  );
}

function Switch() {
  return (
    <div className="bg-custom-grey-2 bg-opacity-70 cursor-pointer rounded-[8px] h-[48px] w-[96px] inline-flex items-center justify-center overflow-hidden">
      <div className="w-[48px] h-full inline-flex justify-center items-center rounded-[8px] bg-custom-text">
        <Squares2X2Icon height={20} width={20} className="text-white" />
      </div>
      <div className="w-[48px] h-full inline-flex justify-center items-center">
        <MapIcon height={20} width={20} className="text-custom-text" />
      </div>
    </div>
  );
}

export function SecondaryNavbar({ toggleFilter }: Props) {
  return (
    <div className="h-[72px] z-[99999] bg-white top-[0] sticky flex items-center justify-between px-[32px] py-[16px] border-b-[1px] border-custom-grey">
      <Switch />
      <MainFilter />
      <SideFilter toggleFilter={toggleFilter} />
    </div>
  );
}
