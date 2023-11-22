'use client'
import BusinessOwner from "@/components/BusinessOwner";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Hero from "@/components/Hero";
import Staff from "@/components/Staff";

export default function Home () {
  return (
    <>
      <Hero />
      <BusinessOwner />
      <Staff />
      {/* <AboutUs/> */ }
      {/* <Camp /> */ }
      {/* <Guide /> */ }
      <Features />
      {/* <OurProcess/> */ }
      {/* <CaseStudy/> */ }
      <GetApp />
    </>
  )
}
