import { HTMLAttributes, ReactPropTypes } from "react";
import styled from "styled-components";

const SButton = styled.button``;

export const Button = (props: HTMLAttributes<any>) => {
  return <SButton {...props} />;
};
