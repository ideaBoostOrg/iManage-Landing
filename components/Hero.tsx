import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-6 pb-32 md:gap-28 lg:py-10 xl:flex-row">
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 py-20">
        <h1 className="bold-52 lg:bold-58">Revolutionize Your Cleaning Business</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          The Ultimate Job Management Solution. Streamline operations, enhance efficiency, and elevate customer satisfaction. Take control of your business with iManage - Where Cleaning Meets Efficiency!
        </p>

        {/* <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">
              Excellent Reviews
            </span>
          </p>
        </div> */}

        {/* <div className="my-11 flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" title="Download App" variant="btn_green" />
          <Button
            type="button"
            title="How we work?"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div> */}
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex flex-col gap-8 rounded-3xl px-2 py-0">
           <div className="flex flex-col">
            <div className="flexBetween">
              <Image src="/heros.png" alt="close" width={700} height={300} />
            </div>
          </div> 
        </div>
      </div>
    </section>
  );
};

export default Hero;
