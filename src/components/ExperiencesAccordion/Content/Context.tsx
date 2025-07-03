import { Typography } from "@mui/material";
import { t } from "i18next";
import { Trans } from "react-i18next";
import { useMemo } from "react";
import { TextHighlight } from "../../TextHighlight";

interface ExperienceContextProps {
  label: string;
}

export function ExperienceContext({ label }: ExperienceContextProps) {
  const contextKey = `experience-description.${label}.context`;
  const context = t(contextKey);



const components = useMemo(() => {
  return Object.fromEntries(
    Array.from({ length: 20 }, (_, i) => [
      i,
      <TextHighlight color="var(--green-200)" key={i} />,
    ])
  );
}, []);

  if (!context) return null;

  return (
    <Typography
      sx={{
        marginBottom: "20px",
        padding: "16px",
        backgroundColor: "rgba(76, 175, 80, 0.05)",
        borderRadius: "0 12px 12px 0",
        borderLeft: "4px solid var(--green-200)",
        fontSize: "0.95rem",
        lineHeight: 1.6,
        fontStyle: "italic",
        color: "var(--text)",
      }}
    >
      <Trans i18nKey={contextKey} components={components} />
    </Typography>
  );
}
