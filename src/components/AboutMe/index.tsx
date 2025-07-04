import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslation, Trans } from 'react-i18next';
import { keyframes } from '@mui/system';
import Profile from '../../assets/Profile.jpeg';
import { TextHighlight } from '../TextHighlight';
import { useMemo } from 'react';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const highlights = [
  { key: 'experience', value: '5+', label: 'about-me.highlights.experience' },
  { key: 'projects', value: '20+', label: 'about-me.highlights.projects' },
  { key: 'technologies', value: '25+', label: 'about-me.highlights.technologies' },
  { key: 'clients', value: '50k+', label: 'about-me.highlights.clients' },
];

export const AboutMe = () => {
  const { t } = useTranslation();
  const isWideVersion = useMediaQuery('(min-width:1080px)');
  const isTabletVersion = useMediaQuery('(min-width:768px)');
  const isMobile = useMediaQuery('(max-width:767px)');

  const components = useMemo(() => {
    return Object.fromEntries(
      Array.from({ length: 24 }, (_, i) => [i, <TextHighlight color="var(--title)" key={i} />])
    );
  }, []);

  return (
    <Card
      id="aboutme"
      sx={{
        width: '100%',
        marginTop: '10px',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        border: '1px solid var(--gray-line)',
        borderRadius: '16px',

        boxShadow: 'rgba(36, 20, 20, 0.08) 0px 4px 12px, rgba(0, 0, 0, 0.05) 0px 1px 0px',
        overflow: 'hidden',
        animation: `${fadeInUp} 0.8s ease-out 0.4s both`,
        position: 'relative',
      }}
    >
      <CardContent
        sx={{
          padding: isMobile ? '40px 30px' : isTabletVersion ? '50px 40px' : '60px 50px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            marginBottom: '40px',
            gap: '30px',
          }}
        >
          <Avatar
            sx={{
              width: isMobile ? 120 : 150,
              height: isMobile ? 120 : 150,
              border: '4px solid rgba(255, 255, 255, 0.8)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              background: 'linear-gradient(45deg, #4CAF50, #2196F3)',
              fontSize: isMobile ? '3rem' : '4rem',
              fontWeight: 'bold',
              color: 'white',
              '& img': {
                objectFit: 'fill',
              },
            }}
            src={Profile}
          ></Avatar>

          <Box sx={{ flex: 1, textAlign: isMobile ? 'center' : 'left' }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                color: 'var(--title)',
                marginBottom: '10px',
                fontSize: isWideVersion ? '2rem' : isTabletVersion ? '1.8rem' : '1.5rem',
              }}
            >
              Vicente Mattos
            </Typography>
            <Typography
              sx={{
                color: 'var(--blue)',
                fontSize: isWideVersion ? '1.2rem' : '1.1rem',
                fontWeight: '500',
                marginBottom: '15px',
              }}
            >
              {t('about-me.job-title')}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 1,
                justifyContent: isMobile ? 'center' : 'flex-start',
              }}
            >
              <Chip
                label={t('about-me.chips.frontend')}
                size="small"
                sx={{ backgroundColor: '#4CAF50', color: 'white' }}
              />
              <Chip
                label={t('about-me.chips.react')}
                size="small"
                sx={{ backgroundColor: '#2196F3', color: 'white' }}
              />
              <Chip
                label={t('about-me.chips.leader')}
                size="small"
                sx={{ backgroundColor: '#FF9800', color: 'white' }}
              />
            </Box>
          </Box>
        </Box>

        <Divider sx={{ marginBottom: '40px', opacity: 0.3 }} />

        <Typography
          sx={{
            textAlign: 'left',
            lineHeight: 1.8,
            fontSize: isWideVersion ? '1.1rem' : isTabletVersion ? '1rem' : '0.95rem',
            color: 'var(--text)',
            marginBottom: '40px',
            '& strong': {
              color: 'var(--title)',
              fontWeight: '600',
            },
          }}
        >
          <Trans i18nKey="about-me.description" components={components} />
        </Typography>
        <Grid
          container
          spacing={isMobile ? 2 : 3}
          sx={{
            marginBottom: '50px',
            animation: `${fadeInUp} 0.8s ease-out 0.2s both`,
          }}
        >
          {highlights.map((highlight) => (
            <Grid item xs={6} md={3} key={highlight.key}>
              <Card
                sx={{
                  textAlign: 'center',
                  padding: isMobile ? '20px 10px' : '30px 20px',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '16px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: isWideVersion ? '2.5rem' : isTabletVersion ? '2rem' : '1.8rem',
                    fontWeight: 'bold',
                    color: 'var(--blue)',
                    marginBottom: '8px',
                  }}
                >
                  {highlight.value}
                </Typography>
                <Typography
                  sx={{
                    fontSize: isMobile ? '0.8rem' : '0.9rem',
                    color: 'var(--text)',
                    fontWeight: '500',
                  }}
                >
                  {t(highlight.label)}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};
