// src/components/BankCard.js
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  Grid,
} from "@mui/material";
import { styled } from "@mui/system";

const StyledCard = styled(Card)({
  maxWidth: 345,
  margin: "0 auto",
  marginBottom: "1rem", // Added margin bottom for spacing between cards
  background: "linear-gradient(135deg, #6b73ff 0%, #000dff 100%)",
  color: "white",
});

const getInitials = (name) => {
  const words = name.split(" ");
  const initials = words.map((word) => word.charAt(0)).join("");
  return initials;
};

const BankCard = ({ accounts }) => {
  return (
    <Grid container spacing={2}>
      {accounts.map((account, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <StyledCard>
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                <Avatar
                  src={account.logo}
                  alt={account.bankName}
                  sx={{
                    width: 56,
                    height: 56,
                    mr: 2,
                    bgcolor: account.logo ? "transparent" : "#3f51b5",
                  }}
                >
                  {!account.logo && getInitials(account.bankName)}
                </Avatar>
                <Typography variant="h5" component="div">
                  {account.bankName}
                </Typography>
              </Box>
              <Typography variant="body1">
                <strong>Account Number:</strong> {account.accountNumber}
              </Typography>
              <Typography variant="body1">
                <strong>IFSC Code:</strong> {account.ifscCode}
              </Typography>
              <Typography variant="body1">
                <strong>Holder's Name:</strong> {account.holdersName}
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default BankCard;
