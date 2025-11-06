import React from "react";
import { useParams, Link } from "react-router-dom";
import Spacing from "../Spacing";
import SectionHeadingStyle3 from "../SectionHeading/SectionHeadingStyle3";
import AboutStyle6 from "../About/AboutStyle6";
import CtaStyle2 from "../Cta/CtaStyle2";
import CardStyle3 from "../Card/CardStyle3";
import { pageTitle } from "../../helpers/PageTitle";
import { serviceData } from "./serviceData";

export default function ServiceDetailsPage() {
  const { slug } = useParams();
  pageTitle("Service Details");

  const service = serviceData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="container text-center py-5">
        <h2>Service Not Found</h2>
        <p>The service you’re looking for doesn’t exist.</p>
        <Link
          to="/service"
          className="cs_btn cs_style_1 mt-3"
        >
          Back to Services
        </Link>
      </div>
    );
  }

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
        title={service.title}
        subTitle={`Service ${service.number}`}
        shape="shape_3"
      />

      <Spacing
        lg="75"
        md="60"
      />

      <div className="cs_service_info">
        <div className="container">
          <div className="row align-items-center cs_gap_y_40">
            <div className="col-lg-6">
              <div
                className="cs_service_info_thumb cs_bg_filed"
                style={{
                  backgroundImage: `url(${service.thumbnailSrc})`,
                }}
              />
            </div>
            <div className="col-lg-6">
              <p className="cs_service_details_text">{service.description}</p>

              <div className="row cs_gap_y_40 mt-4">
                {service.features.slice(0, 4).map((feature, index) => (
                  <div
                    className="col-sm-6"
                    key={index}
                  >
                    <CardStyle3
                      number={`0${index + 1}`}
                      title={feature}
                      subTitle="Built with international safety, efficiency, and sustainability standards in mind."
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Spacing
        lg="150"
        md="80"
      />

      <AboutStyle6
        thumbnailSrc={service.thumbnailSrc}
        title={`What You’ll Gain from ${service.title}`}
        subTitle={service.subTitle}
        featureList={service.features}
        btnText="View Related Projects"
        btnUrl="/portfolio"
      />

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
