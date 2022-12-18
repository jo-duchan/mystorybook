import styled from "styled-components";
import Button from "components/Button";

export default {
  component: Button,
  title: "Button",
};

function StoryBook({ ...args }) {
  return (
    <Container>
      <Button {...args} />
    </Container>
  );
}

export const Default = StoryBook.bind({});

Default.args = {};

const Container = styled.div``;
