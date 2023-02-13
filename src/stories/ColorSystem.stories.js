import React, { useCallback } from "react";
import styled from "styled-components";

// Style
import ColorSystem from "styles/color-system";
import { Text } from "styles/typography";

export default {
  title: "Core/Color System",
};

function StoryBook() {
  const colors = Object.keys(ColorSystem);
  const drawItem = useCallback((x, i) => {
    const result = [];
    const options = ColorSystem[x];
    const keys = Object.keys(options);

    keys.forEach((x, i) => {
      const key = keys[i];
      const value = options[key];

      result.push(<Item key={i}>{`${value} ${key}`}</Item>);
    });
    return result;
  }, []);
  return (
    <Container>
      {colors.map((x, i) => (
        <List key={i}>{drawItem(x, i)}</List>
      ))}
    </Container>
  );
}

export const Default = StoryBook.bind({});

Default.args = {};

const Container = styled.div``;

const List = styled.div``;

const Item = styled.div``;
