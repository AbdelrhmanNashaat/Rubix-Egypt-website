"use client";

import { motion } from "framer-motion";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

interface SectionWrapperProps {
  children: React.ReactNode;
  label?: string;
  id?: string;
  sx?: object;
}

export default function SectionWrapper({
  children,
  label,
  id,
  sx = {},
}: SectionWrapperProps) {
  return (
    <Box
      id={id}
      component="section"
      sx={{ py: { xs: 6, md: 10 }, ...sx }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.01 }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {label && (
            <Typography
              variant="overline"
              sx={{
                color: "primary.main",
                letterSpacing: 2,
                fontWeight: 600,
                display: "block",
                mb: 1,
              }}
            >
              {label}
            </Typography>
          )}
          {children}
        </motion.div>
      </Container>
    </Box>
  );
}
