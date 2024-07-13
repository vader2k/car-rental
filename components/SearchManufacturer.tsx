"use client";
import Image from "next/image";
import { useState, Fragment } from "react";
import { SearchManufacturerProps } from "@/types";
import { 
  Combobox, 
  ComboboxButton, 
  ComboboxInput, 
  Transition, 
  ComboboxOptions,
  ComboboxOption
} from "@headlessui/react";

import { manufacturers } from "@/constants";

const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
  const [query, setQuery] = useState('');

  const filteredManufacturers = query === '' 
    ? manufacturers 
    : manufacturers.filter((item) => (
      item.toLowerCase()
      .replace(/\s+/g, "")
      .includes(query.toLowerCase().replace(/\s+/g, ""))
    ));

  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <ComboboxButton className="absolute top-[14px]">
            <Image 
              src="/car-logo.svg"
              alt="car logo"
              width={20}
              height={20}
              className="ml-4"
            />
          </ComboboxButton>

          <ComboboxInput
            className="search-manufacturer__input" 
            placeholder="volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <ComboboxOptions>
              {filteredManufacturers.map((manufacturer) => (
                <ComboboxOption
                  key={manufacturer}
                  value={manufacturer}
                  className={({ active }) => `
                    relative search-manufacturer__option px-2 ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
                >
                  {manufacturer}
                </ComboboxOption>
              ))}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}

export default SearchManufacturer;