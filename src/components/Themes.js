import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { rgb2hex, invertColor } from '../utils';
const Wrapper = styled.section`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  transition: transform 0.5s;
  transform: translateY(110%);
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
    text-transform: capitalize;
    &:hover,
    &.curr {
      z-index: 997;
      transition: all 0.5s;
      transform: scale(1.1);
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.6);
    }
    &.purple {
      background-color: #335dc9;
      color: ${invertColor('#335dc9')};
    }
    &.blue {
      background-color: #00bfff;
      color: ${invertColor('#00bfff')};
    }
    &.red {
      background-color: #e3256b;
      color: ${invertColor('#e3256b')};
    }
    &.yellow {
      background-color: #eee600;
      color: ${invertColor('#eee600')};
    }
    &.dark {
      background-color: #000;
      color: ${invertColor('#000')};
    }
    &.darkGray {
      background-color: #708090;
      color: ${invertColor('#708090')};
    }
    &.gray {
      background-color: #d9d9d9;
      color: ${invertColor('#d9d9d9')};
    }
    &.pink {
      background-color: #f44336;
      color: ${invertColor('#f44336')};
    }
    &.green {
      background-color: #00bfa5;
      color: ${invertColor('#335dc9')};
    }
    &.light {
      background-color: #fff;
      color: ${invertColor('#fff')};
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
export default function Themes({ visible = false, setTheme, theme }) {
  const themeWrapper = useRef(null);
  useEffect(() => {
    if (themeWrapper) {
      themeWrapper.current.querySelectorAll('.theme').forEach(item => {
        let c = rgb2hex(getComputedStyle(item).backgroundColor);
        item.classList.remove('curr');
        if (theme == c) {
          item.classList.add('curr');
        }
      });
    }
  }, [theme]);
  const handleSetTheme = ({ target: ele }) => {
    let color = rgb2hex(getComputedStyle(ele).backgroundColor);
    setTheme(color);
    localStorage.setItem('STOPWATCH_THEME', color);
    // closeThemes();
  };
  return (
    <Wrapper ref={themeWrapper} className={visible && 'visible'}>
      {colors.map(color => {
        return (
          <div key={color} onClick={handleSetTheme} className={`theme ${color}`}>
            {color}
          </div>
        );
      })}
    </Wrapper>
  );
}
