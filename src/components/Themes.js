import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  transition: transform 0.5s;
  transform: translateY(100%);
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.1);
  &.visible {
    transform: translateY(0);
  }
  .theme {
    width: 20vw;
    height: 5rem;
    padding: 3rem 2rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.2s;
    color: #fff;
    z-index: 996;
    &:hover {
      z-index: 997;
      transition: all 0.5s;
      transform: scale(1.1);
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.6);
    }
    &.purple {
      background-color: #335dc9;
    }
    &.blue {
      background-color: #00bfff;
    }
    &.red {
      background-color: #e3256b;
    }
    &.yellow {
      background-color: #eee600;
    }
    &.dark {
      background-color: #000;
    }
    &.darkGray {
      background-color: #708090;
    }
    &.gray {
      background-color: #d9d9d9;
    }
    &.pink {
      background-color: #f44336;
    }
    &.green {
      background-color: #00bfa5;
    }
    &.light {
      background-color: #fff;
    }
  }
`;
const colors = [
  'blue',
  'dark',
  'gray',
  'darkGray',
  'green',
  'red',
  'purple',
  'yellow',
  'pink',
  'light'
];
// eslint-disable-next-line no-unused-vars
export default function Themes({ visible = false, setTheme, closeThemes }) {
  const handleSetTheme = ({ target: ele }) => {
    let color = getComputedStyle(ele).backgroundColor;
    setTheme(color);
    // closeThemes();
  };
  return (
    <Wrapper className={visible && 'visible'}>
      {colors.map(color => {
        return (
          <div key={color} onClick={handleSetTheme} className={`theme ${color}`}>
            sssss
          </div>
        );
      })}
    </Wrapper>
  );
}
