import Input from "components/Input";

export default {
  component: Input,
  title: "Components/Input",
};

function StoryBook({ ...args }) {
  return <Input {...args} />;
}

export const Default = StoryBook.bind({});

Default.args = {
  states: "DEFAULT",
  width: "264px",
  label: "Label",
  placeholder: "Placeholder",
  errorText: "Error text",
};

Default.argTypes = {
  states: {
    defaultValue: "DEFAULT",
    options: ["DEFAULT", "FOCUSED", "DISABLED", "ERROR", "ERROR_FOCUSED"],
    control: "radio",
  },
};
