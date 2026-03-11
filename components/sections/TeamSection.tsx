"use client";

import { motion } from "framer-motion";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";

const team = [
  {
    initials: "HD",
    name: "Mr. Hisham Darwish",
    role: "GENERAL MANAGER",
    desc: "Executive oversight, strategic direction, and milestone approval.",
    color: "#9c27b0",
    image: null as string | null,
  },
  {
    initials: "YB",
    name: "Youssef El-Badry",
    role: "TECHNICAL TEAM LEAD & LEAD AI ARCHITECT",
    desc: "Leads technical delivery, system architecture, and AI design.",
    color: "#9c27b0",
    image: null as string | null,
  },
  {
    initials: "AN",
    name: "Abdelrhman Nashaat",
    role: "CO-LEAD – FLUTTER DEVELOPER",
    desc: "Guides technical strategy, Flutter development, and advanced feature implementation.",
    color: "#9c27b0",
    image: null as string | null,
  },
  {
    initials: "ME",
    name: "Mahmoud El-Naha",
    role: "AI ENGINEER",
    desc: "Develops AI pipelines, evaluates models, and optimizes outputs.",
    tag: "AI",
    color: "#2e7d32",
    image: null as string | null,
  },
  {
    initials: "AW",
    name: "Abdallah Wagih",
    role: "AI ENGINEER",
    desc: "Builds AI generation workflows and manages data pipelines.",
    tag: "AI",
    color: "#2e7d32",
    image: null as string | null,
  },
  {
    initials: "YK",
    name: "Youssef Khaled",
    role: "BACKEND DEVELOPER",
    desc: "Develops backend APIs, workflow logic, and system integration.",
    tag: "Backend",
    color: "#ed6c02",
    image: null as string | null,
  },
  {
    initials: "AF",
    name: "Abdelrhman Fathy",
    role: "WEB DEVELOPER",
    desc: "Builds web interfaces and integrates frontend with backend services.",
    tag: "Frontend",
    color: "#0288d1",
    image: null as string | null,
  },
  {
    initials: "ZA",
    name: "Zeyad Abdelazim",
    role: "UI/UX TEAM LEADER",
    desc: "Leads design strategy, user journeys, and UX standards.",
    tag: "UI/UX Lead",
    color: "#BE0E5B",
    image: null as string | null,
  },
  {
    initials: "AK",
    name: "Aladdin Khaled",
    role: "UI/UX DESIGNER",
    desc: "Designs UI layouts, prototypes, and user interaction flows.",
    tag: "UI/UX",
    color: "#BE0E5B",
    image: null as string | null,
  },
];

const stagger = {
  visible: { transition: { staggerChildren: 0.06 } },
  hidden: {},
};
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

function MemberCard({
  initials,
  name,
  role,
  desc,
  tag,
  color,
  image,
}: {
  initials: string;
  name: string;
  role: string;
  desc: string;
  tag?: string;
  color: string;
  image?: string | null;
}) {
  return (
    <Card
      sx={{
        height: "100%",
        bgcolor: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 3,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        transition: "all 0.25s ease",
        "&:hover": {
          borderColor: "rgba(190, 14, 91, 0.35)",
          bgcolor: "rgba(255,255,255,0.05)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.24)",
        },
      }}
    >
      <Box sx={{ p: 2.5, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <Box
          sx={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            overflow: "hidden",
            flexShrink: 0,
            bgcolor: color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid",
            borderColor: "rgba(255,255,255,0.1)",
            mb: 1.5,
          }}
        >
          {image ? (
            <Image
              src={image}
              alt={name}
              width={72}
              height={72}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          ) : (
            <Typography sx={{ fontWeight: 700, color: "#fff", fontSize: "1.25rem" }}>
              {initials}
            </Typography>
          )}
        </Box>
        <Typography fontWeight={700} sx={{ fontSize: "1.05rem", color: "text.primary" }}>
          {name}
        </Typography>
        <Chip
          label={role}
          size="small"
          sx={{
            mt: 0.75,
            mb: 1,
            px: 1,
            py: 0.25,
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: 0.5,
            bgcolor: `${color}22`,
            color: color,
            border: "1px solid",
            borderColor: `${color}44`,
          }}
        />
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", lineHeight: 1.65, fontSize: "0.875rem" }}
        >
          {desc}
        </Typography>
        {tag && (
          <Chip
            label={tag}
            size="small"
            sx={{
              mt: 1.5,
              bgcolor: "rgba(255,255,255,0.06)",
              color: "text.secondary",
              fontWeight: 600,
              fontSize: "0.7rem",
            }}
          />
        )}
      </Box>
    </Card>
  );
}

export default function TeamSection() {
  return (
    <SectionWrapper id="team" label="THE PEOPLE BEHIND IT">
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Typography variant="h2" sx={{ fontWeight: 700, mb: 1 }}>
          Rubix{" "}
          <Box component="span" sx={{ color: "primary.main" }}>
            Egypt Team
          </Box>
        </Typography>
        <Typography
          sx={{
            color: "text.secondary",
            maxWidth: 560,
            mx: "auto",
            lineHeight: 1.7,
          }}
        >
          A focused team of engineers, AI specialists, designers, and
          strategists — building the platforms that power Rubix&apos;s mission.
        </Typography>
      </Box>
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <Grid container spacing={3}>
          {team.map((m) => (
            <Grid item xs={12} sm={6} md={4} key={m.name}>
              <motion.div variants={fadeUp}>
                <MemberCard
                  initials={m.initials}
                  name={m.name}
                  role={m.role}
                  desc={m.desc}
                  tag={m.tag}
                  color={m.color}
                  image={m.image}
                />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </SectionWrapper>
  );
}
