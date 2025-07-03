import useMediaQuery from "@mui/material/useMediaQuery"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import DrawerComponent from "../DrawerComponent"
import { useTranslation } from "react-i18next"
import { BiLogoLinkedinSquare, BiLogoGithub, BiSolidHome, BiInfoCircle, BiSolidContact } from "react-icons/bi"
import { AiFillTool, AiOutlineFundProjectionScreen, AiFillProject } from "react-icons/ai"
import { LangSelector } from "../LangSelector"

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
    label: "experiences",
    icon: <AiOutlineFundProjectionScreen />,
    href: "#experiences",
  },
  {
    label: "techs",
    icon: <AiFillTool />,
    href: "#techs",
  },
  {
    label: "projects",
    icon: <AiFillProject />,
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
]

export const Header = () => {
  const isWideVersion = useMediaQuery("(min-width:1080px)")
  const { t } = useTranslation()

  if (isWideVersion) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingY: "20px",
          borderBottom: "1px solid var(--gray-line)",
          marginBottom: "20px",
        }}
      >
        <Stack spacing={3} direction="row" sx={{ marginLeft: 'auto',alignItems: "center", }}>
          {options.slice(0, 6).map((option, index) => (
            <Box
              component="a"
              key={index}
              href={option.href}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text)",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: "500",
                padding: "8px 16px",
                borderRadius: "6px",
                transition: "all 0.2s ease",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                  color: "var(--title)",
                },
              }}
              target={option.isExternal ? "_blank" : "_self"}
            >
              {t(option.label)}
            </Box>
          ))}
          
          <Box sx={{ display: "flex", gap: "12px", alignItems: "center" }}>
            {options.slice(6).map((option, index) => (
              <Box
                component="a"
                key={index}
                href={option.href}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text)",
                  textDecoration: "none",
                  fontSize: "24px",
                  padding: "8px",
                  borderRadius: "6px",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.04)",
                    color: "var(--title)",
                  },
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {option.icon}
              </Box>
            ))}
            <LangSelector />
          </Box>
        </Stack>
      </Box>
    )
  }

  return <DrawerComponent options={options} />
}
