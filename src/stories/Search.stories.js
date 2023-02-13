import React, { useState } from "react";
import Search from "components/Search";

export default {
  components: Search,
  title: "Components/Search",
};

function StoryBook({ ...args }) {
  const [value, setValue] = useState("");

  return <Search value={value} onChange={setValue} {...args} />;
}

export const Default = StoryBook.bind({});

Default.args = {
  placeholder: "Search",
};
