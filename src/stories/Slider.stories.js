import Slider from "components/Slider";

export default {
  components: Slider,
  title: "Slider",
};

function StoryBook({ ...args }) {
  return <Slider {...args} />;
}

export const Default = StoryBook.bind({});

Default.args = {};
