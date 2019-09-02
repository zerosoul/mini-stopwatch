import React from 'react';
import styled from 'styled-components';
import { useMenu } from '../hooks';

const Wrapper = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  padding: 0.4rem;
  background: #333;
  color: #fff;
  z-index: 998;
  .dots {
    writing-mode: vertical-lr;
    font-size: 1rem;
    letter-spacing: -0.2rem;
    cursor: pointer;
  }
  .list {
    .item {
      padding: 0.8rem;
      cursor: pointer;
      &:hover {
        background: rgba(22, 22, 22, 0.4);
      }
    }
  }
`;
export default function Menu({ openModal, openThemes }) {
  const { expand, expandMenu, foldMenu } = useMenu();
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
