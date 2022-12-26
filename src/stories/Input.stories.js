import Input from "components/Input";

export default {
  component: Input,
  title: "Input",
};

function StoryBook({ ...args }) {
  return <Input {...args} />;
}

export const Default = StoryBook.bind({});

Default.args = {
  states: "DEFAULT",
  width: "264px",
  label: undefined,
  placeholder: "Placeholder",
  errorText: "Error text",
};
