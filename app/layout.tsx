import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider } from '@mantine/core';

export const metadata = {
  title: 'DiceOut Fitness',
  description: 'A fun, randomized workout PWA!',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}