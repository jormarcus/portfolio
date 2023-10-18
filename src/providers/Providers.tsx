'use client';

import { ThemeProvider } from 'next-themes';
import { FC, ReactNode } from 'react';
import ActiveSectionContextProvider from '../context/active-section-context';

interface ProvidersProps {
  children: ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ActiveSectionContextProvider>{children}</ActiveSectionContextProvider>
    </ThemeProvider>
  );
};

export default Providers;
