import useMediaQuery from '@mui/material/useMediaQuery';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import DrawerComponent from '../DrawerComponent';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { BiLogoLinkedinSquare, BiLogoGithub, BiSolidHome, BiInfoCircle, BiSolidContact } from 'react-icons/bi';
import { AiFillTool, AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { LangSelector } from '../LangSelector';

const options = [
  {
    label: 'home',
    icon: <BiSolidHome />,
    href: '#',
  },
  {
    label: 'about',
    icon: <BiInfoCircle />,
    href: '#about',
  },
  {
    label: 'techs',
    icon: <AiFillTool />,
    href: '#techs',
  },
  {
    label: 'projects',
    icon: <AiOutlineFundProjectionScreen />,
    href: '#projects',
  },
  {
    label: 'contact',
    icon: <BiSolidContact />,
    href: '#contact',
  },

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

export const Header = () => {
  const isWideVersion = useMediaQuery('(min-width:1080px)');
  const { t } = useTranslation();

  if (isWideVersion) {
    return (
      <Stack spacing={3} direction="row" sx={{ marginTop: '40px', alignSelf: 'end' }}>
        {options.map((option, index) => (
          <Box
            component={Link}
            key={index}
            to={option.href}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text)',
              textDecoration: 'none',
              fontSize: option.isExternal ? '25px' : 'auto',
              marginRight: '20px',
              transition: '0.2s',
              ':hover': {
                opacity: '0.7',
              },
            }}
            target={option.isExternal ? '_blank' : '_self'}
          >
            {!option.isExternal ? t(option.label) : option.icon}
          </Box>
        ))}
        <LangSelector />
      </Stack>
    );
  }

  return <DrawerComponent options={options} />;
};
