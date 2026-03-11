"use client";

import { motion } from "framer-motion";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function VisionSection() {
  return (
    <Box
      component="section"
      id="vision"
      sx={{
        py: 12,
        position: "relative",
        overflow: "hidden",
        background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(38,3,18,0.35) 0%, transparent 70%)",
      }}
    >
      <Box sx={{ position: "relative", zIndex: 1, maxWidth: 720, mx: "auto", textAlign: "center", px: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              background: "linear-gradient(135deg, #BE0E5B, #FF6B9D)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Future Vision
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 2, lineHeight: 1.8 }}>
            Rubix Egypt aims to be a leading technology hub, empowering Rubix&apos;s consulting services with cutting-edge software systems and AI-powered platforms.
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8 }}>
            Our goal is to create intelligent tools that transform how consulting is delivered—making processes faster, smarter, and easier to scale—so organizations can achieve results more efficiently and effectively.
          </Typography>
          <Button
            component={motion.a}
            href="#about"
            variant="contained"
            size="large"
            sx={{
              bgcolor: "primary.main",
              px: 4,
              py: 1.5,
              "&:hover": { bgcolor: "primary.dark" },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Join Our Journey
          </Button>
        </motion.div>
      </Box>
      {/* Abstract lines decoration */}
      <Box
        component="svg"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          width: "100%",
          height: 120,
          opacity: 0.06,
          pointerEvents: "none",
        }}
        viewBox="0 0 1200 120"
        fill="none"
      >
        <motion.path
          d="M0 60 Q300 20 600 60 T1200 60"
          stroke="url(#lineGrad)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop stopColor="#BE0E5B" />
            <stop offset="1" stopColor="#FF6B9D" />
          </linearGradient>
        </defs>
      </Box>
    </Box>
  );
}
