"use client";

import { useState } from "react";
import Image from "next/image";

import CustomButton from "./CustomButton";
import CarDetails from "./CarDetails";
import { CarProps } from "@/types";
import { calculateCarRent } from "@/utils";
import CardIcon from "./CardIcon";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  const [isOpen, setIsOpen] = useState(false);

  const carRent = calculateCarRent(city_mpg, year);

  const handleIsOpen = () => setIsOpen((currentState) => !currentState);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-6 text-[32px] leading-[38px] font-extrabold">
        <span className="self-start text-[14px] leading-[17px] font-semibold">
          $
        </span>
        {carRent}
        <span className="self-end text-[14px] leading-[17px] font-medium">
          /day
        </span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/hero.png"
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-grey">
          <CardIcon
            src="/steering-wheel.svg"
            alt="steering wheel"
            title={transmission === "a" ? "Automatic" : "Manual"}
          />
          <CardIcon src="/tire.svg" alt="seat" title={drive.toUpperCase()} />
          <CardIcon src="/gas.svg" alt="seat" title={`${city_mpg} MPG`} />
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={handleIsOpen}
          />
        </div>
      </div>

      <CarDetails isOpen={isOpen} closeModal={handleIsOpen} car={car} />
    </div>
  );
};

export default CarCard;
