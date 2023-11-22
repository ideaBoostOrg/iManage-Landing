import Image from "next/image";

const BusinessOwner = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex justify-end">
        {/* <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div> */}

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            {/* <Image
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            /> */}
            <h2 className="bold-40 lg:bold-48">Revolutionize Your Cleaning Business with iManage!</h2>
            {/* <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]"> */ }
            <p className="regular-16 mt-6 text-gray-30 xl:min-w-[620px]">
              Take charge of your cleaning operations like never before with
              iManage. Our cutting-edge platform empowers cleaning businesses to
              efficiently oversee every aspect of their operations, from task
              management and job scheduling to client interactions and
              centralised staff management. <br /><br /> Unlock the future of cleaning
              management with SmikApp's secure portal, providing insightful
              reports that enable you to work smarter, not harder. Say goodbye
              to inefficiency and hello to a cleaner, more streamlined future!
            </p>
          </div>

          {/* <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem 
                key={feature.title}
                title={feature.title} 
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul> */}
        </div>
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
      <div className="rounded-full p-4 lg:p-7 bg-green-50">
        <Image src={ icon } alt="map" width={ 28 } height={ 28 } />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{ title }</h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        { description }
      </p>
    </li>
  );
};

export default BusinessOwner;
