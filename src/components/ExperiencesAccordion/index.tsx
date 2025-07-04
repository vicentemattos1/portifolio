import { Accordion } from '@mui/material';
import { ExperiencesSummary } from './Summary';
import { ExperienceContent } from './Content';

type ExperiencesAccordionProps = {
  expanded: boolean;
  experience: {
    label: string;
    title: string;
    name: string;
    location: string;
    started_at: string;
    end_date?: string | null;
    contract_type?: string;
    bullet_points: number;
  };

  handleChange: () => void;
};

export function ExperiencesAccordion({
  expanded,
  experience,
  handleChange,
}: ExperiencesAccordionProps) {
  return (
    <Accordion
      sx={{
        borderRadius: '16px !important',
        marginBottom: '16px',
        boxShadow: expanded
          ? 'rgba(0, 0, 0, 0.1) 0px 8px 24px, rgba(0, 0, 0, 0.06) 0px 1px 0px'
          : 'rgba(0, 0, 0, 0.05) 0px 4px 12px, rgba(0, 0, 0, 0.03) 0px 1px 0px',
        border: expanded ? '1px solid var(--green-200)' : '1px solid transparent',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          boxShadow: 'rgba(0, 0, 0, 0.1) 0px 8px 24px, rgba(0, 0, 0, 0.06) 0px 1px 0px',
          transform: 'translateY(-2px)',
        },
        '&:before': {
          display: 'none',
        },
      }}
      expanded={expanded}
      onChange={handleChange}
    >
      <ExperiencesSummary expanded={expanded} experience={experience} />
      <ExperienceContent experience={experience} />
    </Accordion>
  );
}
