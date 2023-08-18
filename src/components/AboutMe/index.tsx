import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";

export const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize: "28px",
        marginTop: "10px",
      }}
    >
      <Typography variant="h4" sx={{ marginY: "40px", fontWeight: "bold" }}>
        {t("about-me.title")}
      </Typography>
      <Typography>{t("about-me.description")}</Typography>
    </Box>
  );
};
