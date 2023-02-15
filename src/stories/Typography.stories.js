import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

// Style
import ColorSystem from "styles/color-system";
import {
  Heading,
  Text,
  Underlined,
  Uppercase,
  Mono,
  Marketing,
} from "styles/typography";

export default {
  title: "Core/Typography",
  parameters: {
    options: {
      showPanel: false,
    },
  },
};

function StoryBook() {
  const TextArray = [
    ["Heading", Heading, 3],
    ["Text", Text, 9],
    ["Underlined", Underlined, 8],
    ["Uppercase", Uppercase, 8],
    ["Mono", Mono, 8],
    ["Marketing", Marketing, 14],
  ];
  const division = useCallback((arr, n) => {
    const nArr = Object.keys(arr);
    const len = nArr.length;
    const cnt = Math.floor(len / n) + (Math.floor(len % n) > 0 ? 1 : 0);
    const tmp = [];

    for (let i = 0; i < cnt; i++) {
      tmp.push(nArr.splice(0, n));
    }
    return tmp;
  }, []);
  return (
    <Container>
      {TextArray.map((cnt, idx) => (
        <ContentWrapper key={idx}>
          <Title>{cnt[0]}</Title>
          <List>
            {division(cnt[1], cnt[2]).map((x1, i1) => (
              <Item key={i1}>
                {x1.map((x2, i2) => (
                  <ItemChild key={i2} txt={cnt[1][x2]}>
                    {x2}
                  </ItemChild>
                ))}
              </Item>
            ))}
          </List>
        </ContentWrapper>
      ))}
    </Container>
  );
}

export const Default = StoryBook.bind({});

Default.args = {};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  padding-bottom: 50px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Title = styled.h3`
  ${Text.Body600};
  color: ${ColorSystem.Secondary[600]};
`;

const List = styled.div`
  display: flex;
  gap: 100px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ItemChild = styled.div`
  ${(props) => props.txt};
`;
