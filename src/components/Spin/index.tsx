import styled from "styled-components";
import { CommonProps } from "../Button";

const SSpin = styled("span")`
  display: flex;
  animation: spin 1s linear infinite;
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Spin = (props: CommonProps) => {
  return <SSpin>{props.children}</SSpin>;
};
