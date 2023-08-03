import { CssBaseline } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

export const metadata = {
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <CssBaseline />
      <body>
          <AppBar component="header">
            <Toolbar>{/* content */}</Toolbar>
          </AppBar>
          <Toolbar/>
        {children}
      </body>
    </html>
  );
}
