import styled from "styled-components";
import Button from "components/Button";

export default {
  component: Button,
  title: "Button",
  btnType: "PRIMARY",
  states: "DEFAULT",
  size: "MEDIUM",
  fixedWidth: false,
  label: "Button",
};

function StoryBook({ ...args }) {
  return (
    <Container>
      <Button {...args} />
    </Container>
  );
}

export const Default = StoryBook.bind({});

Default.args = {
  btnType: "PRIMARY",
  states: "DEFAULT",
  size: "MEDIUM",
  fixedWidth: false,
  label: "Button",
};

export const Secondary = StoryBook.bind({});

Secondary.args = {
  btnType: "SECONDARY",
  states: "DEFAULT",
  size: "MEDIUM",
  fixedWidth: false,
  label: "Button",
};

const Container = styled.div``;
