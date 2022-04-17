import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import styled from "styled-components";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Button>
      <FaArrowCircleUp onClick={scrollToTop} />
    </Button>
  );
};

export default ScrollButton;

const Button = styled.div`
  position: fixed;
  width: 100%;
  right: 30px;
  bottom: 60px;
  text-align: right;
  height: 20px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  color: orange;
`;
