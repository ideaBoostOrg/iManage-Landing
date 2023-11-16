"use client"

import { useState } from "react";
import { FEATURES } from "@/constants";
import Image from "next/image";
import React from "react";
import Button from "./Button";

const Features = () => {

  const [showAllFeatures, setShowAllFeatures] = useState(false);

  const toggleFeatures = () => {
    setShowAllFeatures(!showAllFeatures);
  };

  const displayedFeatures = showAllFeatures ? FEATURES : FEATURES.slice(0, 6);

  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="z-20 flex w-full flex-col lg:w-[77%]">
        <div className="relative">
          <h2 className="bold-40 lg:bold-64">Our Features</h2>
        </div>
        <ul className="mt-10 grid gap-10 md:grid-cols-3 lg:mg-20 lg:gap-20">
          {displayedFeatures.map((feature) => (
            <FeatureItem
              key={feature.title}
              title={feature.title}
              icon={feature.icon}
              description={feature.description}
            />
          ))}
        </ul>
        {!showAllFeatures && (
        <div className="flex w-full flex-col xl:flex-row justify-center pt-10">
          <Button
            type="button"
            title="Read More +"
            // icon="/apple.svg"
            variant="btn_read_more"
            onClick={toggleFeatures}
          />
        </div>
      )}
      {showAllFeatures && (
        <div className="flex w-full flex-col xl:flex-row justify-center pt-10">
          <Button
            type="button"
            title="See Less -"
            // icon="/apple.svg"
            variant="btn_read_more"
            onClick={toggleFeatures}
          />
        </div>
      )}
      </div>
    </section>
  );
};

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
};

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 bg-[#5662d6]">
        <Image src={icon} alt="map" width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  );
};

export default Features;
