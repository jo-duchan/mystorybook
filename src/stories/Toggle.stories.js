import React, { useState } from "react";
import Toggle from "components/Toggle";

export default {
  component: Toggle,
  title: "Components/Toggle",
};

function StoryBook({ onClick, ...args }) {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };
  return <Toggle checked={checked} onClick={() => handleCheck()} {...args} />;
}

export const Default = StoryBook.bind({});

Default.args = {
  size: "MEDIUM",
};

Default.argTypes = {
  size: {
    defaultValue: "MEDIUM",
    options: ["SMALL", "MEDIUM", "LARGE"],
    control: "radio",
  },
};
