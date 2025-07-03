import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

type SectionTitle = {
  id: string
  title: string
  children: ReactNode
}

export function Section({ id, title,children }: SectionTitle){
  return (
    <Box
      id={id}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize: "28px",
        marginTop: "10px",
        color: '#42446e'
      }}
    >

      <Typography variant="h4" sx={{ marginY: ['20px',"40px"], fontWeight: "bold" }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}