import { AccordionSummary, Box, Typography, useMediaQuery } from "@mui/material";
import { t } from "i18next";
import { BsFillBuildingFill } from "react-icons/bs";
import { MdExpandMore, MdLocationOn } from "react-icons/md";
import { formatDate } from "../../utils/formatDate";

type SummaryProps = {
  expanded: boolean;
  experience: {
    title: string
    name: string
    location: string
    started_at: string
    end_date?: string | null
    contract_type?: string
  }
}

export function ExperiencesSummary ({ expanded, experience }: SummaryProps){
  const isMobile = useMediaQuery("(max-width:1080px)")

  const { title, name, location, started_at, end_date, contract_type } = experience

  const formatedStartedAt = formatDate(started_at)
  const formatedEndDate = end_date ? formatDate(end_date) : t("present")
  const period = `${formatedStartedAt} - ${formatedEndDate}`

  return (
                  <AccordionSummary
                    expandIcon={
                      <Box
                        sx={{
                          backgroundColor: expanded ? "var(--green-100)" : "rgba(0, 0, 0, 0.04)",
                          borderRadius: "50%",
                          width: "35px",
                          height: "35px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            backgroundColor: "var(--green-100)",
                          },
                        }}
                      >
                        <MdExpandMore 
                          style={{ 
                            color: expanded ? "var(--green-200)" : "rgba(0, 0, 0, 0.6)",
                            fontSize: "24px",
                            transition: "transform 0.3s ease",
                            transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                          }} 
                        />
                      </Box>
                    }
                    sx={{
                      padding: isMobile ? "16px" : "24px",
                      alignItems: "flex-start",
                      "& .MuiAccordionSummary-expandIconWrapper": {
                        marginLeft: isMobile ? "12px" : "20px",
                      },
                      "& .MuiAccordionSummary-content": {
                        margin: 0,
                      },
                      "& .MuiAccordionSummary-content.Mui-expanded": {
                        margin: 0,
                      },
                      "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.02)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        alignItems: "flex-start",
                      }}
                    >
                      <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
                        <Typography 
                          sx={{ 
                            marginBottom: "12px", 
                            fontWeight: "600",
                            fontSize: isMobile ? "1.1rem" : "1.25rem",
                            color: "var(--title, #1a1a1a)",
                          }}
                        >
                          {t(title)}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: isMobile ? "column" : "row",
                            gap: isMobile ? "8px" : "20px",
                            alignItems: isMobile ? "flex-start" : "center",
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              fontSize: "0.95rem",
                              color: "rgba(0, 0, 0, 0.7)",
                            }}
                          >
                            <Box
                              sx={{
                                backgroundColor: "var(--green-100)",
                                borderRadius: "50%",
                                width: "24px",
                                height: "24px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginRight: "8px",
                              }}
                            >
                              <BsFillBuildingFill style={{ color: "var(--green-200)", fontSize: "12px" }} />
                            </Box>
                            <Typography component="span" sx={{ fontWeight: "500" }}>
                              {name}
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              fontSize: "0.95rem",
                              color: "rgba(0, 0, 0, 0.7)",
                                                     justifyContent: "center",
 }}
                          >
                            <Box
                              sx={{
                                backgroundColor: "var(--green-100)",
                                borderRadius: "50%",
                                width: "24px",
                                height: "24px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginRight: "8px",
                              }}
                            >
                              <MdLocationOn style={{ color: "var(--green-200)", fontSize: "14px" }} />
                            </Box>
                            <Typography component="span" sx={{ fontWeight: "500" }}>{t(location)}</Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "flex-end",
                          gap: "12px",
                          marginLeft: isMobile ? "0" : "20px",
                        }}
                      >
                        <Typography
                          component="span"
                          sx={{
                            color: "var(--green-200)",
                            background: "linear-gradient(135deg, var(--green-100) 0%, rgba(76, 175, 80, 0.1) 100%)",
                            minWidth: isMobile ? "110px" : "140px",
                            fontSize: isMobile ? "0.75rem" : "0.85rem",
                            padding: "6px 16px",
                            borderRadius: "20px",
                            fontWeight: "600",
                            textAlign: "center",
                            border: "1px solid var(--green-200)",
                            boxShadow: "0 2px 4px rgba(76, 175, 80, 0.1)",
                          }}
                        >
                          {t(`contract-type.${contract_type || "full-time"}`)}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: isMobile ? "0.85rem" : "0.9rem",
                            color: "rgba(0, 0, 0, 0.6)",
                            fontWeight: "500",
                            textAlign: "right",
                          }}
                        >
                          {period}
                        </Typography>
                      </Box>
                    </Box>
                  </AccordionSummary>
  );
}