import React from "react";
// import { useUser } from "../../utils/UserContext";
import linkedIn from "../assets/images/linkedin-graphic-design-word-text-label-logo-transparent-png-1099496.png";
export default function Footer() {
  return (
    <div>
      <footer className="footer">
        {/* footer card for all members */}
        <div class="footer-content">
          <h3>Contact Me!</h3>
          <ul class="socials">
            <li>
              <a href="https://linkedin.com/in/joseph-palmisano-jnp" target="_blank">
                <img src={linkedIn} alt="linkedin-logo" class="img-sm" />
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

{
  /* <a href="https://linkedin.com/in/joseph-palmisano-jnp" target="_blank">
                <img src="./assets/images/linkedin-black-icon-logo-ECC426C572-seeklogo.com.png" alt="linkedin-logo" class="img-sm" />
              </a>
              <a href="https://github.com/joepamedia" target="_blank">
                <img src="./assets/images/Github25231.png" class="img-sm" />
              </a> */
}
