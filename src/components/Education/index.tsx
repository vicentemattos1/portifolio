import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { MdLocationOn } from 'react-icons/md';
import { BsFillBuildingFill } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import { formatDate } from '../../utils/formatDate';
import { Section } from '../Section';

const places = [
  {
    name: 'Unifor',
    started_at: '2017-07-01T03:00:00.000Z',
    end_date: '2023-07-01T03:00:00.000Z',
    location: 'Fortaleza, CE',
    contract_type: 'half-time',
    isUniversity: true,
    position: 'computer-science',
  },
  {
    name: 'Rocketseat',
    started_at: '2021-05-01T03:00:00.000Z',
    end_date: '2022-03-01T03:00:00.000Z',
    location: 'remote',
    position: 'Ignite',
  },
];

export const Education = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery('(max-width:1080px)');

  return (
    <Section id="education" title={t('education')}>
      <Box sx={{ width: '100%' }}>
        {places.map((place) => (
          <Box
            key={place.location}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              background: 'var(--white)',
              borderRadius: '10px',
              boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
              padding: '20px',
              marginTop: '10px',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography sx={{ marginBottom: '10px' }}>{`${t(place.position)} ${
                place.isUniversity ? `- ${t('university-education')}` : ''
              }`}</Typography>
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
                    {t(place.name)}
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
                  <Typography sx={{ marginLeft: '5px' }}>{t(place.location)}</Typography>
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
                {t(`contract-type.${place.contract_type || 'full-time'}`)}
              </Typography>
              <Typography>
                {!place.end_date
                  ? `${formatDate(place.started_at)} - ${t('present')}`
                  : `${formatDate(place.started_at)} - ${formatDate(place.end_date)}`}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Section>
  );
};
