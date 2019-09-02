import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  height: 20vh;
  background: rgba(22, 22, 22, 0.2);
  color: #fff;
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: none;
  &.visible {
    display: flex;
  }
  .modal {
    transform: translateY(-2rem);
    transition: all 0.5s;
    color: #333;
    background: #fff;
    padding: 2rem 3rem;
    box-shadow: -5px 14px 6px rgba(0, 0, 0, 0.5);
  }
`;
export default function Modal({ visible = false, closeModal }) {
  const handleContentClick = evt => {
    evt.stopPropagation();
  };
  return (
    <Wrapper className={visible ? 'visible' : null} onClick={closeModal}>
      <div onClick={handleContentClick} className="modal">
        modal content
      </div>
    </Wrapper>
  );
}
