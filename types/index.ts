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

export interface carProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}