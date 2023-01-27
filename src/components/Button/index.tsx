import { CSSProperties, ReactNode } from "react";
import styled from "styled-components";

const BasicButton = styled("button")<ButtonProps>`
  font-size: 1em;
  padding: ${(props) => (props.theme.compact ? "0.25em .5em" : "0.5em 1em")};
  border-radius: ${(props) => props.theme.borderRadius};
  border: 0;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const DefaultButton = styled(BasicButton)`
  background-color: #fff;
  color: #000;
  border: 1px solid #d9d9d9;
  &:hover {
    color: ${(props) => props.theme.colors.hover};
    border: 1px solid ${(props) => props.theme.colors.hover};
  }
  &:active {
    color: ${(props) => props.theme.colors.active};
  }
`;

const PrimaryButton = styled(BasicButton)<ButtonProps>`
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff;
  &:hover {
    background-color: ${(props) => props.theme.colors.hover};
  }
  &:active {
    background-color: ${(props) => props.theme.colors.active};
  }
`;

const LinkButton = styled(BasicButton)<ButtonProps>`
  background-color: rgba(0, 0, 0, 0);
  color: ${(props) => props.theme.colors.link};
  &:hover {
    color: ${(props) => props.theme.colors.hover};
  }
  &:active {
    color: ${(props) => props.theme.colors.active};
  }
`;

export interface CommonProps {
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
}

export type ButtonProps = CommonProps & {
  buttonStyle?: "primary" | "link" | "default";
};

export const Button = ({ buttonStyle, ...props }: ButtonProps) => {
  if (buttonStyle === "link") {
    return <LinkButton type="button" {...props} />;
  }
  if (buttonStyle === "primary") {
    return <PrimaryButton type="button" {...props} />;
  }
  return <DefaultButton type="button" {...props} />;
};
