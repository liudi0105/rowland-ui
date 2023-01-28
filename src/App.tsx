import { ClockCircleFilled } from "@ant-design/icons";
import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Checkbox } from "./components/Checkbox";
import { Collapse } from "./components/Collapse";
import { Radio } from "./components/Radio";
import { Space } from "./components/Space";
import { Spin } from "./components/Spin";
import { Switch } from "./components/Switch";

function App() {
  const [count, setCount] = useState(0);

  const [switchOpen, setSwitchOpen] = useState(false);
  const [checked, setChecked] = useState(true);
  const [radioChecked, setRadioChecked] = useState(true);

  return (
    <Space direction="vertical" size="large">
      <Radio
        label="A"
        onChange={(c) => setRadioChecked(c)}
        value={radioChecked}
      />
      <span style={{ color: "#000" }}>
        <Spin>
          <ClockCircleFilled />
        </Spin>
      </span>
      <Checkbox onChange={(c) => setChecked(c)} checked={checked} />
      <Switch value={switchOpen} onChange={(value) => setSwitchOpen(value)} />
      <Button buttonStyle="primary">Primary Button</Button>
      <Button buttonStyle="default">Default Button</Button>
      <Button buttonStyle="primary">Primary Button</Button>
    </Space>
  );
}

export default App;
