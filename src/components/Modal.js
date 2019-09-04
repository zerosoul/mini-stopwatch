import React from 'react';
import styled from 'styled-components';
import Icon from '../assets/img/icon.png';
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
    display: flex;
    flex-direction: column;
    align-items: center;
    .logo {
      width: 6rem;
      margin-bottom: 0.4rem;
    }
    > h2 {
      font-weight: 800;
      font-size: 1.8rem;
      margin-bottom: 2rem;
      border-bottom: 1px solid #3333333b;
      padding-bottom: 1rem;
    }
    > p {
      font-size: 1rem;
      color: #999;
      margin-bottom: 0.4rem;
      > a {
        color: #666;
      }
    }
  }
`;
export default function Modal({ visible = false, closeModal }) {
  const handleContentClick = evt => {
    evt.stopPropagation();
  };
  return (
    <Wrapper className={visible ? 'visible' : null} onClick={closeModal}>
      <div onClick={handleContentClick} className="modal">
        <img src={Icon} alt="logo" className="logo" />
        <h2>STOPWATCH</h2>
        <p>
          Created By <a href="//yangerxiao.com">Tristan</a>
        </p>
        <p>
          <a href="//github.com/zerosoul/mini-stopwatch">Source Code</a>
        </p>
      </div>
    </Wrapper>
  );
}
