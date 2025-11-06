// import React from "react";
// import Spacing from "../Spacing";
// import SectionHeadingStyle3 from "../SectionHeading/SectionHeadingStyle3";
// import ServiceStyle2 from "../Service/ServiceStyle2";
// import SectionHeading from "../SectionHeading";
// import PricingTableList from "../PricingTable/PricingTableList";
// import CtaStyle2 from "../Cta/CtaStyle2";
// import { pageTitle } from "../../helpers/PageTitle";
// // thumbnailSrc: "/images/studio-agency/service_img_2.jpeg",

// const serviceData = [
//   {
//     number: "01",
//     title: "EV Charging Infrastructure",
//     subTitle:
//       "HEIPL designs, installs, and manages nationwide EV charging networks using smart hardware, cloud-based dashboards, and real-time performance monitoring systems — ensuring seamless electric mobility adoption across Pakistan.",
//     thumbnailSrc: "/images/services/service1.jpg",
//     href: "/service/ev-charging-infrastructure",
//   },
//   {
//     number: "02",
//     title: "Electric Mobility Solutions",
//     subTitle:
//       "From e-bikes and electric buses to fleet management and BMS integration, HEIPL accelerates the transition to clean, cost-efficient, and sustainable electric transportation solutions for both public and private sectors.",
//     thumbnailSrc: "/images/services/service2.jpg",

//     href: "/service/electric-mobility",
//   },
//   {
//     number: "03",
//     title: "Solar Energy Systems",
//     subTitle:
//       "Our solar initiatives include turnkey residential, commercial, and industrial installations, as well as local panel manufacturing in partnership with international renewable technology firms — building Pakistan’s self-sufficient clean energy base.",
//     thumbnailSrc: "/images/services/service3.jpg",

//     href: "/service/solar-energy",
//   },
//   {
//     number: "04",
//     title: "Battery Manufacturing & Storage",
//     subTitle:
//       "HEIPL collaborates with global energy leaders to establish local lithium-ion battery production and storage systems, enabling power independence for EV networks and renewable grids nationwide.",
//     thumbnailSrc: "/images/services/service4.jpg",

//     href: "/service/battery-manufacturing",
//   },
//   {
//     number: "05",
//     title: "Energy Efficiency Consultancy",
//     subTitle:
//       "As part of the National Energy Efficiency Program, HEIPL implements large-scale optimization projects, including Five-Star Rated appliances, industrial audits, and sustainable energy consumption strategies.",
//     thumbnailSrc: "/images/services/service5.jpg",

//     href: "/service/energy-efficiency",
//   },
// ];

// export default function ServicePage() {
//   pageTitle("Service");
//   return (
//     <>
//       <Spacing
//         lg="70"
//         md="70"
//       />
//       <Spacing
//         lg="140"
//         md="80"
//       />
//       <SectionHeadingStyle3
//         title="Driving Pakistan’s Transition to Clean Energy and Electric Mobility"
//         subTitle="Our Services"
//         shape="shape_2"
//       />

//       <Spacing
//         lg="75"
//         md="60"
//       />
//       <div className="container">
//         <ServiceStyle2 data={serviceData} />
//       </div>
//       <Spacing
//         lg="150"
//         md="80"
//       />

//       <div className="cs_height_140 cs_height_lg_70" />
//       <CtaStyle2
//         title="Is there a specific project or goal <br />that you have in mind?"
//         btnText="Send Message"
//         btnUrl="/contact"
//       />
//       <div className="cs_height_150 cs_height_lg_80" />
//     </>
//   );
// }

import React from "react";
import Spacing from "../Spacing";
import SectionHeadingStyle3 from "../SectionHeading/SectionHeadingStyle3";
import ServiceStyle2 from "../Service/ServiceStyle2";
import CtaStyle2 from "../Cta/CtaStyle2";
import { pageTitle } from "../../helpers/PageTitle";
import { serviceData } from "./serviceData";

export default function ServicePage() {
  pageTitle("Services");

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
        title="Driving Pakistan’s Transition to Clean Energy and Electric Mobility"
        subTitle="Our Services"
        shape="shape_2"
      />

      <Spacing
        lg="75"
        md="60"
      />

      <div className="container">
        <ServiceStyle2 data={serviceData} />
      </div>

      <Spacing
        lg="150"
        md="80"
      />

      <CtaStyle2
        title="Is there a specific project or goal <br />that you have in mind?"
        btnText="Send Message"
        btnUrl="/contact"
      />

      <div className="cs_height_150 cs_height_lg_80" />
    </>
  );
}
