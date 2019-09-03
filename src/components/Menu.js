import React from 'react';
import styled from 'styled-components';
// import { useMenu } from '../hooks';
// import { rgb2hex, invertColor } from '../utils';

const Wrapper = styled.section`
  position: fixed;
  top: 1rem;
  right: 1rem;
  padding: 0.4rem;
  color: #fff;
  z-index: 998;
  mix-blend-mode: luminosity;
  .dots {
    writing-mode: vertical-lr;
    font-size: 1rem;
    letter-spacing: -0.2rem;
    cursor: pointer;
    font-weight: 800;
  }
  .list {
    background: #333;
    box-shadow: 4px -7px 8px 0px #1f1f1fc7;
    .item {
      padding: 0.8rem;
      cursor: pointer;
      &:hover {
        background: rgba(22, 22, 22, 0.4);
      }
    }
  }
`;
export default function Menu({ expand, openModal, openThemes, expandMenu, foldMenu }) {
  const handleThemeClick = () => {
    foldMenu();
    openThemes();
  };
  const handleAboutClick = () => {
    foldMenu();
    openModal();
  };
  return (
    <Wrapper>
      {!expand && (
        <div className="dots" onClick={expandMenu}>
          ···
        </div>
      )}
      {expand && (
        <ul className="list">
          <li className="item" onClick={handleThemeClick}>
            Themes
          </li>
          <li className="item" onClick={handleAboutClick}>
            About
          </li>
        </ul>
      )}
    </Wrapper>
  );
}
