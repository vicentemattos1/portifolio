import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';
import { MdExpandMore } from 'react-icons/md';
import { AiFillProject } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { ProjectsCard } from './ProjectsCard';

const projects = [
  {
    name: 'CSV Control Vue',
    label: 'control-vue',
    bullet_points: 2,
  },
  {
    name: 'Pizza Shop Web',
    label: 'pizza-shop',
    bullet_points: 2,
  },
  {
    name: 'Redux Zustand',
    label: 'redux-zustand',
    bullet_points: 2,
  },
  {
    name: 'Posterr',
    label: 'posterr',
    bullet_points: 3,
  },
  {
    name: 'Metagame',
    label: 'metagame',
    bullet_points: 3,
  },
  {
    name: 'Textditor',
    label: 'textditor',
    bullet_points: 3,
  },
  {
    name: 'Ignews',
    label: 'ignews',
    bullet_points: 3,
  },
];

// Old accordion-based component - keeping for reference
export const ProjectsAccordion = () => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(0);
  const isMobile = useMediaQuery('(max-width:1080px)');
  const handleChange = (number: number) => {
    setExpanded(number);
  };

  return (
    <Box
      id="projects"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: '28px',
        marginTop: '10px',
      }}
    >
      <Typography variant="h4" sx={{ marginY: '40px', fontWeight: 'bold' }}>
        {t('projects')}
      </Typography>
      <Box sx={{ width: '100%' }}>
        {projects.map((project, index) => (
          <Accordion
            sx={{
              borderRadius: '10px',
              marginBottom: '10px',
              '&:before': {
                display: 'none',
              },
            }}
            key={index}
            expanded={expanded === index}
            onChange={() => handleChange(index)}
          >
            <AccordionSummary
              expandIcon={<MdExpandMore />}
              aria-controls={`panel${index}a-content`}
              id={`panel${index}a-header`}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                  paddingX: isMobile ? '0' : '20px',
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: isMobile ? 'column' : 'row',
                    }}
                  >
                    <Typography
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        marginRight: '10px',
                      }}
                    >
                      <AiFillProject />
                      <Typography component="span" sx={{ marginLeft: '5px' }}>
                        {t(project.name)}
                      </Typography>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Stack spacing={1}>
                {[...Array(project.bullet_points)].map((_, idx) => {
                  return (
                    <Typography key={idx}>
                      • {t(`personal-projects.${project.label}.${idx + 1}`)}
                    </Typography>
                  );
                })}
              </Stack>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

// New card-based component - now the default export
export const Projects = ProjectsCard;
