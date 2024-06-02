import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    style?: string;
    type?: "button" | "submit";
    handleClick?: MouseEventHandler<HTMLButtonElement>
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}