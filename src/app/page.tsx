"use client";
import { Provider, useAtom } from "jotai";
import { HotelCard } from "@/components/HotelCard";
import { SecondaryNavbar } from "@/components/SecondaryNavbar";
import { Sidebar } from "@/components/Sidebar";
import { HOTEL } from "@/constants/hotel";
import { FilterModal } from "@/components/FilterModal";
import { filterModalAtom, hotelViewModalAtom } from "@/store/modal";
import { HotelViewModal } from "@/components/HotelViewModal";

export default function Home() {
  const [showFilterModal, setFilterModal] = useAtom(filterModalAtom);
  const [showHotelViewFilterModal, setHotelViewFilterModal] =
    useAtom(hotelViewModalAtom);

  function handleCardClicked(hotel: (typeof HOTEL)[0]) {
    setHotelViewFilterModal(true);
  }

  return (
    <Provider>
      <main>
        <SecondaryNavbar toggleFilter={() => setFilterModal(true)} />
        <div className="flex">
          <Sidebar />
          <div id="hotel-card-wrapper">
            {HOTEL.map((hotel, i) => (
              <HotelCard onClick={handleCardClicked} key={i} hotel={hotel} />
            ))}
          </div>
        </div>
        <FilterModal open={showFilterModal} setModal={setFilterModal} />
        <HotelViewModal
          open={showHotelViewFilterModal}
          setModal={setHotelViewFilterModal}
        />
      </main>
    </Provider>
  );
}
