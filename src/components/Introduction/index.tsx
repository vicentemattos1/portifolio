import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";

import ProfilePNG from "../../assets/Profile.png";

export const Introduction = () => {
  const { t } = useTranslation();
  const isWideVersion = useMediaQuery("(min-width:1080px)");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isWideVersion ? "row" : "column-reverse",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        marginY: isWideVersion ? "90px" : "45px",
        fontSize: "28px",
        color: "var(--title)",
        fontWeight: "500",
      }}
    >
      <Typography variant="h4" sx={{ marginTop: isWideVersion ? 0 : "30px" }}>
        {t("introduction.hi")}, <br />
        {t("introduction.my-name-is")}{" "}
        <Typography
          component="strong"
          sx={{
            fontSize: "inherit",
            background:
              "-webkit-linear-gradient(45deg, #13B0F5 10%, #E70FAA 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Vicente Mattos
        </Typography>
        <br />
        {t("introduction.my-role")}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: 215,
          height: 215,
          borderRadius: "50%",
          background:
            "-webkit-linear-gradient(45deg, #13B0F5 10%, #E70FAA 100%)",
        }}
      >
        <Avatar
          src={ProfilePNG}
          sx={{
            width: 200,
            height: 200,
          }}
        />
      </Box>
    </Box>
  );
};
