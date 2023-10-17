import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';
import { MdExpandMore, MdLocationOn } from 'react-icons/md';
import { BsFillBuildingFill } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { formatDate } from '../../utils/formatDate';

const experiences = [
  {
    name: 'Prolins',
    label: 'prolins',
    started_at: '2023-02-01T03:00:00.000Z',
    end_date: null,
    location: 'Fortaleza, CE',
    contract_type: 'contract',
    position: 'frontend',
    bullet_points: 7,
  },
  {
    name: 'Wipro',
    label: 'wipro',
    started_at: '2021-12-01T03:00:00.000Z',
    end_date: '2023-02-01T03:00:00.000Z',
    location: 'remote',
    position: 'frontend',
    bullet_points: 6,
  },
  {
    name: 'Interbrasil Saúde',
    label: 'interbrasil',
    started_at: '2021-05-01T03:00:00.000Z',
    end_date: '2021-11-01T03:00:00.000Z',
    location: 'Fortaleza, CE',
    position: 'frontend',
    bullet_points: 4,
  },
  {
    name: 'Lead Dell',
    label: 'lead_dell',
    started_at: '2020-05-01T03:00:00.000Z',
    end_date: '2021-05-01T03:00:00.000Z',
    location: 'Fortaleza, CE',
    position: 'frontend',
    bullet_points: 2,
  },
  {
    name: 'SD2i',
    label: 'sd2i',
    started_at: '2020-03-01T03:00:00.000Z',
    end_date: '2020-09-01T03:00:00.000Z',
    location: 'Fortaleza, CE',
    position: 'fullstack',
    bullet_points: 2,
  },
  {
    name: 'Universidade de Fortaleza',
    label: 'unifor',
    started_at: '2019-06-01T03:00:00.000Z',
    end_date: '2019-12-01T03:00:00.000Z',
    location: 'Fortaleza, CE',
    position: 'fullstack',
    bullet_points: 1,
  },
];

export const Experiences = () => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(0);
  const isMobile = useMediaQuery('(max-width:1080px)');
  const handleChange = (number: number) => {
    setExpanded(number);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: '28px',
        marginTop: '10px',
      }}
    >
      <Typography variant="h4" sx={{ marginY: '40px', fontWeight: 'bold' }}>
        {t('experiences')}
      </Typography>
      <Box sx={{ width: '100%' }}>
        {experiences.map((experience, index) => (
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
                  <Typography sx={{ marginBottom: '10px' }}>{t(experience.position)}</Typography>
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
                      <BsFillBuildingFill />
                      <Typography component="span" sx={{ marginLeft: '5px' }}>
                        {t(experience.name)}
                      </Typography>
                    </Typography>
                    <Typography
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                      component="span"
                    >
                      <MdLocationOn />
                      <Typography sx={{ marginLeft: '5px' }}>{t(experience.location)}</Typography>
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: isMobile ? 'space-between' : 'start',
                    textAlign: 'end',
                    alignItems: 'flex-end',
                  }}
                >
                  <Typography
                    component="strong"
                    sx={{
                      color: 'var(--green-200)',
                      background: 'var(--green-100)',
                      width: isMobile ? '120px' : '160px',
                      fontSize: isMobile ? '0.8rem' : '1rem',
                      padding: '0 20px',
                      marginBottom: '10px',
                      borderRadius: '20px',
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}
                  >
                    {experience.contract_type ? t(experience.contract_type) : t('full_time')}
                  </Typography>
                  <Typography>
                    {!experience.end_date
                      ? `${formatDate(experience.started_at)} - ${t('present')}`
                      : `${formatDate(experience.started_at)} - ${formatDate(experience.end_date)}`}
                  </Typography>
                </Box>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Stack spacing={1}>
                {[...Array(experience.bullet_points)].map((_, idx) => {
                  return (
                    <Typography key={idx}>• {t(`experience-description.${experience.label}.${idx + 1}`)}</Typography>
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
