import { useState } from 'react';
import { Stopwatch } from './utils';
export const useMenu = (initialValue = false) => {
  const [expand, setExpand] = useState(initialValue);

  const expandMenu = () => {
    setExpand(true);
  };

  const foldMenu = () => {
    setExpand(false);
  };
  return { expand, expandMenu, foldMenu };
};

export const useModal = (initialValue = false) => {
  const [visible, setVisible] = useState(initialValue);

  const openModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };
  return { visible, openModal, closeModal };
};

export const useThemes = (initialValue = false) => {
  const [visible, setVisible] = useState(initialValue);
  const [theme, setTheme] = useState('#fff');

  const openThemes = () => {
    setVisible(true);
  };

  const closeThemes = () => {
    setVisible(false);
  };
  return { visible, theme, openThemes, closeThemes, setTheme };
};

// let tmpTime = 0;
export const useTime = () => {
  const stopwatch = new Stopwatch();
  const [time, setTime] = useState([0, 0, 0]);
  const [running, setRunning] = useState(false);

  const start = () => {
    stopwatch.start();

    console.log('start');
  };
  const stop = () => {
    setRunning(false);
    console.log('stop');
  };
  const reset = () => {
    setRunning(false);
    setTime([0, 0, 0]);
    console.log('reset');
  };

  return { time, running, stop, start, reset };
};
