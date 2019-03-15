import React from "react";
import styled from "styled-components";

const BadgeCircle = styled("div")`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: ${props => props.theme.colours.accent};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Badge = ({ number }) => (
  <BadgeCircle>
    <h2>{number}</h2>
  </BadgeCircle>
);

export default Badge;
