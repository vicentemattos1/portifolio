import Box from "@mui/material/Box";
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
      <Box component="strong" sx={{ marginY: "40px" }}>
        {t("about-me.title")}
      </Box>
      <Box sx={{ fontSize: "26px" }}>{t("about-me.description")}</Box>
    </Box>
  );
};
