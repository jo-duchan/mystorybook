import React, { useState } from "react";
import styled from "styled-components";
import Slider from "components/Slider";

// Style
import ColorSystem from "styles/color-system";
import { Text } from "styles/typography";

export default {
  components: Slider,
  title: "Slider",
};

function StoryBook({ setValue, ...args }) {
  const [percent, setPercent] = useState(0);

  return (
    <Container>
      <Label>Value: {percent} %</Label>
      <Slider setValue={setPercent} {...args} />
    </Container>
  );
}

export const Default = StoryBook.bind({});

Default.args = {};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Label = styled.span`
  ${Text.Body500};
  color: ${ColorSystem.Neutral[800]};
`;
