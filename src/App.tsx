import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Header } from './components/Header';
import { Introduction } from './components/Introduction';
import { Stacks } from './components/Stacks';
import { AboutMe } from './components/AboutMe';
import { Experiences } from './components/Experiences';
import { Education } from './components/Education';

function App() {
  const isWideVersion = useMediaQuery('(min-width:1080px)');
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '1200px',
        width: '100%',
        margin: 'auto',
        paddingX: isWideVersion ? 0 : '20px',
      }}
    >
      <Header />
      <Introduction />
      <Stacks />
      <AboutMe />
      <Experiences />
      <Education />
    </Box>
  );
}
export default App;
