"use client"
import { useState } from "react"
import Image from "next/image"
import { carProps } from "@/types"
import Button from "./Button"
import { calculateCarRent, generateCarImageUrl } from "@/utils"
import CardDetails from "./CardDetails"

interface CarCardProps {
  car: carProps
}

const CarCard = ({ car }: CarCardProps) => {

  const [isOpen, setIsOpen] = useState(false)

  const { city_mpg, year, make, model, transmission, drive } = car
  const carRent = calculateCarRent(city_mpg, year)
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">{make} {model}</h2>
      </div>

      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">
          $
        </span>
        {carRent}
        <span className="self-end text-[14px] font-medium">
          /day
        </span>
      </p>

      <div className="relative object-contain w-full h-40 my-3">
        <Image 
          src={generateCarImageUrl(car)} 
          fill 
          priority 
          alt="car model"
          className="object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex justify-between w-full text-gray-600 group-hover:invisible">
          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering-wheel"
            />
            <p className="text-[14px]">
              {transmission === 'a' ? 'automatic' : 'manual'}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              src="/tire.svg"
              width={20}
              height={20}
              alt="tire"
            />
            <p className="text-[14px]">
              {drive.toUpperCase()}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              src="/gas.svg"
              width={20}
              height={20}
              alt="gas"
            />
            <p className="text-[14px]">
              {city_mpg} MPG
            </p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <Button
            title="View More"
            style="w-full py-[16px] rounded-full bg-primary-blue" 
            textStyle="text-white font-semibold leading-[17px] font-bold"
            rightIcon = "/right-arrow.svg"
            handleClick={()=> setIsOpen(true)}
          />
        </div>
      </div>

      <CardDetails
        isOpen={isOpen}
        closeModal = {()=> setIsOpen(false)} 
        car={car}
      />
    </div>
  )
}

export default CarCard