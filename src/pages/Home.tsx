import React from "react";
import {
  Box,
  Typography,
  Stack,
  useTheme,
  keyframes,
  alpha,
} from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
import {
  pink,
  blueGrey,
  teal,
  orange,
  purple,
  deepPurple,
} from "@mui/material/colors";
import BackgroundDecorations from "../theme/BackgroundDecorations";
import myPhoto from "../assets/my_photo.jpg";

// Icons
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import SpaIcon from "@mui/icons-material/Spa";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";
import EmojiNatureTwoToneIcon from "@mui/icons-material/EmojiNatureTwoTone";
import LocalFloristTwoToneIcon from "@mui/icons-material/LocalFloristTwoTone";

import BedtimeSharpIcon from "@mui/icons-material/BedtimeSharp";
import StarBorderPurple500SharpIcon from "@mui/icons-material/StarBorderPurple500Sharp";
import StarIcon from "@mui/icons-material/Star";
import Brightness2Icon from "@mui/icons-material/Brightness2";

import Experience from "../components/Experience";

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(5deg); }
`;

export default function Home() {
  const theme = useTheme();

  const highlightColor =
    theme.palette.mode === "light" ? pink[600] : orange[400];
  const bodyTextColor =
    theme.palette.mode === "light"
      ? alpha(pink[900], 0.9)
      : alpha(orange[300], 0.9);

  const lightIcons = [
    {
      icon: <LocalFloristIcon />,
      top: "10%",
      left: "5%",
      color: pink[400],
      size: 50,
      delay: "0s",
    },
    {
      icon: <SpaIcon />,
      top: "20%",
      right: "10%",
      color: teal[300],
      size: 60,
      delay: "1s",
    },
    {
      icon: <FilterVintageIcon />,
      bottom: "15%",
      left: "6%",
      color: orange[300],
      size: 45,
      delay: "2s",
    },
    {
      icon: <EmojiNatureTwoToneIcon />,
      top: "5%",
      right: "5%",
      color: purple[200],
      size: 55,
      delay: "2.5s",
    },
    {
      icon: <LocalFloristTwoToneIcon />,
      bottom: "10%",
      right: "8%",
      color: deepPurple[300],
      size: 48,
      delay: "3s",
    },
  ];

  const darkIcons = [
    {
      icon: <BedtimeSharpIcon />,
      top: "10%",
      left: "6%",
      color: blueGrey[100],
      size: 60,
      delay: "0s",
    },
    {
      icon: <StarIcon />,
      top: "25%",
      right: "10%",
      color: blueGrey[300],
      size: 55,
      delay: "1s",
    },
    {
      icon: <StarBorderPurple500SharpIcon />,
      bottom: "10%",
      left: "6%",
      color: pink[100],
      size: 52,
      delay: "1.5s",
    },
    {
      icon: <Brightness2Icon />,
      top: "5%",
      right: "8%",
      color: blueGrey[200],
      size: 58,
      delay: "2s",
    },
    {
      icon: <StarIcon />,
      bottom: "5%",
      right: "10%",
      color: blueGrey[50],
      size: 60,
      delay: "2.5s",
    },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: { xs: 2, sm: 4 },
        backgroundColor: theme.palette.background.default,
      }}
    >
      <BackgroundDecorations />

      {(theme.palette.mode === "light" ? lightIcons : darkIcons).map(
        (item, index) => (
          <Box
            key={index}
            sx={{
              position: "absolute",
              top: item.top,
              left: item.left,
              right: item.right,
              bottom: item.bottom,
              animation: `${float} 6s ease-in-out infinite`,
              animationDelay: item.delay,
              zIndex: 0,
              filter: "drop-shadow(0 0 4px rgba(0,0,0,0.1))",
              opacity: 0.6,
            }}
          >
            {React.cloneElement(item.icon, {
              sx: {
                fontSize: item.size,
                color: item.color,
              },
            })}
          </Box>
        )
      )}

      <Stack
        spacing={3}
        sx={{
          zIndex: 1,
          maxWidth: 640,
          width: "100%",
          textAlign: "center",
          alignItems: "center",
          // Removed background and box shadow styles here
          p: { xs: 1, sm: 2 }, // Optional padding to keep spacing
        }}
      >
        {/* Profile Picture */}
        <Box
          sx={{
            width: { xs: 140, sm: 180 },
            height: { xs: 140, sm: 180 },
            borderRadius: "50%",
            overflow: "hidden",
            boxShadow:
              theme.palette.mode === "light"
                ? `0 8px 16px ${alpha(pink[400], 0.6)}`
                : `0 8px 16px ${alpha(orange[400], 0.6)}`,
            border: `4px solid ${highlightColor}`,
            transition: "transform 0.4s ease, box-shadow 0.4s ease",
            "&:hover": {
              transform: "scale(1.1)",
              boxShadow:
                theme.palette.mode === "light"
                  ? `0 12px 28px ${alpha(pink[500], 0.8)}`
                  : `0 12px 28px ${alpha(orange[500], 0.8)}`,
              cursor: "pointer",
            },
            mx: "auto",
          }}
        >
          <img
            src={myPhoto}
            alt="Sibashreeta Dash"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
            decoding="async"
            loading="lazy"
          />
        </Box>

        {/* Name */}
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{ color: highlightColor, letterSpacing: 1 }}
          gutterBottom
        >
          Sibashreeta Dash
        </Typography>

        {/* Typewriter Intro */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            minHeight: 40,
            fontFamily: "'Roboto Mono', monospace",
            color: bodyTextColor,
            letterSpacing: 0.6,
            mb: 2,
          }}
          aria-label="Typewriter introduction"
        >
          I am&nbsp;
          <span style={{ fontWeight: "bold" }}>
            <Typewriter
              words={[
                "an Engineer",
                "a Developer",
                "a Networks Enthusiast",
                "a Researcher",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1800}
            />
          </span>
        </Typography>

        {/* Experience Section */}
        <Experience />
      </Stack>
    </Box>
  );
}
