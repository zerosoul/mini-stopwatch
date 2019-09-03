import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './components/Modal';
import Themes from './components/Themes';
import Menu from './components/Menu';
import { invertColor } from './utils';
import { useModal, useThemes, useStopwatch, useMenu } from './hooks';

const StyledBody = styled.section`
  height: 100vh;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: background ease-in-out 0.5s;
  background: ${({ theme }) => theme};
  .time {
    font-size: 4rem;
    font-weight: bold;
    text-shadow: 0px 1px 6px #3e3d3d;
    letter-spacing: 0.4rem;
    color: ${({ theme }) => invertColor(theme)};
  }
  .btn {
    padding: 1rem 1.4rem;
    background: #000;
    color: #fff;
    border-radius: 0.2rem;
    font-size: 2rem;
    border: none;
    margin-top: 1rem;
    cursor: pointer;
    &.hidden {
      visibility: hidden;
    }
  }
`;
const App = () => {
  const { start, pause, ms, seconds, minutes, reset } = useStopwatch();
  const { expand, foldMenu, expandMenu } = useMenu();

  const [counting, setCounting] = useState(false);
  const [firstblood, setFirstblood] = useState(true);
  const { visible: modalVisible, closeModal, openModal } = useModal();
  const { visible: themesVisible, closeThemes, openThemes, theme, setTheme } = useThemes();
  const handleReset = evt => {
    reset();
    evt.stopPropagation();
  };
  const handleBodyClick = () => {
    if (firstblood) {
      setFirstblood(false);
    }
    if (themesVisible || modalVisible || expand) {
      closeThemes();
      closeModal();
      foldMenu();
      return;
    }
    if (counting) {
      pause();
    } else {
      start();
    }
    setCounting(prev => !prev);
  };
  console.log('theme', theme);

  return (
    <>
      <Modal visible={modalVisible} closeModal={closeModal} />
      <Themes visible={themesVisible} theme={theme} {...{ closeThemes, setTheme }} />
      <Menu {...{ expand, openModal, openThemes, expandMenu, foldMenu }} />
      <StyledBody onClick={handleBodyClick} theme={theme}>
        <div className="time">
          {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}.
          {ms < 10 ? `0${ms}` : ms}
        </div>

        <button className={`btn ${(counting || firstblood) && 'hidden'}`} onClick={handleReset}>
          RESET
        </button>
      </StyledBody>
    </>
  );
};
export default App;
