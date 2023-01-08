import Button from "components/Button";

export default {
  component: Button,
  title: "Button",
};

function StoryBook({ ...args }) {
  return <Button {...args} />;
}

export const Default = StoryBook.bind({});

Default.args = {
  btnType: "PRIMARY",
  size: "MEDIUM",
  fixedWidth: false,
  label: "Button",
};

Default.argTypes = {
  size: {
    defaultValue: "MEDIUM",
    options: ["XSMALL", "SMALL", "MEDIUM", "LARGE", "XLARGE"],
    control: "radio",
  },
  states: {
    defaultValue: "DEFAULT",
    options: ["DEFAULT", "FOCUSED", "LOADING", "DISABLED"],
    control: "radio",
  },
};
