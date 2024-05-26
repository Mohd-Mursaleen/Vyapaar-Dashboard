// src/components/Dashboard.js
import React, { useContext, useEffect } from "react";
import {
  Container,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { MyContext } from "../MyContext";
import { useNavigate } from "react-router-dom";
import ChartComponent from "./ChartComponent";
import CategoryList from "./CategoryList";
import HeroComponent from "./HeroComponent";
import BankCard from "./BankCard";
import LoanInfo from "./LoanInfo";

const Dashboard = () => {
  const { state } = useContext(MyContext);
  const user = state.selectedUser;
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  if (!user) {
    return null; // Return null or a loading indicator while navigating
  }

  const {
    bank,
    name,
    account_number,
    ifsc_code,
    spend,
    loanAmount,
    statement_period,
  } = user;

  const accounts = [
    {
      bankName: bank,
      accountNumber: account_number,
      ifscCode: ifsc_code,
      holdersName: name,
      balance: loanAmount,
    },
  ];

  const categories = spend
    ? Object.keys(spend).map((key) => ({
        name: key,
        total: spend[key].total,
        subcategories: spend[key].subcategories,
      }))
    : [];

  return (
    <Container>
      <HeroComponent accounts={accounts} />
      <Box my={2}>
        <center>
          <Typography variant="h4" gutterBottom>
            Banks Accounts
          </Typography>
        </center>
        <BankCard accounts={accounts} />
      </Box>
      <LoanInfo loanAmount={loanAmount} statementPeriod={statement_period} />
      <Box textAlign="center" my={2}>
        <Typography variant="h4" component="h1" gutterBottom>
          Monthly Expenditures
        </Typography>
      </Box>
      <ChartComponent
        categories={categories.filter((category) => category.name !== "Income")}
      />
      <TableContainer component={Paper} sx={{ my: 2 }}>
        <Table sx={{ minWidth: 650, border: 1, borderColor: "grey.300" }}>
          <TableHead sx={{ backgroundColor: "grey.200" }}>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Category</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>
                Total Subcategory Value
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((category, index) => (
              <CategoryList key={index} category={category} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Dashboard;
