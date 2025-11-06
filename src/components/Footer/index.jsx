import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";
const addressDataList = [
  "Office 17, First Floor, Al Hameed Plaza, G-11 Markaz, Islamabad, Pakistan",
  "+92 51 8737 216 ",
  "hyperelectrify@gmail.com",
];
const serviceMenuList = [
  {
    title: "EV Charging Infrastructure",
    href: "/service/ev-charging-infrastructure",
  },
  {
    title: "Electric Mobility",
    href: "/service/electric-mobility",
  },
  {
    title: "Solar Panel Solutions",
    href: "/service/solar-energy",
  },
  {
    title: "Battery Manufacturing",
    href: "/service/battery-manufacturing",
  },
  {
    title: "Energy Efficiency Consultancy",
    href: "/service/energy-efficiency",
  },
];
const LinksMenuList = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Services",
    href: "/service",
  },
  {
    title: "Portfolio",
    href: "portfolio",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];
const policyMenuList = [
  {
    title: "Terms of Use",
    href: "/",
  },
  {
    title: "Privacy Policy",
    href: "/",
  },
];
const socialBtnList = [
  {
    icon: "fa6-brands:linkedin-in",
    href: "/",
  },
  {
    icon: "fa6-brands:twitter",
    href: "/",
  },
  {
    icon: "fa6-brands:youtube",
    href: "/",
  },
  {
    icon: "fa6-brands:facebook-f",
    href: "/",
  },
];
export default function Footer() {
  return (
    <footer
      className="cs_fooer cs_bg_filed"
      style={{ backgroundImage: "url(/images/footer_bg.jpeg)" }}
    >
      <div className="cs_fooer_main">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="cs_footer_item">
                <div className="cs_text_widget">
                  <img
                    style={{ width: "200px", height: "100px" }}
                    src="/images/logo.png"
                    alt="Logo"
                  />
                </div>
                <ul className="cs_menu_widget cs_mp0">
                  {addressDataList.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs_footer_item">
                <h2 className="cs_widget_title">Services</h2>
                <ul className="cs_menu_widget cs_mp0">
                  {serviceMenuList.map((item, index) => (
                    <li key={index}>
                      <Link to={item.href}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs_footer_item">
                <h2 className="cs_widget_title">Links</h2>
                <ul className="cs_menu_widget cs_mp0">
                  {LinksMenuList.map((item, index) => (
                    <li key={index}>
                      <Link to={item.href}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs_footer_item">
                <h2 className="cs_widget_title">Subscribe Newsletter </h2>
                <div className="cs_newsletter cs_style_1">
                  <div className="cs_newsletter_text">
                    We make sure to only send emails that are noteworthy and
                    pertinent to the recipient.
                  </div>
                  <form
                    action="#"
                    className="cs_newsletter_form"
                  >
                    <input
                      type="email"
                      className="cs_newsletter_input"
                      placeholder="Email address"
                    />
                    <button className="cs_btn cs_style_1">
                      Submit
                      <span>
                        <i>
                          <Icon icon="fa6-solid:arrow-right" />
                        </i>
                        <i>
                          <Icon icon="fa6-solid:arrow-right" />
                        </i>
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="cs_bottom_footer">
          <div className="cs_bottom_footer_left">
            <div className="cs_social_btns cs_style_1">
              {socialBtnList.map((item, index) => (
                <Link
                  to={item.href}
                  className="cs_center"
                  key={index}
                >
                  <Icon icon={item.icon} />
                </Link>
              ))}
            </div>
          </div>
          <div className="cs_copyright">Copyright © 2025 HEIPL.</div>
          <div className="cs_bottom_footer_right">
            <ul className="cs_footer_links cs_mp0">
              {policyMenuList.map((item, index) => (
                <li key={index}>
                  <Link to={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
