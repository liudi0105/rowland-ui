import { CheckSmall } from "@icon-park/react";
import styled from "styled-components";

const SLabelChecked = styled.label<{ checked: boolean }>`
  border: 1px solid ${(p) => (p.checked ? p.theme.colors.link : "#aaa")};
  border-radius: 4px;
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: ${(props) =>
    props.checked ? props.theme.colors.link : "#fff"};
  cursor: pointer;
`;

const SInput = styled.input`
  display: none;
`;

export type CheckboxProps = {
  checked: boolean;
  onChange: (value: boolean) => void;
};

export const Checkbox = (props: CheckboxProps) => {
  return (
    <SLabelChecked checked={props.checked}>
      {props.checked && <CheckSmall size={16} strokeWidth={6} />}
      <SInput
        onChange={() => props.onChange(!props.checked)}
        checked={props.checked}
        type="checkbox"
      />
    </SLabelChecked>
  );
};
