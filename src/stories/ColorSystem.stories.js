import React, { useCallback } from "react";
import styled from "styled-components";

// Style
import ColorSystem from "styles/color-system";
import { Heading, Text } from "styles/typography";

export default {
  title: "Core/Color System",
  parameters: {
    options: {
      showPanel: false,
    },
  },
};

function StoryBook() {
  const colors = Object.keys(ColorSystem);

  const drawItem = useCallback((x1, i) => {
    const result = [];
    const options = ColorSystem[x1];
    const keys = Object.keys(options);

    keys.forEach((x2, i) => {
      const key = keys[i];
      const value = options[key];

      result.push(
        <Item key={i}>
          <Chip bg={value} border={parseInt(key) < 400} />
          <Label>
            <Key>{`${x1} ${x2}`}</Key>
            <Hex>{value}</Hex>
          </Label>
        </Item>
      );
    });
    return result;
  }, []);

  return (
    <Container>
      {colors.map((x1, i) => (
        <ListWrapper>
          <ListLabel>{x1}</ListLabel>
          <List key={i}>{drawItem(x1, i)}</List>
        </ListWrapper>
      ))}
    </Container>
  );
}

export const Default = StoryBook.bind({});

Default.args = {};

const Container = styled.div`
  display: flex;
  gap: 70px;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const ListLabel = styled.h3`
  ${Heading.DefaultH2};
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 175px;
`;

const Chip = styled.div`
  width: 50px;
  min-width: 50px;
  height: 50px;
  border-radius: 6px;
  background: ${(props) => props.bg};
  border: ${(props) => props.border && "1px solid #E2E8F0"};
  box-sizing: border-box;
`;

const Label = styled.div`
  width: 110px;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Hex = styled.span`
  ${Text.Body200};
  color: ${ColorSystem.Neutral[600]};
`;

const Key = styled.span`
  ${Text.Body300};
  color: ${ColorSystem.Neutral[900]};
`;
