'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BsFillSunFill, BsMoon, BsMoonStarsFill, BsSun } from 'react-icons/bs';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? (
        <BsMoonStarsFill size={27} />
      ) : (
        <BsFillSunFill size={27} />
      )}
    </button>
  );
};

export default ThemeSwitch;
