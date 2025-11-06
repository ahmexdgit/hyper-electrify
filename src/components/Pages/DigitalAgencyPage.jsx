import React from "react";
import HeroStyle4 from "../Hero/HeroStyle4";
import Spacing from "../Spacing";
import SectionHeading from "../SectionHeading";
import PostGridStyle2 from "../PostGrid/PostGridStyle2";
import Marquee from "../Marquee";
import Brands from "../Brands";
import Cta from "../Cta";
import TestimonialSlider from "../Slider/TestimonialSlider";
import FunFact from "../FunFact";
import AboutStyle4 from "../About/AboutStyle4";
import AboutStyle5 from "../About/AboutStyle5";
import IconBoxStyle2 from "../IconBox/IconBoxStyle2";
import PortfolioSlider from "../Slider/PortfolioSlider";
import PricingTableList from "../PricingTable/PricingTableList";
import { pageTitle } from "../../helpers/PageTitle";
const funfactData = [
  { title: "Happy Customers", number: "22k" },
  { title: "Projects Completed", number: "15k" },
  { title: "Skilled Team Members", number: "121" },
  { title: "Most Valuable Awards", number: "15" },
];
const postData = [
  {
    date: "05 Mar 2023",
    title: "How to keep fear from ruining your art business with confident",
    thumbnailSrc: "/images/studio-agency/post_2.jpeg",
    href: "/blog/blog-details",
  },
  {
    date: "07 Mar 2023",
    title: "Artistic mind will be great for creation anything",
    thumbnailSrc: "/images/studio-agency/post_1.jpeg",
    href: "/blog/blog-details",
  },
  {
    date: "03 Mar 2023",
    title: "How to keep fear from ruining your art business with confident",
    thumbnailSrc: "/images/studio-agency/post_3.jpeg",
    href: "/blog/blog-details",
  },
  {
    date: "02 Mar 2023",
    title: "How to keep fear from ruining your art business with confident",
    thumbnailSrc: "/images/studio-agency/post_4.jpeg",
    href: "/blog/blog-details",
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
const testimonialData = [
  {
    text: "HEIPL played a pivotal role in helping us deploy Pakistan’s first large-scale EV charging stations. Their technical expertise and operational reliability have made our clean mobility initiative a true success.",
    avatarName: "Imran Shah",
    avatarDesignation: "Director, National EV Program (Ministry of Energy)",
  },
  {
    text: "The HEIPL team’s support during our solar panel manufacturing setup was exceptional. Their on-ground coordination and technology transfer facilitation have set a new benchmark for renewable energy projects in Pakistan.",
    avatarName: "Li Wei",
    avatarDesignation: "Project Lead, Sino Solar Technologies (China)",
  },
  {
    text: "HEIPL’s energy-efficient fan installation program has significantly reduced our facility’s power consumption. Their project management and after-sales service were professional, timely, and transparent.",
    avatarName: "Ayesha Khan",
    avatarDesignation: "Operations Manager, National Energy Efficiency Project",
  },
  {
    text: "Working with HEIPL on our electric bus fleet project was an excellent experience. Their commitment to sustainable mobility and attention to operational detail made the transition seamless for our university campus.",
    avatarName: "Dr. Ahmad Farooq",
    avatarDesignation: "Transport Coordinator, IIUI Islamabad",
  },
  {
    text: "HEIPL’s battery collaboration project is a game-changer for local energy storage manufacturing. Their team’s blend of technical know-how and strategic execution made this partnership smooth and impactful.",
    avatarName: "Chen Ming",
    avatarDesignation: "CTO, GreenVolt Battery Systems (China)",
  },
];

// const portfolioData = [
//   {
//     thumbnailSrc: "/images/digital-agency/portfolio_1.jpeg",
//     miniTitle: "React Development",
//     title: "Corporate Webly <br />Application",
//     subTitle:
//       "From designing the user interface to coding the functionality and ensuring the <br /> website is secure and optimized for performance.",
//     href: "/portfolio/portfolio-details",
//   },
//   {
//     thumbnailSrc: "/images/digital-agency/portfolio_2.jpeg",
//     miniTitle: "UI/UX Design",
//     title: "eCommerce User <br />Interface Design",
//     subTitle:
//       "From designing the user interface to coding the functionality and ensuring the <br /> website is secure and optimized for performance.",
//     href: "/portfolio/portfolio-details",
//   },
//   {
//     thumbnailSrc: "/images/digital-agency/portfolio_3.jpeg",
//     miniTitle: "3D Render",
//     title: "Multi Dimension <br />Two Square",
//     subTitle:
//       "From designing the user interface to coding the functionality and ensuring the <br /> website is secure and optimized for performance.",
//     href: "/portfolio/portfolio-details",
//   },
//   {
//     thumbnailSrc: "/images/digital-agency/portfolio_4.jpeg",
//     miniTitle: "Animation",
//     title: "Animated Abstract <br />3D Background",
//     subTitle:
//       "From designing the user interface to coding the functionality and ensuring the <br /> website is secure and optimized for performance.",
//     href: "/portfolio/portfolio-details",
//   },
// ];

const portfolioData = [
  {
    thumbnailSrc: "/images/portfolio/proj1.jpg",
    miniTitle: "Energy Efficiency",
    title: "National Five-Star <br />Fan Installation Program",
    subTitle:
      "A Government of Pakistan–backed initiative under the National Energy Efficiency Program, replacing 88 million conventional fans with Five-Star Rated Energy Efficient models to cut power use by 60%.",
    href: "/portfolio/national-energy-efficiency-program",
  },
  {
    thumbnailSrc: "/images/portfolio/proj2.jpg",
    miniTitle: "Electric Mobility",
    title: "Electric Bike Export <br />to Spain",
    subTitle:
      "HEIPL is spearheading Pakistan’s entry into the global e-mobility export market by supplying locally assembled electric bikes to Spain — promoting sustainable urban transport and green job creation.",
    href: "/portfolio/e-bike-export-spain",
  },
  {
    thumbnailSrc: "/images/portfolio/proj3.jpg",
    miniTitle: "EV Infrastructure",
    title: "EV Charging Network <br />with ChargePanel AB (Sweden)",
    subTitle:
      "A strategic collaboration with ChargePanel AB to deploy and manage a nationwide EV charging network using advanced software, real-time monitoring, billing, and user access systems.",
    href: "/portfolio/ev-charging-collaboration",
  },
  {
    thumbnailSrc: "/images/portfolio/proj4.jpg",
    miniTitle: "Energy Storage",
    title: "Lithium Battery <br />Manufacturing Collaboration (China)",
    subTitle:
      "Partnering with top Chinese energy storage firms to establish local lithium-ion battery manufacturing plants in Pakistan, enabling EV and renewable energy storage independence.",
    href: "/portfolio/lithium-battery-collaboration",
  },
  {
    thumbnailSrc: "/images/portfolio/proj5.jpg",
    miniTitle: "Renewable Energy",
    title: "Solar Panel <br />Manufacturing Collaboration (China)",
    subTitle:
      "HEIPL and Chinese solar technology partners are setting up local panel manufacturing and assembly lines, increasing accessibility and affordability of solar power across Pakistan.",
    href: "/portfolio/solar-manufacturing-collaboration",
  },
  {
    thumbnailSrc: "/images/portfolio/proj6.jpg",
    miniTitle: "Green Mobility",
    title: "Electric Bus Supply <br />to IIUI Campus",
    subTitle:
      "HEIPL provides and operates electric shuttle buses for International Islamic University Islamabad (IIUI), reducing emissions and advancing sustainable campus mobility.",
    href: "/portfolio/electric-buses-iiui",
  },
];

export default function DigitalAgencyPage({ darkMode }) {
  pageTitle("HEIPL");
  return (
    <>
      <HeroStyle4
        title="HEIPL"
        subTitle="Our agency offers a comprehensive suite of lots services, including Branding, Advertising, Social marketing, Video making, and Marketing analysis."
        thumbnailSrc={
          darkMode
            ? "/images/digital-agency/hero_bg_dark.jpeg"
            : "/images/digital-agency/hero_bg.jpeg"
        }
        videoSrc="https://www.youtube.com/embed/VcaAVWtP48A"
        bgUrl="/images/hero-image.jpg"
      />
      <div className="cs_primary_bg">
        <Spacing
          lg="125"
          md="80"
        />
        <div className="container">
          <FunFact
            data={funfactData}
            colorVariant="cs_color_1"
          />
        </div>
        <Spacing
          lg="125"
          md="80"
        />
      </div>
      <Spacing
        lg="150"
        md="80"
      />

      <AboutStyle4
        thumbnailSrc="/images/home-about.jpg"
        miniTitle="About Us"
        title="Pioneering Pakistan’s Clean Energy Future"
        subTitle={`Hyper Electrify Infrastructure Pvt. Ltd. (HEIPL) is a pioneering Pakistani company dedicated to driving the nation’s transition toward clean energy, electric mobility, and sustainable infrastructure development.
Founded with a vision to modernize Pakistan’s energy ecosystem, HEIPL operates at the intersection of technology, innovation, and infrastructure — delivering large-scale projects that create measurable social, environmental, and economic impact.
Our expertise spans energy efficiency programs, EV charging networks, renewable energy integration, battery manufacturing, and localized production of green technologies in collaboration with international partners.

With strong partnerships across government and industry, HEIPL is committed to reducing energy consumption, promoting sustainable mobility, and creating green employment opportunities — contributing to a cleaner, smarter, and more self-reliant Pakistan.`}
        btnText="Explore Our Services"
        btnUrl="/service"
      />

      <Spacing
        lg="150"
        md="80"
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
          lg="143"
          md="75"
        />
        <div className="container">
          <SectionHeading
            title="Exceeding expectations our <br />service is our promise"
            subTitle="Services"
            variantColor="cs_white_color"
          />
          <Spacing
            lg="85"
            md="45"
          />
          {/* <div className="row cs_gap_y_45">
            <div className="col-lg-3 col-sm-6">
              <IconBoxStyle2
                iconSrc="/images/digital-agency/service_icon_1.svg"
                title="Brand Stratege"
                subTitle="Brand's strategy and insights are a forward-thinking blueprint for success."
                features={[
                  "Business Development",
                  "Research & Branding",
                  "Strategy Services",
                  "Business Consulting",
                  "Idea Generate",
                  "Search Engine Optimize",
                ]}
              />
            </div>
            <div className="col-lg-3 col-sm-6">
              <IconBoxStyle2
                iconSrc="/images/digital-agency/service_icon_2.svg"
                title="UI/UX Design"
                subTitle="Help reinforce your brand's identity & cultivate positive user behaviors."
                features={[
                  "UX Research",
                  "Trend Analysis",
                  "A/B Testing",
                  "Information Architecture",
                  "Mockup Design",
                  "Color Analysis",
                ]}
              />
            </div>
            <div className="col-lg-3 col-sm-6">
              <IconBoxStyle2
                iconSrc="/images/digital-agency/service_icon_3.svg"
                title="Animation"
                subTitle="Bringing stories to life the power of modern age animation."
                features={[
                  "Idea Generate",
                  "Story Writing",
                  "White Board Animation",
                  "Advertise Animation",
                  "Video Editing",
                ]}
              />
            </div>
            <div className="col-lg-3 col-sm-6">
              <IconBoxStyle2
                iconSrc="/images/digital-agency/service_icon_4.svg"
                title="Web Development"
                subTitle="Exploring the World of Web Development in zivan digital agency."
                features={[
                  "UI/UX Design",
                  "React Application",
                  "eCommerce Development",
                  "Business Website",
                  "App Development",
                  "Web Application",
                ]}
              />
            </div>
          </div> */}
          <div className="row cs_gap_y_45">
            {/* Charge Panel & EV Network */}
            <div className="col-lg-3 col-sm-6">
              <IconBoxStyle2
                iconSrc="/images/digital-agency/service_icon_4.svg"
                title="EV Charging Infrastructure"
                subTitle="Smart charging networks powered by real-time monitoring, analytics, and software integration."
                features={[
                  "Hardware Installation",
                  "Charge Panel Software Dashboard",
                  "EV Network Management",
                  "Real-time Monitoring",
                  "Billing & Access Control",
                  "Preventive Maintenance",
                ]}
              />
            </div>

            {/* Electric Mobility */}
            <div className="col-lg-3 col-sm-6">
              <IconBoxStyle2
                iconSrc="/images/digital-agency/service_icon_4.svg"
                title="Electric Mobility"
                subTitle="Accelerating Pakistan’s shift to e-bikes, buses, and SUVs — clean, efficient, and future-ready."
                features={[
                  "Electric Buses",
                  "Electric Bikes & Scooters",
                  "EV SUVs & Fleet Vehicles",
                  "Battery Management Systems",
                  "Green Export Initiatives",
                ]}
              />
            </div>

            {/* Solar Energy */}
            <div className="col-lg-3 col-sm-6">
              <IconBoxStyle2
                iconSrc="/images/digital-agency/service_icon_4.svg"
                title="Solar Panel Solutions"
                subTitle="Empowering homes and industries with locally produced, high-efficiency solar technology."
                features={[
                  "Solar Panel Manufacturing",
                  "PV System Design",
                  "Residential & Industrial Installations",
                  "Technology Transfer (China Partnership)",
                  "Maintenance & Monitoring",
                ]}
              />
            </div>

            {/* Energy Efficiency */}
            <div className="col-lg-3 col-sm-6">
              <IconBoxStyle2
                iconSrc="/images/digital-agency/service_icon_4.svg"
                title="Energy Efficiency Consultancy"
                subTitle="Delivering national-scale energy optimization and efficiency improvement programs."
                features={[
                  "National Energy Efficiency Program",
                  "Five-Star Fan Installations",
                  "Building Energy Audits",
                  "Sustainability Planning",
                  "Carbon Reduction Strategies",
                ]}
              />
            </div>
          </div>
        </div>
        <Spacing
          lg="143"
          md="75"
        />
      </section>
      <section>
        <Spacing
          lg="143"
          md="75"
        />
        <div className="container">
          <SectionHeading
            title="Some featured work"
            subTitle="Portfolio"
          />
          <Spacing
            lg="85"
            md="45"
          />
        </div>
        <PortfolioSlider data={portfolioData} />
        <Spacing
          lg="150"
          md="80"
        />
      </section>

      <TestimonialSlider
        layeredImages={[
          "/images/digital-agency/layer_img_1.png",
          "/images/digital-agency/layer_img_2.png",
          "/images/digital-agency/layer_img_3.png",
          "/images/digital-agency/layer_img_4.png",
          "/images/digital-agency/layer_img_5.png",
        ]}
        data={testimonialData}
      />
      <Cta
        title="Is there a specific project or goal <br/>that you have in mind?"
        btnText="Contact Us"
        btnUrl="/contact"
        bgUrl="/images/creative-agency/cta_bg.jpeg"
        variant="cs_type_1"
      />

      <Spacing
        lg="135"
        md="70"
      />
      <Marquee text="EV Charging • Solar Energy • Battery Manufacturing • Clean Mobility • Energy Efficiency • Smart Infrastructure • Sustainability" />

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
