import { Box, useTheme, keyframes } from "@mui/material";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import SpaIcon from "@mui/icons-material/Spa";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";
import EmojiNatureTwoToneIcon from "@mui/icons-material/EmojiNatureTwoTone";
import LocalFloristTwoToneIcon from "@mui/icons-material/LocalFloristTwoTone";

import BedtimeSharpIcon from "@mui/icons-material/BedtimeSharp";
import StarBorderPurple500SharpIcon from "@mui/icons-material/StarBorderPurple500Sharp";
import StarIcon from "@mui/icons-material/Star";
import Brightness2Icon from "@mui/icons-material/Brightness2";

const float = keyframes`
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-48px); }  /* doubled from -24px */
  100% { transform: translateY(0); }
`;

// Base configs with 4x original sizes (60 * 4 = 240 etc.)
const lightBaseIcons = [
  { icon: <LocalFloristIcon />, color: "#f48fb1", size: 240 },
  { icon: <SpaIcon />, color: "#4db6ac", size: 280 },
  { icon: <FilterVintageIcon />, color: "#ffb74d", size: 220 },
  { icon: <EmojiNatureTwoToneIcon />, color: "#9575cd", size: 260 },
  { icon: <LocalFloristTwoToneIcon />, color: "#7986cb", size: 232 },
];

const darkBaseIcons = [
  { icon: <BedtimeSharpIcon />, color: "#90caf9", size: 280 },
  { icon: <StarIcon />, color: "#ce93d8", size: 260 },
  { icon: <StarBorderPurple500SharpIcon />, color: "#f48fb1", size: 232 },
  { icon: <Brightness2Icon />, color: "#7986cb", size: 248 },
  { icon: <StarIcon />, color: "#64b5f6", size: 300 },
];

const generateFloatingIcons = (baseIcons: any[], count = 30) => {
  const icons = [];
  for (let i = 0; i < count; i++) {
    const icon = baseIcons[i % baseIcons.length];
    icons.push({
      ...icon,
      top: `${Math.random() * 90}%`,
      left: `${Math.random() * 90}%`,
      delay: `${(Math.random() * 4).toFixed(1)}s`,
      floatSpeed: `${6 + Math.random() * 4}s`,
      opacity: 0.3 + Math.random() * 0.4,
    });
  }
  return icons;
};

export default function BackgroundDecorations() {
  const theme = useTheme();
  const baseIcons = theme.palette.mode === "light" ? lightBaseIcons : darkBaseIcons;
  const floatingIcons = generateFloatingIcons(baseIcons, 30);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {floatingIcons.map((item, i) => (
        <Box
          key={i}
          sx={{
            position: "absolute",
            top: item.top,
            left: item.left,
            animation: `${float} ${item.floatSpeed} ease-in-out infinite`,
            animationDelay: item.delay,
            color: item.color,
            fontSize: item.size,
            opacity: item.opacity,
            userSelect: "none",
          }}
        >
          {item.icon}
        </Box>
      ))}
    </Box>
  );
}
