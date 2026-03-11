"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";

const columns = [
  {
    title: "Navigate",
    links: [
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Team", href: "#team" },
      { label: "Vision", href: "#vision" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Get In Touch", href: "#about" },
      { label: "Explore Projects", href: "#projects" },
    ],
  },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        borderTop: "1px solid rgba(255,255,255,0.08)",
        bgcolor: "#0A0A0F",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            gap: 4,
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Box
              sx={{
                display: "inline-flex",
                px: 2,
                py: 1,
                borderRadius: 2,

                alignSelf: "flex-start",
              }}
            >
              <Image
                src="/logo.png"
                alt="Rubix Egypt"
                width={120}
                height={40}
                style={{ objectFit: "contain" }}
              />
            </Box>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", maxWidth: 260 }}
            >
              AI-Driven Software Development & Consulting Automation
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 6 }}>
            {columns.map((col) => (
              <Box key={col.title}>
                <Typography
                  variant="overline"
                  sx={{
                    color: "text.secondary",
                    letterSpacing: 1,
                    fontWeight: 600,
                  }}
                >
                  {col.title}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 0.5,
                    mt: 1,
                  }}
                >
                  {col.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      color="text.secondary"
                      sx={{ "&:hover": { color: "primary.main" } }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
          <Box sx={{ display: "flex", gap: 0.5 }}>
            <IconButton
              href="#"
              aria-label="LinkedIn"
              sx={{ color: "text.secondary" }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              href="#"
              aria-label="GitHub"
              sx={{ color: "text.secondary" }}
            >
              <GitHubIcon />
            </IconButton>
          </Box>
        </Box>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            mt: 4,
            pt: 2,
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          © 2026 Rubix Egypt. Part of Rubix.
        </Typography>
      </Container>
    </Box>
  );
}
