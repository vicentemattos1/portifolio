import TS from "../../assets/ts.svg";
import JS from "../../assets/js.svg";
import CSS from "../../assets/CSS3.svg";
import HTML from "../../assets/HTML5.svg";
import REACT from "../../assets/react.svg";
import VSCODE from "../../assets/vscode.svg";
import GITHUB from "../../assets/github.svg";
import SASS from "../../assets/sass.svg";
import MUI from "../../assets/mui.svg";
import ChakraUI from "../../assets/ChakraUI.svg";
import BitBucket from "../../assets/bitbucket.svg";
import Redux from "../../assets/redux.svg";
import jQuery from "../../assets/jquery-2.svg";
import NodeJS from "../../assets/nodejs-icon.svg";
import RadixUI from "../../assets/radix-ui.svg";
import ViteJS from "../../assets/vitejs.svg";
import JSON from "../../assets/json.svg";
import JIRA from "../../assets/jira-1.svg";
import Bootstrap from "../../assets/bootstrap-4.svg";
import Python3 from "../../assets/python-5.svg";
import Django from "../../assets/django-community.svg";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useTranslation } from "react-i18next";

interface StacksProps {
  align?: "start" | "center";
}

const techs = [
  {
    label: "Javascript",
    icon: JS,
  },
  {
    label: "Typescript",
    icon: TS,
  },
  {
    label: "React",
    icon: REACT,
  },
  {
    label: "Redux",
    icon: Redux,
  },
  {
    label: "NodeJS",
    icon: NodeJS,
  },
  {
    label: "jQuery",
    icon: jQuery,
  },
  {
    label: "ViteJS",
    icon: ViteJS,
  },
  {
    label: "RadixUI",
    icon: RadixUI,
  },
  {
    label: "MaterialUI",
    icon: MUI,
  },
  {
    label: "ChakraUI",
    icon: ChakraUI,
  },
  {
    label: "Sass",
    icon: SASS,
  },
  {
    label: "Bootstrap",
    icon: Bootstrap,
  },
  {
    label: "JSON",
    icon: JSON,
  },
  {
    label: "CSS3",
    icon: CSS,
  },
  {
    label: "Python3",
    icon: Python3,
  },
  {
    label: "Django",
    icon: Django,
  },
  {
    label: "HTML5",
    icon: HTML,
  },
  {
    label: "VSCode",
    icon: VSCODE,
  },
  {
    label: "Github",
    icon: GITHUB,
  },

  {
    label: "Bitbucket",
    icon: BitBucket,
  },

  {
    label: "JIRA",
    icon: JIRA,
  },
];

export const Stacks = ({ align = "center" }: StacksProps) => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: align,
        fontSize: "28px",
      }}
    >
      <Box component="strong">{t("my-stacks.title")}</Box>
      <Box sx={{ fontSize: "26px", marginY: "10px" }}>
        {t("my-stacks.description")}
      </Box>
      <Stack direction="row" flexWrap="wrap" spacing={0} useFlexGap>
        {techs.map((tech, index) => (
          <Box
            key={tech.label ?? index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
              minWidth: "150px",
              marginTop: "30px",
              fontSize: "18px",
            }}
          >
            <Box
              component="img"
              src={tech.icon}
              sx={{ width: 50, height: 50, marginBottom: "5px" }}
            />
            {tech.label}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};
