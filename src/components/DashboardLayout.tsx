import  { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  CssBaseline,
  Box,
  ListItemIcon,
  Switch,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { getCuteTheme } from "../theme/cuteTheme";
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import FolderIcon from '@mui/icons-material/Folder';
import ContactMailIcon from '@mui/icons-material/ContactMail';

import Home from "../pages/Home";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

const sections = [
  { name: "Home", path: "/", icon: <HomeIcon /> },
  { name: "Skills", path: "/skills", icon: <BuildIcon /> },
  { name: "Projects", path: "/projects", icon: <FolderIcon /> },
  { name: "Contact", path: "/contact", icon: <ContactMailIcon /> },
];

export default function DashboardLayout() {
  const [darkMode, setDarkMode] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = getCuteTheme(darkMode);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: "flex" }}>
          <AppBar position="fixed" color="primary" sx={{ zIndex: 1201, borderRadius: 0 }}>
            <Toolbar>
              {isMobile && (
                <IconButton
                  color="inherit"
                  edge="start"
                  onClick={() => setDrawerOpen(true)}
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
              )}
              <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
                MY PORTFOLIO
              </Typography>
              <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
            </Toolbar>
          </AppBar>

          <Drawer
            variant={isMobile ? "temporary" : "permanent"}
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            sx={{
              width: 220,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: {
                width: 220,
                boxSizing: "border-box",
                backgroundColor: theme.palette.background.paper,
                borderTopRightRadius: 16,
                borderBottomRightRadius: 16,
              },
            }}
          >
            <Toolbar />
            <List>
              {sections.map(({ name, path, icon }) => (
                <ListItemButton
                  key={name}
                  component={Link}
                  to={path}
                  onClick={() => isMobile && setDrawerOpen(false)}
                  sx={{ borderRadius: 2, my: 0.5 }}
                >
                  {icon && (
                    <ListItemIcon sx={{ color: theme.palette.text.primary }}>
                      {icon}
                    </ListItemIcon>
                  )}
                  <ListItemText
                    primary={name}
                    primaryTypographyProps={{
                      sx: {
                        color: theme.palette.text.primary,
                        fontWeight: 600,
                        fontSize: "1.1rem",
                      },
                    }}
                  />
                </ListItemButton>
              ))}
            </List>
          </Drawer>

          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              borderRadius: 4,
              backgroundColor: theme.palette.background.default,
              minHeight: "100vh",
              position: "relative",
            }}
          >
            <Toolbar />
            {/* Updated Box without absolute positioning and maxWidth */}
            <Box
              sx={{
                mt: 2,
                width: "100%",
                px: { xs: 2, sm: 3, md: 4 },
              }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Box>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}
