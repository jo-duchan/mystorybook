import Select from "components/Select";

export default {
  component: Select,
  title: "Select",
};

function StoryBook({ option, onChange, ...args }) {
  const handleSelect = (value) => {
    console.log(`Select Value는 : ${value}`);
  };
  return <Select option={[0, 1, 2, 3]} onChange={handleSelect} {...args} />;
}

export const Default = StoryBook.bind({});

Default.args = {
  width: 264,
  states: "DEFAULT",
  label: "Label",
  placeholder: "Placeholder",
  helpText: "Help Text",
  errorText: "Error Text",
};
