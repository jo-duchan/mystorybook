import React, { useState } from "react";
import styled from "styled-components";
import Button from "components/Button";
import ModalHeader from "components/ModalHeader";

export default {
  components: ModalHeader,
  title: "ModalHeader",
};

function StoryBook({ modal, setModal, ...args }) {
  const [isModal, setIsModal] = useState(false);
  return (
    <Container>
      <ModalHeader modal={isModal} setModal={setIsModal} {...args} />
      <Button
        label="Modal"
        btnType="SECONDARY"
        size="MEDIUM"
        onClick={() => setIsModal(true)}
      />
    </Container>
  );
}

export const Default = StoryBook.bind({});

Default.args = {
  status: "DEFAULT",
  eyebrow: "",
  title: "Title",
  subTitle: "",
  iconType: "SEARCH",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

Default.argTypes = {
  status: {
    defaultValue: "DEFAULT",
    options: ["DEFAULT", "ICON", "SUCCESS", "ERROR", "PROGRESS"],
    control: "radio",
  },
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
