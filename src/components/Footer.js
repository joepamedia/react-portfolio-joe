import React from "react";
// import { useUser } from "../../utils/UserContext";
import linkedIn from "../assets/images/linkedin-logo-vectors-and-clipart-for-free-download-symbol-trademark-sign-text-transparent-png-1975582.png";
export default function Footer() {
  return (
    <div>
      <footer className="footer">
        {/* footer card for all members */}
        <div class="footer-content">
          <h3>Contact Me!</h3>
          <p>Click on a platform to find me there! </p>
          <ul class="socials">
            <li>
              <a href="https://linkedin.com/in/joseph-palmisano-jnp" target="_blank">
                <i class="fa fa-linkedin-square"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/joepamedia" target="_blank">
                <i class="fa fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
