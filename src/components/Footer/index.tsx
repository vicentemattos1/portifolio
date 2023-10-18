import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { t } from 'i18next';
import { Link } from 'react-router-dom';
import { BiLogoLinkedinSquare, BiLogoGithub } from 'react-icons/bi';

const contactOptions = [
  {
    type: 'phone',
    label: '+55 85 985596334',
  },
  {
    type: 'mail',
    label: 'vicentemattosf@gmail.com',
  },
];

const socialMedias = [
  {
    label: 'Linkedin',
    icon: <BiLogoLinkedinSquare />,
    href: 'https://www.linkedin.com/in/vicentemattos1/',
    isExternal: true,
  },

  {
    label: 'Github',
    icon: <BiLogoGithub />,
    href: 'https://github.com/vicentemattos1',
    isExternal: true,
  },
];
export const Footer = () => {
  return (
    <Box sx={{ m: '40px 20px' }}>
      <Divider />
      <Box sx={{ display: 'flex', flexDirection: ['column', 'row'], justifyContent: 'space-between', mt: '10px' }}>
        <Typography component="strong" sx={{ textAlign: ['center', 'start'], marginBottom: ['10px', 0] }}>
          Vicente Mattos
        </Typography>
        <Box>
          <Box sx={{ display: 'flex', justifyContent: ['center', 'end'], gap: '20px' }}>
            {socialMedias.map((media) => (
              <Box
                component={Link}
                key={media.label}
                to={media.href}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text)',
                  textDecoration: 'none',
                  fontSize: ['30px', '25px'],
                  transition: '0.2s',
                  ':hover': {
                    opacity: '0.7',
                  },
                }}
                target="_blank"
              >
                {media.icon}
              </Box>
            ))}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: ['center', 'end'] }}>
            {contactOptions.map((contact) => (
              <Typography>{`${t(contact.type)}: ${contact.label}`}</Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
