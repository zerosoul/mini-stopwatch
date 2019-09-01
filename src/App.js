import React from 'react';
import styled from 'styled-components';
import Modal from './components/Modal';
import Themes from './components/Themes';
import Menu from './components/Menu';
import { useModal, useThemes, useTime } from './hooks';

const StyledBody = styled.section`
  height: 100vh;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: background ease-in-out 0.5s;
  /* mix-blend-mode: difference; */

  .time {
    font-size: 4rem;
    font-weight: bold;
    color: #333;
  }
  .btn {
    padding: 0.6rem 1rem;
    background: #000;
    border-radius: 0.4rem;
    border: none;
    margin-top: 1rem;
    cursor: pointer;
    &.hidden {
      visibility: hidden;
    }
  }
`;
const App = () => {
  const { start, time, stop, running, reset } = useTime();
  const { visible: modalVisible, closeModal, openModal } = useModal();
  const { visible: themesVisible, closeThemes, openThemes, theme, setTheme } = useThemes();
  const handleReset = evt => {
    reset();
    evt.stopPropagation();
  };
  const handleBodyClick = () => {
    if (themesVisible) {
      closeThemes();
      return;
    }
    if (running) {
      stop();
    } else {
      start();
    }
  };
  return (
    <>
      <Modal visible={modalVisible} closeModal={closeModal} />
      <Themes visible={themesVisible} {...{ closeThemes, setTheme }} />
      <Menu {...{ openModal, openThemes }} />
      <StyledBody onClick={handleBodyClick} style={{ background: theme }}>
        <div className="time">
          {time[0]}:{time[1]}.{time[2]}
        </div>

        <button className={`btn ${running && 'hidden'}`} onClick={handleReset}>
          reset
        </button>
      </StyledBody>
    </>
  );
};
export default App;
