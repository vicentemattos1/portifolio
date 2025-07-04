import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslation } from 'react-i18next';
import { FiGithub } from 'react-icons/fi';

import { Section } from '../Section';
import { projects } from './projects';

export const ProjectsCard = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery('(max-width:1080px)');

  return (
    <Section id="projects" title={t('projects')}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: ['1fr', '1fr 1fr', '1fr 1fr 1fr'],
          gap: '24px',
        }}
      >
        {projects.map((project, index) => (
          <Box key={index}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease-in-out',
                border: '1px solid var(--gray-line)',
                backgroundColor: 'var(--white)',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                src={project.thumb}
                alt={project.name}
                sx={{
                  objectFit: 'cover',
                  borderTopLeftRadius: '16px',
                  borderTopRightRadius: '16px',
                }}
              />

              <CardContent
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '24px',
                }}
              >
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontWeight: 'bold',
                    color: 'var(--title)',
                    marginBottom: '12px',
                    fontSize: isMobile ? '1.1rem' : '1.25rem',
                  }}
                >
                  {project.name}
                </Typography>

                <Box sx={{ marginBottom: '16px' }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'var(--text)',
                      marginBottom: '8px',
                      fontSize: '0.9rem',
                      lineHeight: 1.6,
                    }}
                  >
                    {t(`personal-projects.${project.label}.description`)}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginBottom: '20px',
                  }}
                >
                  {project.tech_stack.map((tech, techIndex) => (
                    <Chip
                      key={techIndex}
                      label={tech}
                      size="small"
                      sx={{
                        backgroundColor: 'var(--green-100)',
                        color: 'var(--green-200)',
                        fontWeight: '500',
                        fontSize: '0.75rem',
                        height: '28px',
                      }}
                    />
                  ))}
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    gap: '12px',
                    marginTop: 'auto',
                  }}
                >
                  <Button
                    variant="contained"
                    size="small"
                    startIcon={<FiGithub />}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      flex: 1,
                      backgroundColor: 'var(--title)',
                      color: 'var(--white)',
                      textTransform: 'none',
                      fontWeight: '500',
                      borderRadius: '8px',
                      '&:hover': {
                        backgroundColor: 'rgba(66, 68, 110, 0.9)',
                      },
                    }}
                  >
                    View Code
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Section>
  );
};
