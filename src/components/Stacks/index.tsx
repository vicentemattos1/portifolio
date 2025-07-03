
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslation } from 'react-i18next';
import { keyframes } from '@mui/system';
import { useState, useMemo } from 'react';
import { Section } from '../Section';
import { techs } from './techs';


// Animation keyframes
const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
`;

// Category colors
const categoryColors = {
  frontend: '#4CAF50',
  backend: '#2196F3',
  tools: '#FF9800',
  data: '#9C27B0',
};

export const Stacks = () => {
  const { t } = useTranslation();
  const isTabletVersion = useMediaQuery("(min-width:768px)");
  const isMobile = useMediaQuery("(max-width:767px)");
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const MOBILE_INITIAL_COUNT = 8;
  
  // Memoize filtered techs for performance
  const filteredTechs = useMemo(() => {
    if (selectedCategory === 'all') return techs;
    return techs.filter(tech => tech.category === selectedCategory);
  }, [selectedCategory]);
  
  const displayedTechs = isMobile && !showAll ? filteredTechs.slice(0, MOBILE_INITIAL_COUNT) : filteredTechs;
  const hasMoreTechs = isMobile && filteredTechs.length > MOBILE_INITIAL_COUNT;
  
  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(techs.map(tech => tech.category)));
    return ['all', ...uniqueCategories];
  }, []);
  
  return (
    <Section
      id="techs"
      title={t('my-stacks.title')}
    >
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        flexWrap: 'wrap',
        gap: 1,
        marginBottom: '30px',
      }}>
        {categories.map((category) => (
          <Chip
            key={category}
            label={category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1)}
            onClick={() => setSelectedCategory(category)}
            variant={selectedCategory === category ? 'filled' : 'outlined'}
            sx={{
              backgroundColor: selectedCategory === category 
                ? (category === 'all' ? 'var(--blue)' : categoryColors[category as keyof typeof categoryColors])
                : 'transparent',
              color: selectedCategory === category ? 'white' : 'var(--text)',
              borderColor: category === 'all' ? 'var(--blue)' : categoryColors[category as keyof typeof categoryColors] || 'var(--gray-line)',
              '&:hover': {
                backgroundColor: selectedCategory === category 
                  ? (category === 'all' ? 'var(--blue)' : categoryColors[category as keyof typeof categoryColors])
                  : 'rgba(0, 0, 0, 0.04)',
              },
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </Box>
      
      <Card
        sx={{
          maxWidth: '1200px',
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(20px)',
          border: 'solid 1px var(--gray-line)',
          boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 12px, rgba(0, 0, 0, 0.05) 0px 1px 0px',
          borderRadius: '20px',
          overflow: 'visible',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: 'rgba(0, 0, 0, 0.12) 0px 8px 24px, rgba(0, 0, 0, 0.08) 0px 2px 0px',
          },
        }}
      >
        <CardContent
          sx={{
            padding: isMobile ? '30px 20px' : '50px 40px',
            '&:last-child': {
              paddingBottom: isMobile ? '30px' : '50px',
            },
          }}
        >
          <Grid container spacing={isMobile ? 2 : 3}>
            {displayedTechs.map((tech) => (
              <Grid 
                item 
                xs={6} 
                sm={4} 
                md={3} 
                lg={2.4} 
                key={tech.label}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Box
                  component="article"
                  role="button"
                  tabIndex={0}
                  aria-label={`${tech.label} - ${tech.category} technology`}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: isMobile ? '16px 12px' : '24px 20px',
                    borderRadius: '16px',
                    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    cursor: 'pointer',
                    position: 'relative',
                    background: 'rgba(255, 255, 255, 0.6)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    minHeight: isMobile ? '110px' : '130px',
                    width: '100%',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(135deg, ${categoryColors[tech.category]}15 0%, ${categoryColors[tech.category]}08 100%)`,
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      pointerEvents: 'none',
                    },
                    '&:hover, &:focus': {
                      transform: 'translateY(-8px) scale(1.03)',
                      boxShadow: `0 16px 32px rgba(0, 0, 0, 0.15), 0 0 0 2px ${categoryColors[tech.category]}40`,
                      background: 'rgba(255, 255, 255, 0.9)',
                      '&::before': {
                        opacity: 1,
                      },
                      '& .tech-icon': {
                        transform: 'scale(1.15)',
                        filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2)) brightness(1.05)',
                      },
                      '& .tech-label': {
                        color: 'var(--title)',
                        fontWeight: '600',
                      },
                      '& .category-dot': {
                        animation: `${pulse} 2s ease-in-out infinite`,
                      },
                    },
                    '&:focus': {
                      outline: `2px solid ${categoryColors[tech.category]}`,
                      outlineOffset: '2px',
                    },
                  }}
                >
                  <Box 
                    component="img" 
                    src={tech.icon}
                    alt={`${tech.label} logo`}
                    className="tech-icon"
                    sx={{ 
                      width: isMobile ? 42 : isTabletVersion ? 50 : 58, 
                      height: isMobile ? 42 : isTabletVersion ? 50 : 58, 
                      marginBottom: '12px',
                      filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))',
                      transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      zIndex: 1,
                      objectFit: 'contain',
                    }} 
                  />
                  <Typography
                    className="tech-label"
                    sx={{
                      fontSize: isMobile ? '0.8rem' : isTabletVersion ? '0.9rem' : '1rem',
                      fontWeight: '500',
                      textAlign: 'center',
                      color: 'var(--text)',
                      transition: 'all 0.3s ease',
                      letterSpacing: '0.3px',
                      zIndex: 1,
                      position: 'relative',
                      lineHeight: 1.3,
                    }}
                  >
                    {tech.label}
                  </Typography>
                  
                  {/* Category indicator */}
                  <Box
                    className="category-dot"
                    sx={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: categoryColors[tech.category],
                      opacity: 0.8,
                      transition: 'all 0.3s ease',
                    }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
          
          {hasMoreTechs && (
            <Box sx={{ marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
              <Button
                onClick={() => setShowAll(!showAll)}
                variant="outlined"
                sx={{
                  color: 'var(--title)',
                  borderColor: 'var(--gray-line)',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '25px',
                  padding: '12px 30px',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  letterSpacing: '0.3px',
                  textTransform: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'var(--blue)',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                  },
                }}
              >
                {showAll ? 'Show Less' : `Show All (${filteredTechs.length - MOBILE_INITIAL_COUNT} more)`}
              </Button>
            </Box>
          )}
        </CardContent>
      </Card>
      
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(74, 144, 226, 0.08) 0%, transparent 70%)',
          animation: `${float} 6s ease-in-out infinite`,
          pointerEvents: 'none',
          zIndex: -1,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(76, 175, 80, 0.08) 0%, transparent 70%)',
          animation: `${float} 4s ease-in-out infinite reverse`,
          pointerEvents: 'none',
          zIndex: -1,
        }}
      />
    </Section>
  );
};
