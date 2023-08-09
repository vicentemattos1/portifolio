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
import { Link } from "react-router-dom";

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
    <div>
      <Button
        sx={{ fontSize: "40px", color: "var(--text)" }}
        onClick={toggleDrawer("left", true)}
      >
        <BiMenu />
      </Button>
      <Drawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer("left", false)}
          onKeyDown={toggleDrawer("left", false)}
        >
          <List>
            {options.map((option, _) => (
              <ListItem key={option.label} disablePadding>
                <Link
                  to={option.href}
                  style={{ width: "100%" }}
                  target={option.isExternal ? "_blank" : "_self"}
                >
                  <ListItemButton sx={{ display: "flex" }}>
                    <ListItemIcon sx={{ fontSize: "25px" }}>
                      {option.icon}
                    </ListItemIcon>
                    <ListItemText primary={t(option.label)} />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
}
