"use client";

import { motion } from "framer-motion";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import WebIcon from "@mui/icons-material/Web";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import SettingsIcon from "@mui/icons-material/Settings";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GlassCard from "@/components/ui/GlassCard";

const capabilities = [
  { icon: WebIcon, label: "Web platforms" },
  { icon: PhoneAndroidIcon, label: "Mobile applications" },
  { icon: SmartToyIcon, label: "AI agents" },
  { icon: SettingsIcon, label: "Consulting automation systems" },
];


const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
  hidden: {},
};
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutSection() {
  return (
    <SectionWrapper id="about" label="ABOUT US">
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={7}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <motion.div variants={fadeUp}>
              <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
                About Rubix Egypt
              </Typography>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Typography sx={{ color: "text.secondary", mb: 2, lineHeight: 1.8 }}>
                Rubix Egypt is a specialized software engineering and AI development team operating within Rubix, focused on building intelligent digital solutions that enhance consulting services and drive technological innovation. Our mission is to develop advanced systems that automate consulting workflows, improve data-driven decision-making, and empower organizations through scalable technology.
              </Typography>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Typography sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}>
                Our team consists of 8 engineers with expertise in software development, artificial intelligence, and system architecture. We are currently working on two active development projects, while also conducting AI research and competitive analysis to advance automation in consulting and business operations.
              </Typography>
            </motion.div>
            <Typography sx={{ fontWeight: 600, mb: 1.5 }}>At Rubix Egypt, we design and develop:</Typography>
            <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
              {[
                "Web platforms for scalable digital services",
                "Mobile applications for seamless user experiences",
                "AI agents that support intelligent automation",
                "Consulting automation systems that streamline complex workflows",
              ].map((text) => (
                <motion.li
                  key={text}
                  variants={fadeUp}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 8,
                    color: "text.secondary",
                  }}
                >
                  <CheckCircleOutlineIcon sx={{ color: "primary.main", fontSize: 20 }} />
                  {text}
                </motion.li>
              ))}
            </Box>
            <motion.div variants={fadeUp}>
              <Typography sx={{ color: "text.secondary", mt: 2, lineHeight: 1.8 }}>
                Our work focuses on transforming traditional consulting processes into scalable, AI-powered digital services, enabling Rubix and its partners to deliver smarter, faster, and more efficient solutions.
              </Typography>
            </motion.div>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={5}>
          <GlassCard hover={false} sx={{ p: 3 }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 2,
                "& .MuiSvgIcon-root": { color: "primary.main", fontSize: 32 },
              }}
            >
              {capabilities.map(({ icon: Icon, label }) => (
                <Box
                  key={label}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1,
                    p: 2,
                    borderRadius: 1,
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <Icon />
                  <Typography variant="body2" sx={{ color: "text.secondary", textAlign: "center" }}>
                    {label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </GlassCard>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}
