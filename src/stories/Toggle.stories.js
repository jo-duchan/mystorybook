import React, { useEffect, useState } from "react";
import { action } from "@storybook/addon-actions";
import Toggle from "components/Toggle";

export default {
  component: Toggle,
  title: "Toggle",
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
