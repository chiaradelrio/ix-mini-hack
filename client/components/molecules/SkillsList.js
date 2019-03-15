import React from "react";
import styled from "styled-components";
import Mlogo from "../../assets/m_logo.png";
import { Logo } from "../atoms";

const SkillsListContainer = styled("div")`
  display: flex;
`;
const SkillsListContainerLeft = styled("div")`
  display: flex;
`;
const SkillsListContainerRight = styled("div")`
  display: flex;
  flex-direction: column;
  color: black;
`;

const SkillsList = () => (
  <SkillsListContainer>
    <SkillsListContainerLeft>
      <h2>Skills: </h2>
    </SkillsListContainerLeft>
    <SkillsListContainerRight>
      <ul>
        <li>Javascript</li>
        <li>React</li>
        <li>Node.Js</li>
        <li>Docker</li>
        <li>Being awesome</li>
      </ul>
    </SkillsListContainerRight>
  </SkillsListContainer>
);
export default SkillsList;
