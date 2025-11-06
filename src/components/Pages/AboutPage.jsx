import React from "react";
import Spacing from "../Spacing";
import SectionHeadingStyle3 from "../SectionHeading/SectionHeadingStyle3";
import AboutStyle4 from "../About/AboutStyle4";
import FunFact from "../FunFact";
import AboutStyle5 from "../About/AboutStyle5";
import IconBoxStyle6 from "../IconBox/IconBoxStyle6";
import SectionHeadingStyle5 from "../SectionHeading/SectionHeadingStyle5";
import SectionHeading from "../SectionHeading";
import TeamSlider from "../Slider/TeamSlider";
import Marquee from "../Marquee";
import Brands from "../Brands";
import { pageTitle } from "../../helpers/PageTitle";
const funfactData = [
  { title: "Happy Customers", number: "22k" },
  { title: "Work’s Completed", number: "15k" },
  { title: "Skilled Team Members", number: "121" },
  { title: "Most Valuable Awards", number: "15" },
];
const teamData = [
  {
    memberImg: "/images/studio-agency/team_1.jpeg",
    memberName: "James Berline",
    memberDesignation: "React Developer",
    href: "/team/team-details",
  },
  {
    memberImg: "/images/studio-agency/team_2.jpeg",
    memberName: "Bella Zubena",
    memberDesignation: "Graphic Designer",
    href: "/team/team-details",
  },
  {
    memberImg: "/images/studio-agency/team_3.jpeg",
    memberName: "Kemnei Alekzend",
    memberDesignation: "Digital Marketer",
    href: "/team/team-details",
  },
  {
    memberImg: "/images/studio-agency/team_4.jpeg",
    memberName: "Juliya Jesmine",
    memberDesignation: "UX Researcher",
    href: "/team/team-details",
  },
  {
    memberImg: "/images/studio-agency/team_1.jpeg",
    memberName: "James Berline",
    memberDesignation: "React Developer",
    href: "/team/team-details",
  },
  {
    memberImg: "/images/studio-agency/team_2.jpeg",
    memberName: "Bella Zubena",
    memberDesignation: "Graphic Designer",
    href: "/team/team-details",
  },
  {
    memberImg: "/images/studio-agency/team_3.jpeg",
    memberName: "Kemnei Alekzend",
    memberDesignation: "Digital Marketer",
    href: "/team/team-details",
  },
  {
    memberImg: "/images/studio-agency/team_4.jpeg",
    memberName: "Juliya Jesmine",
    memberDesignation: "UX Researcher",
    href: "/team/team-details",
  },
];
const brandList = [
  {
    logoSrc: "/images/marketing-agency/brand_1.svg",
    logoAlt: "Brand",
  },
  {
    logoSrc: "/images/marketing-agency/brand_2.svg",
    logoAlt: "Brand",
  },
  {
    logoSrc: "/images/marketing-agency/brand_3.svg",
    logoAlt: "Brand",
  },
  {
    logoSrc: "/images/marketing-agency/brand_4.svg",
    logoAlt: "Brand",
  },
];
const brandListDark = [
  {
    logoSrc: "/images/marketing-agency/brand_1_dark.svg",
    logoAlt: "Brand",
  },
  {
    logoSrc: "/images/marketing-agency/brand_2_dark.svg",
    logoAlt: "Brand",
  },
  {
    logoSrc: "/images/marketing-agency/brand_3_dark.svg",
    logoAlt: "Brand",
  },
  {
    logoSrc: "/images/marketing-agency/brand_4_dark.svg",
    logoAlt: "Brand",
  },
];

