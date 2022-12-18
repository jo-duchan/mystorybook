import { GlobalStyle } from "styles/common";

export const useTheme = (StoryFn) => {
  return (
    <>
      <GlobalStyle />
      <StoryFn />
    </>
  );
};
