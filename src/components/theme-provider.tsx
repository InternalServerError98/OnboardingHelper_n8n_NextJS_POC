'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function ThemeProvider({ children, ...Props }: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...Props}>{children}</NextThemesProvider>;
}

