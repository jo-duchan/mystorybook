import Chip from "components/Chip";

export default {
  component: Chip,
  title: "Chip",
};

function StoryBook({ ...args }) {
  return <Chip {...args} />;
}

export const Default = StoryBook.bind({});

Default.args = {
  emoji: "🤣",
  icon: undefined,
  text: "Text",
  size: "MEDIUM",
};
