import React, { useState } from "react";
import PillTab from "components/PillTab";

export default {
  components: PillTab,
  title: "Components/PillTab",
};

function StoryBook({ content, setContent, ...args }) {
  const [item, setItem] = useState([
    { label: "Label01", value: true },
    { label: "Label02", value: false },
    { label: "Label03", value: false },
    { label: "Label04", value: false },
  ]);

  return <PillTab content={item} setContent={setItem} {...args} />;
}

export const Default = StoryBook.bind({});

Default.args = {};
