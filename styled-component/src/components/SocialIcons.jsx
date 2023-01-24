import React from "react";
import { FaTwitter, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { StyledSocialIcons } from "./styled/SocialIcons.styled";

const SocialIcons = () => {
  return (
    <StyledSocialIcons>
      <ul>
        <li>
          <a href="https://twitter.com">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://facebook.com">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com">
            <FaLinkedinIn />
          </a>
        </li>
      </ul>
    </StyledSocialIcons>
  );
};

export default SocialIcons;
