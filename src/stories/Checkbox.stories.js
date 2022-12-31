import Checkbox from "components/Checkbox";

export default {
  components: Checkbox,
  title: "Checkbox",
};

function StoryBook({ ...args }) {
  return <Checkbox {...args} />;
}

export const Default = StoryBook.bind({});

Default.args = {
  label: "Label",
};
