// src/pages/Contact.tsx
import {
  Box,
  Typography,
  Stack,
  Paper,
  Link as MuiLink,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HomeIcon from "@mui/icons-material/Home";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import BackgroundDecorations from "../theme/BackgroundDecorations";

export default function Contact() {
  const theme = useTheme();
  const highlightColor =
    theme.palette.mode === "dark"
      ? theme.palette.secondary.main
      : theme.palette.primary.main;

  return (
    <Box
      sx={{
        height: "100%", // fill parent container height
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
        position: "relative",
        zIndex: 1,
      }}
    >
      <BackgroundDecorations />
      <Stack
        spacing={3}
        sx={{
          width: "100%",
          maxWidth: 500,
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box>
          <ContactMailIcon sx={{ fontSize: 48, color: highlightColor }} />
          <Typography
            variant="h4"
            fontWeight="bold"
            mt={1}
            sx={{ color: highlightColor }}
          >
            Contact Me
          </Typography>
        </Box>

        {[
          {
            icon: <EmailIcon sx={{ color: highlightColor, mr: 1 }} />,
            content: (
              <MuiLink
                href="mailto:sibashreetadash@gmail.com"
                underline="hover"
                sx={{ color: highlightColor }}
              >
                sibashreetadash@gmail.com
              </MuiLink>
            ),
          },
          {
            icon: <PhoneIcon sx={{ color: highlightColor, mr: 1 }} />,
            content: (
              <MuiLink
                href="tel:7847882800"
                underline="hover"
                sx={{ color: highlightColor }}
              >
                +91 78478 82800
              </MuiLink>
            ),
          },
          {
            icon: <LinkedInIcon sx={{ color: highlightColor, mr: 1 }} />,
            content: (
              <MuiLink
                href="https://in.linkedin.com/in/sibashreeta-dash-796317236"
                underline="hover"
                target="_blank"
                sx={{ color: highlightColor }}
              >
                linkedin.com/in/sibashreeta-dash
              </MuiLink>
            ),
          },
          {
            icon: <GitHubIcon sx={{ color: highlightColor, mr: 1 }} />,
            content: (
              <MuiLink
                href="https://github.com/sibashreeta"
                underline="hover"
                target="_blank"
                sx={{ color: highlightColor }}
              >
                github.com/sibashreeta
              </MuiLink>
            ),
          },
          {
            icon: <HomeIcon sx={{ color: highlightColor, mr: 1 }} />,
            content: (
              <Typography sx={{ color: highlightColor }}>
                Gajapati Nagar, Jatani, Odisha
              </Typography>
            ),
          },
        ].map((item, idx) => (
          <Paper
            key={idx}
            elevation={3}
            sx={{
              p: 2.5,
              borderRadius: 4,
              position: "relative",
              zIndex: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                maxWidth: "100%",
                px: 2,
              }}
            >
              {item.icon}
              {item.content}
            </Box>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
}
