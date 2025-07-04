import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Header } from './components/Header';
import { Stacks } from './components/Stacks';
import { AboutMe } from './components/AboutMe';
import { Experiences } from './components/Experiences';
import { Education } from './components/Education';
import { Footer } from './components/Footer';
import { Projects } from './components/PersonalProjects';
import { AnimatedSection } from './components/AnimatedSection';

function App() {
  const isWideVersion = useMediaQuery('(min-width:1080px)');
  const isTabletVersion = useMediaQuery('(min-width:768px)');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '1200px',
        width: '100%',
        margin: 'auto',
        paddingX: isWideVersion ? '20px' : isTabletVersion ? '16px' : '12px',
        minHeight: '100vh',
      }}
    >
      <Header />

      <AnimatedSection delay={0.1}>
        <AboutMe />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <Experiences />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <Stacks />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <Projects />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <Education />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <Footer />
      </AnimatedSection>
    </Box>
  );
}
export default App;
