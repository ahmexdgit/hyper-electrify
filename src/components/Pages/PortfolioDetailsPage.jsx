import React from "react";
import { useParams, Link } from "react-router-dom";
import Spacing from "../Spacing";
import SectionHeadingStyle3 from "../SectionHeading/SectionHeadingStyle3";
import { Icon } from "@iconify/react";
import { pageTitle } from "../../helpers/PageTitle";
import { portfolioData } from "../../../public/data/portfolioData";

export default function PortfolioDetailsPage() {
  const { portfolioDetailsId } = useParams();
  const project = portfolioData.find((item) => item.id === portfolioDetailsId);

  if (!project) {
    return (
      <div className="container text-center py-100">
        <h2>Project Not Found</h2>
        <Link
          to="/portfolio"
          className="btn btn-primary mt-3"
        >
          Back to Portfolio
        </Link>
      </div>
    );
  }

  pageTitle(project.title);

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
        title={project.title}
        subTitle={project.subTitle}
      />
      <Spacing
        lg="75"
        md="60"
      />

      <div className="container">
        <div className="cs_portfolio_details">
          <img
            src={project.imgUrl}
            alt={project.title}
          />
          <Spacing
            lg="100"
            md="40"
          />

          <div className="cs_portfolio_details_in">
            <ul className="cs_portfolio_details_info cs_mp0">
              <li>
                <h3 className="cs_fs_21 mb-0 cs_semibold">Client:</h3>
                <p className="mb-0">{project.client}</p>
              </li>
              <li>
                <h3 className="cs_fs_21 mb-0 cs_semibold">Location:</h3>
                <p className="mb-0">{project.location}</p>
              </li>
              <li>
                <h3 className="cs_fs_21 mb-0 cs_semibold">Budget:</h3>
                <p className="mb-0">{project.budget}</p>
              </li>
              <li>
                <h3 className="cs_fs_21 mb-0 cs_semibold">
                  Project Completed:
                </h3>
                <p className="mb-0">{project.date}</p>
              </li>
            </ul>

            <div className="cs_portfolio_details_right">
              <h2>Project Summary</h2>
              <p>{project.summary}</p>
              <h2>Detailed Overview</h2>
              <p>{project.description}</p>
            </div>
          </div>

          <Spacing
            lg="115"
            md="60"
          />
          {project.gallery && (
            <div className="cs_portfolio_details_gallery">
              {project.gallery.map((img, idx) => (
                <div key={idx}>
                  <img
                    src={img}
                    alt={`Gallery ${idx}`}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <Spacing
          lg="90"
          md="60"
        />
        <div className="cs_page_navigation cs_center">
          <div>
            <Link
              to="/portfolio"
              className="cs_text_btn cs_type1"
            >
              <Icon
                icon="cil:arrow-left"
                className="cs_fs_21"
              />
              <span>Back to Portfolio</span>
            </Link>
          </div>
        </div>
      </div>

      <Spacing
        lg="150"
        md="80"
      />
    </>
  );
}
