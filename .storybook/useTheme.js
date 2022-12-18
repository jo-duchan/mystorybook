import { createGlobalStyle, css } from "styled-components";

export const useTheme = (StoryFn) => {
  const GlobalStyle = createGlobalStyle`
    `;

  return (
    <>
      <GlobalStyle />
      <StoryFn />
    </>
  );
};
