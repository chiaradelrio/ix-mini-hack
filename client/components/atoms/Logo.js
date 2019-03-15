import React from "react";
import styled from "styled-components";

const LogoContainer = styled("div")`
  width: 6rem;
  height: 6rem;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const Logo = ({ children }) => <LogoContainer>{children}</LogoContainer>;

export default Logo;
