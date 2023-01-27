import styled from "styled-components";
import { CommonProps } from "../Button";

const SSpace = styled("div")<SpaceProps>`
  display: flex;
  align-items: flex-start;
  flex-direction: ${(props) =>
    props.direction === "vertical" ? "column" : "row"};
  gap: ${(props) => {
    const compact = props.theme.compact;
    if (compact || props.size === "small") {
      return "8px";
    }

    return "12px";
  }};
`;

export type SpaceProps = CommonProps & {
  direction?: "horizontal" | "vertical";
  size?: "large" | "small" | "medium";
};

export const Space = ({
  size = "medium",
  direction = "horizontal",
  ...props
}: SpaceProps) => {
  return (
    <SSpace size={size} direction={direction}>
      {props.children}
    </SSpace>
  );
};
