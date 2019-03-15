import React from "react";
import styled from "styled-components";

const FormItemContainer = styled("div")`
  display: flex;
`;
const FormItemContainerLeft = styled("div")`
  display: flex;
`;
const FormItemContainerRight = styled("div")`
  color: black;
  display: flex;
  margin-left: 20px;
  flex-direction: column;
`;

const FormItem = ({ title, text }) => (
  <FormItemContainer>
    <FormItemContainerLeft>
      <h2>{title}</h2>
    </FormItemContainerLeft>
    <FormItemContainerRight>
      <h2>{text}</h2>
    </FormItemContainerRight>
  </FormItemContainer>
);
export default FormItem;
