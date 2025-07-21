
import {
  Box,
  Typography,
  useTheme,
  Stack,
  Paper,

} from "@mui/material";

import ArrowRightSharpIcon from "@mui/icons-material/ArrowRightSharp";
import ComputerIcon from "@mui/icons-material/Computer";
import CodeIcon from "@mui/icons-material/Code";
import LanguageIcon from "@mui/icons-material/Language";
import BuildIcon from "@mui/icons-material/Build";
import EngineeringIcon from '@mui/icons-material/Engineering'; 
import { pink, orange, grey } from "@mui/material/colors";
import BackgroundDecorations from "../theme/BackgroundDecorations";

const skillData = [
  {
    title: "Programming Languages",
    icon: <CodeIcon fontSize="large" />,
    items: ["C / C++", "Python", "JavaScript", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "Core Technical Skills",
    icon: <ComputerIcon fontSize="large" />,
    items: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Computer Networks",
      "Operating Systems",
      "Cryptography & Network Security",
      "Database Systems",
      "Computer Architecture",
    ],
  },
  {
    title: "Web Development",
    icon: <LanguageIcon fontSize="large" />,
    items: ["React", "Firebase", "Responsive Design", "Netlify"],
  },
  {
    title: "Tools & Platforms",
    icon: <BuildIcon fontSize="large" />,
    items: [
      "Wireshark",
      "Nmap",
      "Kali Linux",
      "Google Colab",
      "Google IDX",
      "VS Code",
      "Canva",
      "Jira",
    ],
  },
];

export default function Skills() {
  const theme = useTheme();


  const textColor = theme.palette.mode === "light" ? pink[600] : orange[500];
  const bgColor =
    theme.palette.mode === "light" ? theme.palette.background.paper : grey[900];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        px: { xs: 2, sm: 4, md: 6 },
        py: 6,
        backgroundColor: theme.palette.background.default,
        position: "relative",
        zIndex: 1,
      }}
    >
      <BackgroundDecorations />
      <Typography
  variant="h4"
  fontWeight="bold"
  textAlign="center"
  gutterBottom
  sx={{ color: textColor, mb: 6, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}
>
  <EngineeringIcon sx={{ fontSize: 50 }} />
  My Skills
</Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr",
            md: "1fr 1fr",
          },
          gap: 4,
          position: "relative",
          zIndex: 1,
        }}
      >
        {skillData.map(({ title, icon, items }) => (
          <Paper
            key={title}
            elevation={6}
            sx={{
              p: 3,
              backgroundColor: bgColor,
              color: textColor,
              borderRadius: 3,
              minHeight: 320,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.02)",
                boxShadow: `0 4px 20px ${
                  theme.palette.mode === "light" ? pink[100] : orange[800]
                }`,
              },
              position: "relative",
              zIndex: 1,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Box sx={{ mr: 1, color: textColor }}>{icon}</Box>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ color: textColor }}
              >
                {title}
              </Typography>
            </Box>

            <Stack spacing={1} sx={{ flexGrow: 1 }}>
              {items.map((skill) => (
                <Box
                  key={skill}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: textColor,
                  }}
                >
                  <ArrowRightSharpIcon
                    sx={{ mr: 1, fontSize: 20, color: textColor }}
                  />
                  <Typography variant="body1" fontWeight={500}>
                    {skill}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
