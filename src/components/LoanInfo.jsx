// src/components/LoanInfo.js
import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { styled } from "@mui/system";

const StyledPaper = styled(Paper)({
  padding: "20px",
  margin: "20px 0",
  background: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)",
  color: "black",
});

const LoanInfo = ({ loanAmount, statementPeriod }) => {
  return (
    <StyledPaper>
      <Typography variant="h6" gutterBottom>
        Loan Information
      </Typography>
      <Typography variant="body1">
        <strong>Loan Amount:</strong> ₹ {loanAmount.toLocaleString()}
      </Typography>
      <Typography variant="body1">
        <strong>Loan Tenure:</strong> 1 yr
      </Typography>
      <Typography variant="body1">
        <strong>Statement Period:</strong> {statementPeriod.from} to{" "}
        {statementPeriod.to}
      </Typography>
    </StyledPaper>
  );
};

export default LoanInfo;
