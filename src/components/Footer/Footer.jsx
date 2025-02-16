import React from "react";
import FooterCSS from "./Footer.module.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <>
      <div
        className={`container-fluid bg-dark text-light py-4 {FooterCSS["footer_outer_container"]}`}
      >
        <div className={`container {FooterCSS.footer_inner_container}`}>
          <div className={FooterCSS["footer_icons"]}>
            <FacebookOutlinedIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
          <div
            className={`row text-center text-md-start {FooterCSS["footer_data"]}`}
          >
            <div className="col-sm-12 col-md-6 col-lg-3">
              <ul className="list-unstyled">
                <li>Audio Description</li>
                <li>Investor Relations</li>
                <li>Legal Notice</li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <ul className="list-unstyled">
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Cookie Preferences</li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <ul className="list-unstyled">
                <li>Gift Cards</li>
                <li>Terms of Use</li>
                <li>Corporate Information</li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <ul className="list-unstyled">
                <li>Media Center</li>
                <li>Privacy</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div
            className={`text-md-start text-sm-center my-3 {FooterCSS.service_code}`}
          >
            <p className="border border-light d-inline-block px-3 py-1">
              Service Code
            </p>
          </div>
          <div
            className={`text-md-start text-sm-center {FooterCSS.copy_write}`}
          >
            <p className="mb-0">&copy; 1997-2024 Netflix, Inc.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
