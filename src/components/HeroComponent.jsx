// src/components/HeroComponent.js
import React from "react";
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Avatar,
} from "@mui/material";
import { styled } from "@mui/system";

const HeroContainer = styled(Box)({
  background:
    "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
  color: "white",
  padding: "2rem 1rem",
  borderRadius: "8px",
  textAlign: "center",
});

const DataContainer = styled(Box)({
  marginTop: "1rem",
  display: "flex",
  justifyContent: "space-between",
});

const DataItem = styled(Box)({
  fontSize: "1.5rem",
  marginBottom: "1rem",
});

const HeroComponent = ({ accounts }) => {
  const totalAmount = accounts.reduce(
    (acc, account) => acc + account.balance,
    0
  );
  const numberOfAccounts = accounts.length;

  return (
    <HeroContainer>
      <Container>
        <Typography variant="h3" component="h1" gutterBottom>
          Dashboard Overview
        </Typography>
        <DataContainer>
          <Box textAlign="left" width="40%">
            <Typography variant="h6" gutterBottom>
              Bank Accounts
            </Typography>
            <List>
              {accounts.map((account, index) => (
                <ListItem key={index} divider>
                  <Avatar
                    src={account.logo}
                    alt={account.bankName}
                    sx={{ width: 24, height: 24, mr: 2 }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/24";
                    }}
                  />
                  <ListItemText
                    primary={`${
                      account.bankName
                    }: ₹${account.balance.toLocaleString()}`}
                    secondary={`Account Number: ${account.accountNumber}`}
                    sx={{
                      "& .MuiListItemText-secondary": {
                        color: "rgba(255, 255, 255, 0.7)", // Off-white color
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
          <Box textAlign="right" width="55%">
            <DataItem>
              <Typography variant="h5">Total Amount</Typography>
              <Typography variant="h6">
                ₹{totalAmount.toLocaleString()}
              </Typography>
            </DataItem>
            <DataItem>
              <Typography variant="h5">Number of Active Accounts</Typography>
              <Typography variant="h6">{numberOfAccounts}</Typography>
            </DataItem>
          </Box>
        </DataContainer>
      </Container>
    </HeroContainer>
  );
};

export default HeroComponent;
