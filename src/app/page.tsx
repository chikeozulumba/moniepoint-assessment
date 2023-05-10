"use client";
import { Provider, useAtom } from "jotai";
import { HotelCard } from "@/components/HotelCard";
import { SecondaryNavbar } from "@/components/SecondaryNavbar";
import { Sidebar } from "@/components/Sidebar";
import { HOTEL } from "@/constants/hotel";
import { FilterModal } from "@/components/FilterModal";
import { filterModalAtom, hotelAtom, hotelViewModalAtom } from "@/store/modal";
import { HotelViewModal } from "@/components/HotelViewModal";
import { useState } from "react";

export default function Home() {
  const [showFilterModal, setFilterModal] = useAtom(filterModalAtom);
  const [showHotelViewFilterModal, setHotelViewFilterModal] = useState(false);
  const [hotel, setHotelAtom] = useState<null | (typeof HOTEL)[0]>(null);

  function handleCardClicked($hotel: (typeof HOTEL)[0]) {
    setHotelViewFilterModal(true);
    setHotelAtom($hotel);
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
          hotel={hotel}
        />
      </main>
    </Provider>
  );
}
