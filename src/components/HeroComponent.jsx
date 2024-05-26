// src/components/HeroComponent.jsx
import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Grid,
} from "@mui/material";
import { styled } from "@mui/system";

const GradientBox = styled(Box)({
  background: "linear-gradient(135deg, #6b73ff 0%, #000dff 100%)",
  color: "white",
  padding: "20px",
  borderRadius: "8px",
});

const HeroComponent = ({ accounts }) => {
  const totalBalance = accounts.reduce(
    (sum, account) => sum + (account.balance || 0),
    0
  );
  const numberOfAccounts = accounts.length;

  const getInitials = (name) => {
    const words = name.split(" ");
    const initials = words.map((word) => word.charAt(0)).join("");
    return initials;
  };

  return (
    <GradientBox textAlign="center" my={2}>
      <Typography variant="h4" gutterBottom>
        User Accounts Overview
      </Typography>
      <Typography variant="h6" gutterBottom>
        Total Balance: ₹ {totalBalance.toLocaleString()}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Number of Accounts: {numberOfAccounts}
      </Typography>
      <List>
        {accounts.map((account, index) => (
          <ListItem key={index}>
            <Grid container alignItems="center">
              <Grid item xs={2}>
                <Avatar
                  src={account.logo}
                  alt={account.bankName}
                  sx={{ bgcolor: account.logo ? "transparent" : "#3f51b5" }}
                >
                  {!account.logo && getInitials(account.bankName)}
                </Avatar>
              </Grid>

              <Grid item xs={10}>
                <ListItemText
                  primary={`${
                    account.bankName
                  }: ₹ ${account.balance?.toLocaleString()}`}
                  secondary={`Account Number: ${account.accountNumber}`}
                  secondaryTypographyProps={{
                    style: { color: "rgba(255, 255, 255, 0.7)" },
                  }}
                />
              </Grid>
            </Grid>
          </ListItem>
        ))}
      </List>
    </GradientBox>
  );
};

export default HeroComponent;
