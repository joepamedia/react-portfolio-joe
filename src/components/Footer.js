import React from "react";
import Resume from "../assets/pdf/resume.pdf";

// import { useUser } from "../../utils/UserContext";
export default function Footer() {
  return (
    <div>
      <footer className="footer">
        {/* footer card for all members */}
        <div className="footer-content">
          <h3>Contact Me!</h3>
          <p>Click on a platform to find me there! Or click on the paperclip to view my resume!</p>
          <ul className="socials">
            <li>
              <a href="https://linkedin.com/in/joseph-palmisano-jnp" target="_blank">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/joepamedia" target="_blank">
                <i className="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a href={Resume} target="_blank">
                <i className="fa fa-paperclip"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
