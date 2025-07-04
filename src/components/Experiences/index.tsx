import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';
import { useState, useRef, useEffect } from 'react';
import { ExperiencesAccordion } from '../ExperiencesAccordion';
import { Section } from '../Section';

const experiences = [
  {
    name: 'Acaso',
    label: 'acaso',
    title: 'fullstack',
    started_at: '2025-02-01T03:00:00.000Z',
    end_date: null,
    location: 'remote',
    contract_type: 'contract',
    bullet_points: 8,
  },
  {
    name: 'Febracis',
    title: 'fullstack',
    label: 'febracis',
    started_at: '2023-02-01T03:00:00.000Z',
    end_date: '2025-01-01T03:00:00.000Z',
    location: 'Fortaleza, CE',
    contract_type: 'contract',
    bullet_points: 7,
  },
  {
    name: 'Wipro',
    title: 'frontend',
    label: 'wipro',
    started_at: '2022-06-01T03:00:00.000Z',
    end_date: '2023-01-01T03:00:00.000Z',
    location: 'remote',
    contract_type: 'full-time',
    bullet_points: 9,
  },
  {
    name: 'Interbrasil Saúde',
    title: 'frontend',
    label: 'interbrasil',
    started_at: '2021-05-01T03:00:00.000Z',
    end_date: '2021-12-01T03:00:00.000Z',
    location: 'Fortaleza, CE',
    contract_type: 'full-time',
    bullet_points: 7,
  },
  {
    name: 'Lead Dell',
    title: 'frontend',
    label: 'lead_dell',
    started_at: '2020-05-01T03:00:00.000Z',
    end_date: '2021-04-01T03:00:00.000Z',
    location: 'Fortaleza, CE',
    contract_type: 'full-time',
    bullet_points: 6,
  },
  {
    name: 'SD2i',
    title: 'frontend',
    label: 'sd2i',
    started_at: '2020-01-01T03:00:00.000Z',
    end_date: '2020-05-01T03:00:00.000Z',
    location: 'Fortaleza, CE',
    contract_type: 'full-time',
    bullet_points: 4,
  },
  {
    name: 'SD2i',
    title: 'frontend',
    label: 'unifor',
    started_at: '2019-06-01T03:00:00.000Z',
    end_date: '2019-12-01T03:00:00.000Z',
    location: 'Fortaleza, CE',
    contract_type: 'full-time',
    bullet_points: 5,
  },
];

export const Experiences = () => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(0);
  const accordionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleChange = (number: number) => {
    setExpanded(number);
  };

  useEffect(() => {
    if (accordionRefs.current[expanded]) {
      const accordionElement = accordionRefs.current[expanded];
      if (accordionElement) {
        setTimeout(() => {
          accordionElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }, 400);
      }
    }
  }, [expanded]);

  return (
    <Section id="experiences" title={t('experiences')}>
      {experiences.map((experience, index) => {
        return (
          <Box
            key={`experience-${index}`}
            ref={(el: HTMLDivElement | null) => (accordionRefs.current[index] = el)}
            sx={{ paddingTop: '16px' }}
          >
            <ExperiencesAccordion
              expanded={expanded === index}
              experience={experience}
              handleChange={() => handleChange(index)}
            />
          </Box>
        );
      })}
    </Section>
  );
};
