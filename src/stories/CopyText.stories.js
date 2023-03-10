import CopyText from "components/CopyText";

export default {
  component: CopyText,
  title: "Components/CopyText",
};

function StoryBook({ ...args }) {
  return <CopyText {...args} />;
}

export const Default = StoryBook.bind({});

Default.args = {
  width: "264",
  label: "Label",
  helpText: "Help Text",
};
