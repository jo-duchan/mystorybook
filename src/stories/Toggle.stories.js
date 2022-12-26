import React, { useState } from "react";
import Toggle from "components/Toggle";

export default {
  component: Toggle,
  title: "Toggle",
};

function StoryBook({ ...args }) {
  const [checked, setChecked] = useState(false);
  const handleCheck = () => {
    setChecked(!checked);
  };
  return (
    <Toggle checked={checked} onClick={() => setChecked(!checked)} {...args} />
  );
}

export const Default = StoryBook.bind({});

Default.args = {
  size: "MEDIUM",
  checked: false,
};

Default.argTypes = {
  size: {
    defaultValue: "MEDIUM",
    options: ["SMALL", "MEDIUM", "LARGE"],
    control: "radio",
  },
};
