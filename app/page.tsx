import AboutUs from "@/components/AboutUs";
import BusinessOwner from "@/components/BusinessOwner";
import Camp from "@/components/Camp";
import CaseStudy from "@/components/CaseStudy";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import OurProcess from "@/components/OurProcess";
import Staff from "@/components/Staff";

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessOwner/>
      <Staff/>
      {/* <AboutUs/> */}
      {/* <Camp /> */}
      {/* <Guide /> */}
      <Features />
      {/* <OurProcess/> */}
      {/* <CaseStudy/> */}
      <GetApp />
    </>
  )
}
