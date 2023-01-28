import styled from "styled-components";

export type SwitchProps = {
  value: boolean;
  onChange: (value: boolean) => void;
};

const SSwitch = styled.div<{ open: boolean }>`
  height: 24px;
  background-color: ${(props) =>
    props.open ? props.theme.colors.primary : "#8888"};
  border-radius: 24px;
  cursor: pointer;
`;

const SIdicator = styled.span`
  box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2);
  display: inline-block;
  background-color: #fff;
  height: 20px;
  width: 20px;
  border-radius: 10px;
`;

const SLabel = styled.span`
  display: inline-block;
  height: 20px;
  margin: 0 8px;
  line-height: 20px;
  color: #fff;
`;

const SLabelBox = styled.div<{ open: boolean }>`
  float: ${(props) => (props.open ? "right" : "left")};
  transition: all 0.5s;
  height: 24px;
  margin: 0px 2px;
  display: flex;
  align-items: center;
`;

export const Switch = ({ value: open, onChange }: SwitchProps) => {
  return (
    <SSwitch open={open} onClick={() => onChange && onChange(!open)}>
      <SLabelBox open={open}>
        {open && <SLabel>哈哈哈哈哈哈哈哈哈</SLabel>}
        <SIdicator></SIdicator>
        {!open && <SLabel>关</SLabel>}
      </SLabelBox>
    </SSwitch>
  );
};
