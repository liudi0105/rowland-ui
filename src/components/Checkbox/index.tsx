import { CheckSmall } from "@icon-park/react";
import styled from "styled-components";

const SLabelChecked = styled("label")<{ value: boolean }>`
  border: 1px solid ${(p) => (p.value ? p.theme.colors.link : "#aaa")};
  border-radius: 4px;
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: ${(props) =>
    props.value ? props.theme.colors.link : "#fff"};
  cursor: pointer;
`;

const SInput = styled("input")`
  display: none;
`;

export type CheckboxProps = {
  value: boolean;
  onChange: (value: boolean) => void;
};

export const Checkbox = (props: CheckboxProps) => {
  return (
    <SLabelChecked value={props.value}>
      {props.value && <CheckSmall theme="filled" size={16} strokeWidth={6} />}
      <SInput
        onChange={() => props.onChange(!props.value)}
        checked={props.value}
        type="checkbox"
      />
    </SLabelChecked>
  );
};
