import { HOTEL } from "@/constants/hotel";
import { atom } from "jotai";

export const filterModalAtom = atom(false);
export const hotelViewModalAtom = atom(false);
export const hotelAtom = atom<null | (typeof HOTEL)[0]>(null);
