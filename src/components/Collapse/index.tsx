import { ReactNode, useState } from "react";
import styled from "styled-components";
import { CommonProps } from "../Button";

export type CollapseProps = CommonProps & {
  panels: Array<PanelProps>;
  defaultOpenKeys: string[];
};

export type PanelProps = {
  key: string;
  header: string;
  body: ReactNode;
};

const SCollapse = styled("div")``;

const SPanel = styled("div")``;

const SPanelHeader = styled("div")`
  border-radius: ${(props) =>
    `${props.theme.borderRadius} ${props.theme.borderRadius} 0 0`};
  border: 1px solid #d9d9d9;
  background-color: rgba(0, 0, 0, 0.02);
  color: #000;
  padding: 8px;
  text-align: start;
  cursor: pointer;
`;

const SPanelBody = styled("div")<{ open: boolean }>`
  max-height: ${(props) => (props.open ? "200px" : "0")};
  transition: 0.3s all ease-in-out, 0.3s padding-top ease-in-out,
    0.3s padding-bottom ease-in-out;
  overflow: hidden;
  padding: ${(props) => (props.open ? "8px" : "0 8px")};
  border: 1px solid #d9d9d9;
  border-top: 0;
  border-bottom: ${(props) => (props.open ? "1px solid #d9d9d9" : "0")};
  border-radius: ${(props) =>
    `0 0 ${props.theme.borderRadius} ${props.theme.borderRadius}`};
`;

const Panel = ({
  header,
  body,
  open = false,
}: PanelProps & { open: boolean }) => {
  const [panelOpen, setPanelOpen] = useState(open);

  return (
    <SPanel>
      <SPanelHeader onClick={() => setPanelOpen(!panelOpen)}>
        {panelOpen ? "+" : "-"}
        {header}
      </SPanelHeader>
      <SPanelBody open={panelOpen}>{body}</SPanelBody>
    </SPanel>
  );
};

export const Collapse = ({ panels, defaultOpenKeys }: CollapseProps) => {
  return (
    <SCollapse>
      {panels.map((props) => (
        <Panel open={defaultOpenKeys.includes(props.key)} {...props} />
      ))}
    </SCollapse>
  );
};
