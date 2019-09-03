import { useState, useEffect, useRef, useCallback } from 'react';
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
  const initalTheme = localStorage.getItem('STOPWATCH_THEME') || '#000000';
  const [visible, setVisible] = useState(initialValue);
  const [theme, setTheme] = useState(initalTheme);

  const openThemes = () => {
    setVisible(true);
  };

  const closeThemes = () => {
    setVisible(false);
  };
  return { visible, theme, openThemes, closeThemes, setTheme };
};

/* --------------------- useStopwatch ----------------------- */

export const useStopwatch = settings => {
  const { autoStart } = settings || { autoStart: false };
  const [ms, setMs] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);

  // Days
  function addDay() {
    setDays(prevDays => {
      return prevDays + 1;
    });
  }

  // Hours
  const addHour = useCallback(() => {
    setHours(prevHours => {
      if (prevHours === 23) {
        addDay();
        return 0;
      }
      return prevHours + 1;
    });
  }, []);
  // Minutes
  const addMinute = useCallback(() => {
    setMinutes(prevMinutes => {
      if (prevMinutes === 59) {
        addHour();
        return 0;
      }
      return prevMinutes + 1;
    });
  }, [addHour]);

  // Seconds
  const addSecond = useCallback(() => {
    setSeconds(prevSeconds => {
      if (prevSeconds === 59) {
        addMinute();
        return 0;
      }
      console.log('add second +1');
      return prevSeconds + 1;
    });
  }, [addMinute]);

  // Ms
  const addMs = useCallback(() => {
    setMs(prevMs => {
      if (prevMs === 99) {
        console.log('add second');
        addSecond();
        return 0;
      }
      return prevMs + 1;
    });
  }, [addSecond]);

  // Control functions
  const intervalRef = useRef();

  const start = useCallback(() => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        addMs();
        console.log('add ms');
      }, 10);
    }
  }, [addMs]);

  function pause() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    }
  }

  function reset() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    }
    console.log('reset ');
    setMs(0);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    setDays(0);
  }

  // didMount effect
  useEffect(() => {
    if (autoStart) {
      start();
    }
    console.log('useE reset ');

    return reset;
  }, [autoStart, start]);

  return { ms, seconds, minutes, hours, days, start, pause, reset };
};
