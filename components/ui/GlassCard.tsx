"use client";

import { motion } from "framer-motion";
import Card from "@mui/material/Card";
import { SxProps, Theme } from "@mui/material/styles";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

interface GlassCardProps {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
  hover?: boolean;
  variant?: "default" | "border-top";
}

export default function GlassCard({
  children,
  sx = {},
  hover = true,
  variant = "default",
}: GlassCardProps) {
  const borderSx =
    variant === "border-top"
      ? { borderTop: "2px solid", borderTopColor: "primary.main" }
      : {};

  return (
    <motion.div
      variants={fadeUp}
      whileHover={hover ? { y: -6, scale: 1.02 } : undefined}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card
        sx={{
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "8px",
          ...borderSx,
          ...sx,
        }}
      >
        {children}
      </Card>
    </motion.div>
  );
}
