import Box from "@mui/material/Box";
import { Header } from "./components/Header";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "1200px",
        width: "100%",
        margin: "auto",
      }}
    >
      <Header />
    </Box>
  );
}
