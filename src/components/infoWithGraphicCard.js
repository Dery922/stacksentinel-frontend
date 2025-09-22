import React from "react";
import "./style.css";
import { Card, Grid, Typography, Box } from "@mui/material";

const InfoWithGraphCard = () => {
  return (
    <Card sx={{ p: 3, boxShadow: 3, borderRadius: 3 }}>
      <Typography variant="h5" fontWeight="bold">
        Screen Time
      </Typography>

      <div className="line"></div>
      <Grid container spacing={2}>
        {/* Left: Info Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="body1" mt={2}>
            Name: Jane Doe
          </Typography>
          <Typography variant="body1">Age: 28</Typography>
          <Typography variant="body1">Diagnosis: Hypertension</Typography>
        </Grid>

        {/* Right: Graph Section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: "200px",
              backgroundColor: "#f0f4f8",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 2,
            }}
          >
            {/* Placeholder for chart */}
            <Typography color="text.secondary"></Typography>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default InfoWithGraphCard;
