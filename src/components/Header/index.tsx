import useMediaQuery from "@mui/material/useMediaQuery";
import Stack from "@mui/material/Stack";
import DrawerComponent from "../DrawerComponent";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  BiLogoLinkedinSquare,
  BiLogoGithub,
  BiSolidHome,
  BiInfoCircle,
  BiSolidContact,
} from "react-icons/bi";
import { AiFillTool, AiOutlineFundProjectionScreen } from "react-icons/ai";
import styles from "./styles.module.scss";
import classNames from "classnames";

const options = [
  {
    label: "home",
    icon: <BiSolidHome />,
    href: "#",
  },
  {
    label: "about",
    icon: <BiInfoCircle />,
    href: "#about",
  },
  {
    label: "stacks",
    icon: <AiFillTool />,
    href: "#stacks",
  },
  {
    label: "projects",
    icon: <AiOutlineFundProjectionScreen />,
    href: "#projects",
  },
  {
    label: "contact",
    icon: <BiSolidContact />,
    href: "#contact",
  },

  {
    label: "Linkedin",
    icon: <BiLogoLinkedinSquare />,
    href: "https://www.linkedin.com/in/vicentemattos1/",
    isExternal: true,
  },

  {
    label: "Github",
    icon: <BiLogoGithub />,
    href: "https://github.com/vicentemattos1",
    isExternal: true,
  },
];

export const Header = () => {
  const isWideVersion = useMediaQuery("(min-width:1080px)");
  const { t } = useTranslation();

  if (isWideVersion) {
    return (
      <Stack
        spacing={3}
        direction="row"
        sx={{ marginTop: "40px", alignSelf: "end" }}
      >
        {options.map((option, index) => (
          <Link
            key={index}
            to={option.href}
            className={classNames(styles.link, {
              [styles.icon]: !!option.isExternal,
            })}
            target={option.isExternal ? "_blank" : "_self"}
          >
            {!option.isExternal ? t(option.label) : option.icon}
          </Link>
        ))}
      </Stack>
    );
  }

  return <DrawerComponent options={options} />;
};
