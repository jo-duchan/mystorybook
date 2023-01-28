import React from "react";
import styled from "styled-components";

// Style
import { LayoutCenter } from "styles/common";

// Type
import { IconType } from "type/icon-type";

interface Props {
  type: IconType;
}

function IconSet({ type }: Props) {
  switch (type) {
    case "PROGRESS": {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 4.80002C8.02354 4.80002 4.79999 8.02357 4.79999 12C4.79999 15.9765 8.02354 19.2 12 19.2C12.6627 19.2 13.2 19.7373 13.2 20.4C13.2 21.0628 12.6627 21.6 12 21.6C6.69806 21.6 2.39999 17.302 2.39999 12C2.39999 6.69809 6.69806 2.40002 12 2.40002C17.3019 2.40002 21.6 6.69809 21.6 12C21.6 12.6628 21.0627 13.2 20.4 13.2C19.7373 13.2 19.2 12.6628 19.2 12C19.2 8.02357 15.9764 4.80002 12 4.80002Z"
            fill="white"
          />
        </svg>
      );
    }
    case "ERROR": {
      return (
        <svg
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 0.75C3.11719 0.75 0 3.89453 0 7.75C0 11.6328 3.11719 14.75 7 14.75C10.8555 14.75 14 11.6328 14 7.75C14 3.89453 10.8555 0.75 7 0.75ZM6.34375 4.90625C6.34375 4.55078 6.61719 4.25 7 4.25C7.35547 4.25 7.65625 4.55078 7.65625 4.90625V8.40625C7.65625 8.78906 7.35547 9.0625 7 9.0625C6.61719 9.0625 6.34375 8.78906 6.34375 8.40625V4.90625ZM7 11.6875C6.50781 11.6875 6.125 11.3047 6.125 10.8398C6.125 10.375 6.50781 9.99219 7 9.99219C7.46484 9.99219 7.84766 10.375 7.84766 10.8398C7.84766 11.3047 7.46484 11.6875 7 11.6875Z"
            fill="#DD6B20"
          />
        </svg>
      );
    }
    case "SEARCH": {
      return (
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.75 14.7188L11.5625 10.5312C12.4688 9.4375 12.9688 8.03125 12.9688 6.5C12.9688 2.9375 10.0312 0 6.46875 0C2.875 0 0 2.9375 0 6.5C0 10.0938 2.90625 13 6.46875 13C7.96875 13 9.375 12.5 10.5 11.5938L14.6875 15.7812C14.8438 15.9375 15.0312 16 15.25 16C15.4375 16 15.625 15.9375 15.75 15.7812C16.0625 15.5 16.0625 15.0312 15.75 14.7188ZM1.5 6.5C1.5 3.75 3.71875 1.5 6.5 1.5C9.25 1.5 11.5 3.75 11.5 6.5C11.5 9.28125 9.25 11.5 6.5 11.5C3.71875 11.5 1.5 9.28125 1.5 6.5Z"
            fill="#68778D"
          />
        </svg>
      );
    }
    case "CLOSE": {
      return (
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.75 9.71875C11.0312 10.0312 11.0312 10.5 10.75 10.7812C10.4375 11.0938 9.96875 11.0938 9.6875 10.7812L6 7.0625L2.28125 10.7812C1.96875 11.0938 1.5 11.0938 1.21875 10.7812C0.90625 10.5 0.90625 10.0312 1.21875 9.71875L4.9375 6L1.21875 2.28125C0.90625 1.96875 0.90625 1.5 1.21875 1.21875C1.5 0.90625 1.96875 0.90625 2.25 1.21875L6 4.96875L9.71875 1.25C10 0.9375 10.4688 0.9375 10.75 1.25C11.0625 1.53125 11.0625 2 10.75 2.3125L7.03125 6L10.75 9.71875Z"
            fill="#68778D"
          />
        </svg>
      );
    }
    case "CHEVRON-DOWN": {
      return (
        <ChevronDown>
          <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.6875 1.49219L6.46484 6.49609C6.30078 6.63281 6.13672 6.6875 6 6.6875C5.83594 6.6875 5.67188 6.63281 5.53516 6.52344L0.285156 1.49219C0.0117188 1.24609 0.0117188 0.808594 0.257812 0.5625C0.503906 0.289062 0.941406 0.289062 1.1875 0.535156L6 5.12891L10.7852 0.535156C11.0312 0.289062 11.4688 0.289062 11.7148 0.5625C11.9609 0.808594 11.9609 1.24609 11.6875 1.49219Z"
              fill="#68778D"
            />
          </svg>
        </ChevronDown>
      );
    }
    default: {
      return <></>;
    }
  }
}

export default React.memo(IconSet);

const ChevronDown = styled.div`
  ${LayoutCenter};
  width: 20px;
  height: 20px;
`;
