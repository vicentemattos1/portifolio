import {
  AccordionDetails,
  Stack,
  Box,
  useMediaQuery,
} from "@mui/material";
import { Trans } from "react-i18next";
import { ExperienceContext } from "./Content/Context";
import { useMemo } from "react";
import { TextHighlight } from "../TextHighlight";

type ExperienceContentProps = {
  experience: {
    label: string;
    bullet_points: number;
  };
};

export function ExperienceContent({ experience }: ExperienceContentProps) {
  const isMobile = useMediaQuery("(max-width:1080px)");

  const components = useMemo(() => {
    return Array.from({ length: 10 }, (_, i) => (
      <TextHighlight color="var(--title, #1a1a1a)" key={i} />
    ));
  }, []);

  return (
    <AccordionDetails
      sx={{
        padding: isMobile ? "16px 16px 24px" : "24px 24px 32px",
        backgroundColor: "rgba(0, 0, 0, 0.01)",
        borderTop: "1px solid rgba(0, 0, 0, 0.05)",
        "& .MuiCollapse-root": {
          transition: "none !important",
        },
      }}
    >
      <Stack spacing={2}>
        <ExperienceContext label={experience.label} />
        {[...Array(experience.bullet_points)].map((_, idx) => (
          <Box
            key={idx}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
              fontSize: "0.95rem",
              lineHeight: 1.6,
              color: "rgba(0, 0, 0, 0.8)",
            }}
          >
            <Box
              sx={{
                width: "6px",
                height: "6px",
                backgroundColor: "var(--green-200)",
                borderRadius: "50%",
                marginTop: "10px",
                flexShrink: 0,
              }}
            />
            <Box
              sx={{
                flex: 1,
                color: "var(--text)",
                wordBreak: "break-word",
                overflowWrap: "break-word",
              }}
            >
              <Trans
                i18nKey={`experience-description.${experience.label}.${idx + 1}`}
                components={components}
              />
            </Box>
          </Box>
        ))}
      </Stack>
    </AccordionDetails>
  );
}
