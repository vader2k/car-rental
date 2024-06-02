"use client"
import { CustomButtonProps } from "@/types"
import Image from "next/image"

const Button = ({ title, style, handleClick, type }: CustomButtonProps) => {
  return (
    <button
        disabled={false}
        type={type}
        className={`custom-btn ${style}`}
        onClick={handleClick}
    >
        <span className={`flex-1`}>
            {title}
        </span>
    </button>
  )
}

export default Button