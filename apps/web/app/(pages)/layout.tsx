import { CssBaseline } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';


export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <>
        <AppBar component="header">
          <Toolbar>{/* content */}</Toolbar>
        </AppBar>
        <Toolbar/>
        {children}
      </>
  );
  
}
