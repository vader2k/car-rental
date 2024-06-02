import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    style?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>
}