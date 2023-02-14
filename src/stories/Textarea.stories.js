import Textarea from "components/Textarea";

export default {
  components: Textarea,
  title: "Components/Textarea",
};

function StoryBook({ ...args }) {
  return <Textarea {...args} />;
}

export const Default = StoryBook.bind({});

Default.args = {
  states: "DEFAULT",
  size: "MEDIUM",
  label: "Label",
  placeholder: "Placeholder",
  errorText: "Error text",
};

Default.argTypes = {
  states: {
    options: ["DEFAULT", "DISABLED", "ERROR"],
    control: "radio",
  },
  size: {
    options: ["SMALL", "MEDIUM", "LARGE"],
    control: "radio",
  },
};
