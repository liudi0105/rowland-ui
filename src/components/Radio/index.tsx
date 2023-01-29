import { useState } from "react";
import styled from "styled-components";

const SInput = styled.input`
  display: none;
`;

const SLabel = styled.label<{ checked: boolean }>`
  display: flex;
  align-items: center;
  column-gap: 4px;
  color: #000;
`;

const SIndicator = styled.span<{ checked: boolean }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 6px solid ${(p) => p.theme.colors.link};
  cursor: pointer;
`;

export type RadioPropsType = RadioOptionsType & {
  onChange: (value: boolean) => void;
  checked: boolean;
};

export type RadioOptionsType = {
  value: string;
  label: string;
};

const Radio = (props: RadioPropsType) => {
  return (
    <SLabel checked={props.checked}>
      <SIndicator checked={props.checked} />
      <SInput
        onChange={() => props.onChange(!props.value)}
        checked={props.checked}
        type="radio"
      />
      {props.label}
    </SLabel>
  );
};

export type RadioGroupPropsType = {
  options: RadioOptionsType[];
};

const SRadioGroup = styled.div`
  display: flex;
  column-gap: 12px;
`;

export const RadioGroup = (props: RadioGroupPropsType) => {
  const [checkedValue, setCheckedValue] = useState<string>();

  return (
    <SRadioGroup>
      {props.options.map((v) => (
        <Radio
          {...v}
          checked={v.value === checkedValue}
          onChange={() => setCheckedValue(v.value)}
        />
      ))}
    </SRadioGroup>
  );
};
