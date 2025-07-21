import {
  Box,
  Typography,
  Paper,
  useTheme,
  Link as MuiLink,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import DescriptionIcon from "@mui/icons-material/Description";
import InfoIcon from "@mui/icons-material/Info";
import { pink, orange, grey } from "@mui/material/colors";

export default function Experience() {
  const theme = useTheme();
  const textColor = theme.palette.mode === "light" ? pink[700] : orange[400];
  const bgColor =
    theme.palette.mode === "light" ? theme.palette.common.white : grey[900];
  const paperMaxWidth = 640;

  return (
    <>
      {/* About Me */}
      <Paper
        elevation={9}
        sx={{
          maxWidth: paperMaxWidth,
          width: "100%",
          p: { xs: 3, sm: 5 },
          backgroundColor: bgColor,
          color: textColor,
          borderRadius: 5,
          boxShadow:
            theme.palette.mode === "light"
              ? `0 12px 30px ${pink[200]}`
              : `0 12px 30px ${orange[800]}`,
        }}
      >
        {/* Icon + Heading on one line */}
        {/* Icon + Heading on one line */}
<Box
  sx={{
    display: "flex",
    alignItems: "center",
    gap: 2,
    mb: 2,
    justifyContent: "center",  // centers the whole flex box horizontally
  }}
>
  <InfoIcon sx={{ fontSize: 60, color: textColor }} />
  <Typography
    variant="h5"
    fontWeight="bold"
    sx={{ letterSpacing: 0.8, textAlign: "center" }} // center text
  >
    About Me
  </Typography>
</Box>


        {/* Content below full width */}
        <Typography
          variant="body1"
          sx={{
            lineHeight: 1.6,
            fontSize: { xs: 14, sm: 16 },
            color: textColor,
            userSelect: "text",
          }}
        >
          Hi, I’m <strong>Sibashreeta Dash</strong>, a student at{" "}
          <strong>IIIT Gwalior</strong>, currently pursuing an integrated B.Tech
          and M.Tech in Information Technology. I enjoy learning how the
          internet works, especially topics like <strong>network security</strong>{" "}
          and <strong>web development</strong>.
          <br />
          <br />
          I’ve explored how censorship can be bypassed using tools like the{" "}
          <strong>Tor Snowflake Bridge</strong>, and studied its network traffic
          for my research. Alongside this, I also like building websites and
          improving my skills in frontend technologies like React and JavaScript.
          <br />
          <br />
          As an aspiring engineer, I want to solve real-world problems using tech
          and contribute to building secure, user-friendly systems.
        </Typography>
      </Paper>

      {/* Work Experience */}
      <Paper
        elevation={9}
        sx={{
          maxWidth: paperMaxWidth,
          width: "100%",
          p: { xs: 2, sm: 4 },
          backgroundColor: bgColor,
          color: textColor,
          borderRadius: 5,
          boxShadow:
            theme.palette.mode === "light"
              ? `0 12px 28px ${pink[200]}`
              : `0 12px 28px ${orange[800]}`,
          display: "flex",
          alignItems: "center",
          gap: 2,
          flexDirection: { xs: "column", sm: "row" },
          textAlign: { xs: "center", sm: "left" },
          mt: 4,
        }}
      >
        <WorkIcon
          sx={{
            fontSize: 56,
            color: textColor,
            flexShrink: 0,
          }}
        />
        <Box>
          <Typography variant="h5" fontWeight="bold">
            Intern - Pritsim Solutions Private Limited
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontStyle: "italic", color: textColor, mt: 0.5 }}
          >
            May 2025 - Aug 2025
          </Typography>
        </Box>
      </Paper>

      {/* Resume Link */}
      {/* Resume Link */}
<Paper
  elevation={9}
  sx={{
    maxWidth: paperMaxWidth,
    width: "100%",
    p: { xs: 2, sm: 3 },
    backgroundColor: bgColor,
    color: textColor,
    borderRadius: 5,
    boxShadow:
      theme.palette.mode === "light"
        ? `0 12px 24px ${pink[200]}`
        : `0 12px 24px ${orange[800]}`,
    display: "flex",
    alignItems: "center",
    gap: 1.5,
    justifyContent: "center",
    mt: 4,
  }}
>
  <DescriptionIcon sx={{ fontSize: 40, color: textColor }} />
  <MuiLink
    href="https://drive.google.com/drive/folders/1eVl7pjEPOtQk6rtG7JwV09TR1psHw-OL"
    target="_blank"
    rel="noopener noreferrer"
    underline="hover"
    sx={{ color: textColor, textDecoration: "none" }}
  >
    <Typography variant="h5" fontWeight="bold" component="span">
      View Resume
    </Typography>
  </MuiLink>
</Paper>

    </>
  );
}
