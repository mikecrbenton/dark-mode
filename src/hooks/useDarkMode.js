import React from 'react';
import useLocalStorage from './useLocalStorage'

const useDarkMode = () => {

  const [darkMode, setDarkMode_CK] = useLocalStorage("Dark Mode");

   return [ darkMode , setDarkMode_CK ];
}

export default useDarkMode;