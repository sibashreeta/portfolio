import React from "react";
import {
  Box,
  Typography,
  Link,
  useTheme,
  IconButton,
  Divider,
} from "@mui/material";

import {
  pink,
  orange
} from "@mui/material/colors";

import BackgroundDecorations from "../theme/BackgroundDecorations";

import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import BuildIcon from "@mui/icons-material/Build";
import CodeIcon from "@mui/icons-material/Code";
import InfoIcon from "@mui/icons-material/Info";
import LinkIcon from "@mui/icons-material/Link";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

// Projects array
const projects = [
  {
    name: "Analyzing the Network Traffic in the Snowflake Bridge of TOR",
    tech: "Wireshark, Network Traffic Analysis, WebRTC, Protocol Analysis",
    about:
      "Conducted an in-depth analysis of the Tor Bridge Snowflake’s network traffic to investigate its obfuscation techniques for bypassing censorship.\nCompared Snowflake traffic patterns with Firefox web browsing and Zoom web meetings using Wireshark.\nIdentified key similarities between Snowflake’s obfuscated traffic and WebRTC-based video conferencing, enhancing understanding of its anonymity features.",
    link: "https://ieeexplore.ieee.org/document/10885604",
  },
  {
    name: "TeamTrace",
    tech: "React, TypeScript, Tailwind CSS, MUI, Bootstrap, Vite",
    about:
      "TeamTrace is a modern, real-time employee management system that enables location-aware attendance tracking, availability monitoring, and secure internal communication — all in one platform.",
    link: "https://relaxed-banoffee-4de8bd.netlify.app/", // <-- Replace with actual link
  },
  {
    name: "Responsive Personal Portfolio",
    tech: "React, TypeScript, Tailwind CSS, MUI, Bootstrap, Vite",
    about:
      "Crafted a visually appealing, responsive personal portfolio using a modern tech stack. Features light/dark themes, floating animations, and a hybrid of MUI, Tailwind, and Bootstrap for a unique look. Designed to showcase projects, skills, and research work in a structured, interactive manner.",
    link: "https://unique-conkies-7951e2.netlify.app/", // <-- Replace with actual link
  },
  {
    name: "CRUD Application for Maintenance",
    tech: "React, JavaScript, HTML, CSS, Firebase, Netlify",
    about:
      "Built a web-based CRUD application to manage vehicle management data with a dynamic and responsive UI.\nIntegrated Firebase for data storage and real-time updates.\nDeployed the app on Netlify for hosting and accessibility.",
    link: "https://studentmgmtapp.netlify.app/",
  },
  {
    name: "TheRoad: Dynamic Travel Planning Platform",
    tech: "HTML5, CSS3, JavaScript",
    about:
      "Developed a responsive travel planning website that helps users organize trips by selecting destinations, creating itineraries, and managing budgets.\nDesigned smooth and interactive front-end features for engaging UX.",
    link: "https://github.com/sibashreeta/TheRoad",
  },
  {
    name: "PacketDetector: Static Malware Detection Tool for PE Files",
    tech: "Python, Tkinter, Shannon Entropy, File I/O",
    about:
      "Designed a tool to analyze PE files for malware using Shannon entropy to detect packed/obfuscated sections.\nHandles large files (up to 500MB).\nIncludes GUI via Tkinter for browsing and scanning files.",
    link: "https://github.com/sibashreeta/PacketDetector",
  },
];

export default function ProjectsPage() {
  const theme = useTheme();
  const textColor = theme.palette.mode === "light" ? pink[800] : orange[600];
  const cardBg = theme.palette.mode === "light" ? pink[50] : "#4E342E";
  const hoverBg = theme.palette.mode === "light" ? pink[100] : "#5D4037";

  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <Box
      sx={{
        zIndex: 3,
        position: "relative",
        maxWidth: 900,
        margin: "auto",
        padding: 3,
        color: textColor,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <BackgroundDecorations />

      {/* Header */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
        <FolderOpenIcon sx={{ mr: 1.5, fontSize: 36, color: textColor }} />
        <Typography
          variant="h4"
          component="h1"
          fontWeight="bold"
          sx={{ userSelect: "none" }}
        >
          Projects
        </Typography>
      </Box>

      {/* Project Cards */}
      {projects.map((project, i) => {
        const isExpanded = expandedIndex === i;

        return (
          <Box
            key={i}
            sx={{
              backgroundColor: cardBg,
              borderRadius: 3,
              p: 3,
              mb: 3,
              boxShadow: 4,
              cursor: "pointer",
              zIndex: 3,
              position: "relative",
              transition: "background-color 0.3s",
              "&:hover": {
                backgroundColor: hoverBg,
              },
            }}
            onClick={() => toggleExpand(i)}
          >
            {/* Title Bar */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: isExpanded ? 2 : 0,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <BuildIcon sx={{ mr: 1, fontSize: 26, color: textColor }} />
                <Typography variant="h6" fontWeight="bold">
                  {project.name.startsWith("Analyzing")
                    ? `Research Work: ${project.name}`
                    : `Project Name: ${project.name}`}
                </Typography>
              </Box>
              <IconButton size="small" sx={{ color: textColor }}>
                {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </Box>

            {/* Expanded Details */}
            {isExpanded && (
              <>
                <Divider sx={{ borderColor: textColor, mb: 2 }} />

                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <CodeIcon sx={{ mr: 1, color: textColor }} />
                  <Typography variant="subtitle1">
                    <strong>Technologies Used:</strong> {project.tech}
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "flex-start", mb: 1 }}>
                  <InfoIcon sx={{ mr: 1, mt: "4px", color: textColor }} />
                  <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
                    <strong>
                      About the{" "}
                      {project.name.startsWith("Analyzing")
                        ? "Research"
                        : "Project"}
                      :
                    </strong>{" "}
                    {project.about}
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <LinkIcon sx={{ mr: 1, color: textColor }} />
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                    sx={{ color: textColor, fontWeight: 500 }}
                  >
                    Visit Link
                  </Link>
                </Box>
              </>
            )}
          </Box>
        );
      })}
    </Box>
  );
}
