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
  height:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .modal {
    background:#fff;
    padding: 2rem 3rem;
    box-shadow；-5px 14px 6px rgba(0, 0, 0, 0.5);
  }
`;
export default function Modal({ visible = false, closeModal }) {
  return visible ? (
    <Wrapper onClick={closeModal}>
      <div className="modal">modal content</div>
    </Wrapper>
  ) : null;
}
