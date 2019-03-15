import React from "react";
import styled from "styled-components";
import Mlogo from "../../assets/m_logo.png";
import { Logo } from "../atoms";

const ProjectCardContainer = styled("div")`
  border-radius: 1rem;
  height: 10rem;
  background-color: ${props => props.theme.colours.primary};
  box-shadow: 1px 3px 12px 0px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 23rem;
`;
const ProjectCardLeft = styled("div")`
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ProjectCardRight = styled("div")`
  width: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: white;
`;

const ProjectCard = ({ name, status, rolesAvailable }) => (
  <ProjectCardContainer>
    <ProjectCardLeft>
      <Logo>
        <img src={Mlogo} />
      </Logo>
    </ProjectCardLeft>
    <ProjectCardRight>
      <h2>Name</h2>
      <h3>Status</h3>
    </ProjectCardRight>
  </ProjectCardContainer>
);
export default ProjectCard;
