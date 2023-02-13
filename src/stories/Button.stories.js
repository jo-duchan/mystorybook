import React, { useState } from "react";
import styled from "styled-components";
import Button from "components/Button";

// Style
import ColorSystem from "styles/color-system";
import { Text } from "styles/typography";

export default {
  component: Button,
  title: "Components/Button",
};

function StoryBook({ onClick, ...args }) {
  const [count, setCount] = useState(0);

  const handleClick = (ev) => {
    ev.preventDefault();
    setCount((current) => (current = current + 1));
  };

  return (
    <Container>
      <Label>Count: {count}</Label>
      <Button onClick={handleClick} {...args} />
    </Container>
  );
}

export const Default = StoryBook.bind({});

Default.args = {
  btnType: "PRIMARY",
  size: "MEDIUM",
  fixedWidth: false,
  label: "Button",
};

Default.argTypes = {
  size: {
    defaultValue: "MEDIUM",
    options: ["XSMALL", "SMALL", "MEDIUM", "LARGE", "XLARGE"],
    control: "radio",
  },
  states: {
    defaultValue: "DEFAULT",
    options: ["DEFAULT", "FOCUSED", "LOADING", "DISABLED"],
    control: "radio",
  },
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Label = styled.span`
  ${Text.Body500};
  color: ${ColorSystem.Neutral[800]};
`;
