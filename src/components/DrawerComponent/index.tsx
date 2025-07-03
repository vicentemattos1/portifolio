import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { BiMenu } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import { LangSelector } from "../LangSelector";

type Anchor = "top" | "left" | "bottom" | "right";

interface DrawerComponentProps {
  options: Option[];
}
type Option = {
  label: string;
  icon: React.ReactElement;
  href: string;
  isExternal?: boolean;
};

export default function DrawerComponent({ options }: DrawerComponentProps) {
  const { t } = useTranslation();

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0",  }}>
      <Button
        sx={{ 
          fontSize: "32px", 
          color: "var(--text)",
          minWidth: "auto",
          padding: "8px",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.04)",
          }
        }}
        onClick={toggleDrawer("left", true)}
      >
        <BiMenu />
      </Button>
      
      <LangSelector />
      
      <Drawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 280,
            backgroundColor: "var(--background)",
            borderRight: "1px solid var(--gray-line)",
          }
        }}
      >
        <Box
          sx={{ width: 280, paddingTop: "20px" }}
          role="presentation"
          onClick={toggleDrawer("left", false)}
          onKeyDown={toggleDrawer("left", false)}
        >
          <List>
            {options.map((option) => (
              <ListItem key={option.label} disablePadding>
                <Box
                  component="a"
                  href={option.href}
                  target={option.isExternal ? "_blank" : "_self"}
                  rel={option.isExternal ? "noopener noreferrer" : undefined}
                  sx={{
                    width: "100%",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <ListItemButton 
                    sx={{ 
                      display: "flex",
                      paddingY: "12px",
                      paddingX: "20px",
                      "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.04)",
                      }
                    }}
                  >
                    <ListItemIcon 
                      sx={{ 
                        fontSize: "24px",
                        color: "var(--text)",
                        minWidth: "40px",
                      }}
                    >
                      {option.icon}
                    </ListItemIcon>
                    <ListItemText 
                      primary={option.isExternal ? option.label : t(option.label)}
                      primaryTypographyProps={{
                        fontSize: "1rem",
                        fontWeight: "500",
                        color: "var(--text)",
                      }}
                    />
                  </ListItemButton>
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