export default function AboutPage({ darkMode }) {
  pageTitle("About");
  return (
    <>
      <Spacing
        lg="70"
        md="70"
      />
      <Spacing
        lg="140"
        md="80"
      />
      <SectionHeadingStyle3
        title="Pioneering Pakistan’s Journey Toward Clean Energy and Electric Mobility"
        subTitle="About Us"
        variant="text-center"
        shape="shape_1"
      />

      <Spacing
        lg="75"
        md="60"
      />
      <AboutStyle4
        thumbnailSrc="/images/about/about1.jpg"
        miniTitle="Company Info"
        title="Pioneering Pakistan’s Transition to Clean Energy and Electric Mobility"
        subTitle={`Hyper Electrify Infrastructure Pvt. Ltd. (HEIPL) is leading Pakistan’s shift toward clean energy, electric mobility, and sustainable infrastructure. 
Founded with a vision to modernize the nation’s energy ecosystem, HEIPL partners with government bodies and international technology leaders to deliver large-scale, high-impact projects — spanning EV charging networks, solar power systems, battery manufacturing, and energy efficiency consultancy. 
Our mission is to build a cleaner, smarter, and more self-reliant Pakistan powered by innovation and sustainability.`}
        btnText="Explore Our Services"
        btnUrl="/service"
      />

      <Spacing
        lg="125"
        md="70"
      />
      <div className="container">
        <FunFact data={funfactData} />
      </div>
      <Spacing
        lg="125"
        md="70"
      />
      <AboutStyle5
        thumbnailSrc="/images/what-we-do.jpg"
        imgSrc="/images/what-we-do-second.jpg"
        videoSrc="/images/digital-agency/video.mp4"
        miniTitle="What We Do"
        title="Driving Pakistan’s Clean Energy & Electric Future"
        subTitle={`At Hyper Electrify Infrastructure Pvt. Ltd. (HEIPL), we design, deploy, and manage next-generation clean energy systems across Pakistan — combining advanced hardware, smart software, and nationwide execution capability.
   
   Our services cover everything from EV infrastructure and solar manufacturing to battery systems and energy efficiency consultancy — ensuring Pakistan’s smooth transition to a sustainable and electrified future.`}
        progressBarList={[
          { title: "Charge Panels & EV Network Management", percentage: "95" },
          {
            title: "Electric Mobility Solutions (Buses, Bikes, SUVs)",
            percentage: "90",
          },
          {
            title: "Solar Panel Manufacturing & Integration",
            percentage: "88",
          },
          {
            title: "Energy Efficiency & Consultancy Programs",
            percentage: "92",
          },
        ]}
      />
      <Spacing
        lg="150"
        md="80"
      />
      <section className="cs_primary_bg">
        <Spacing
          lg="140"
          md="70"
        />

        <div className="container">
          <SectionHeadingStyle5 title="How We Work" />
          <Spacing
            lg="85"
            md="45"
          />
          <div className="cs_working_process_wrap cs_center">
            <div className="cs_working_process">
              {/* Step 1 - Research & Assessment */}
              <div className="cs_working_process_col">
                <IconBoxStyle6
                  bgSrc="/images/others/process_1.png"
                  iconSrc="/images/icons/search.svg"
                  title="Research & Assessment"
                  subTitle="We begin by analyzing client needs, energy consumption patterns, and infrastructure potential — ensuring every solution aligns with Pakistan’s clean energy goals."
                />
              </div>

              {/* Step 2 - Design & Integration */}
              <div className="cs_working_process_col">
                <IconBoxStyle6
                  bgSrc="/images/others/process_2.png"
                  iconSrc="/images/icons/idea.svg"
                  title="Design & Integration"
                  subTitle="Our engineering and technology teams design optimized systems — combining advanced hardware, smart software, and localized manufacturing expertise."
                />
              </div>

              {/* Step 3 - Implementation & Support */}
              <div className="cs_working_process_col">
                <IconBoxStyle6
                  bgSrc="/images/others/process_3.png"
                  iconSrc="/images/icons/gear.svg"
                  title="Implementation & Support"
                  subTitle="From on-site deployment to real-time monitoring, HEIPL ensures seamless installation, technical training, and long-term project sustainability."
                />
              </div>
            </div>
          </div>
        </div>

        <Spacing
          lg="150"
          md="80"
        />
      </section>
      <section className="cs_p76_full_width">
        <Spacing
          lg="143"
          md="75"
        />
        <div className="container">
          <SectionHeading
            title="Meet our experts team behind <br />the zivan agency"
            subTitle="Our Team"
          />
          <Spacing
            lg="85"
            md="45"
          />
        </div>
        <TeamSlider data={teamData} />
      </section>
      <Spacing
        lg="135"
        md="70"
      />
      <Marquee text="We Create Design - Build App - Website - Branding - SEO" />
      <Spacing
        lg="84"
        md="50"
      />
      {/* <div className="container">
        <Brands data={darkMode ? brandListDark : brandList} />
      </div> */}
      <Spacing
        lg="135"
        md="80"
      />
    </>
  );
}
