"use client"
import { CustomButtonProps } from "@/types"
import Image from "next/image"

const Button = ({ title, style, handleClick, type, textStyle, rightIcon }: CustomButtonProps) => {
  return (
    <button
        disabled={false}
        type={type}
        className={`custom-btn ${style}`}
        onClick={handleClick}
    >
        <span className={`flex-1 ${textStyle}`}>
            {title}
        </span>
        {rightIcon && (
          <div className="relative w-6 h-6">
            <Image 
              src={rightIcon}
              alt="icon"
              fill 
              className="object-contain"
            />
          </div>
        )}
    </button>
  )
}

export default Button