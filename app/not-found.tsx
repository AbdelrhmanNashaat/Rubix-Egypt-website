"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function NotFound() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#0A0A0F",
        textAlign: "center",
        px: 2,
      }}
    >
      <Typography
        variant="h1"
        sx={{ fontSize: "6rem", fontWeight: 700, color: "primary.main", lineHeight: 1 }}
      >
        404
      </Typography>
      <Typography variant="h5" sx={{ mt: 2, mb: 1, fontWeight: 600 }}>
        Page Not Found
      </Typography>
      <Typography sx={{ color: "text.secondary", mb: 4 }}>
        The page you are looking for doesn&apos;t exist or has been moved.
      </Typography>
      <Button
        variant="contained"
        href="/"
        sx={{ bgcolor: "primary.main", "&:hover": { bgcolor: "primary.dark" } }}
      >
        Back to Home
      </Button>
    </Box>
  );
}
