import styled from "styled-components";

const SInput = styled("input")`
  display: none;
`;

const SLabel = styled("label")<{ value: boolean }>`
  display: flex;
  align-items: center;
  column-gap: 8px;
  color: #000;
`;

const SIndicator = styled("span")<{ value: boolean }>`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  border: 6px solid ${(p) => p.theme.colors.link};
  cursor: pointer;
`;

export type RadioProps = {
  value: boolean;
  label: string;
  onChange: (value: boolean) => void;
};

export type RadioOptions = {};

export const Radio = (props: RadioProps) => {
  return (
    <SLabel value={props.value}>
      <SIndicator value={props.value} />
      <SInput
        onChange={() => props.onChange(!props.value)}
        checked={props.value}
        type="radio"
      />
      {props.label}
    </SLabel>
  );
};
