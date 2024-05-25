// src/components/Dashboard.js
import React from "react";
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
  Grid,
} from "@mui/material";
import ChartComponent from "./ChartComponent";
import CategoryList from "./CategoryList";
import HeroComponent from "./HeroComponent";
import BankCard from "./BankCard";

const accounts = [
  {
    bankName: "State Bank of India",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/SBI-logo.svg/2048px-SBI-logo.svg.png",
    accountNumber: "1234567890",
    ifscCode: "SBIN0001234",
    holdersName: "John Doe",
    balance: 50000,
  },
  {
    bankName: "Punjab National Bank",
    logo: "https://www.dialabank.com/wp-content/uploads/2020/04/pnb2-1.jpg",
    accountNumber: "0987654321",
    ifscCode: "PUNB0001234",
    holdersName: "Jane Doe",
    balance: 30000,
  },
  {
    bankName: "HDFC Bank",
    logo: "https://1000logos.net/wp-content/uploads/2021/06/HDFC-Bank-emblem.png",
    accountNumber: "1122334455",
    ifscCode: "HDFC0001234",
    holdersName: "Jim Doe",
    balance: 45000,
  },
];

const data = {
  Categories: [
    {
      name: "Housing and Utilities",
      value: "Housing",
      Subcategories: [
        { name: "Rent or mortgage", value: 1200 },
        { name: "Electricity bill", value: 150 },
        { name: "Water bill", value: 60 },
        { name: "Gas bill", value: 80 },
        { name: "Internet bill", value: 50 },
        { name: "Phone bill", value: 70 },
      ],
    },
    {
      name: "Transportation",
      value: "Transport",
      Subcategories: [
        { name: "Fuel", value: 200 },
        { name: "Public transport", value: 100 },
        { name: "Vehicle maintenance", value: 300 },
        { name: "Vehicle insurance", value: 400 },
      ],
    },
    {
      name: "Food and Groceries",
      value: "Food",
      Subcategories: [
        { name: "Groceries", value: 500 },
        { name: "Dining out", value: 250 },
        { name: "Food delivery", value: 100 },
      ],
    },
    {
      name: "Healthcare",
      value: "Health",
      Subcategories: [
        { name: "Medical bills", value: 600 },
        { name: "Pharmacy", value: 150 },
        { name: "Health insurance", value: 200 },
      ],
    },
    {
      name: "Debt Repayment",
      value: "Debt",
      Subcategories: [
        { name: "Credit card payments", value: 300 },
        { name: "Loan payments", value: 1000 },
        { name: "Other debt-related expenses", value: 400 },
      ],
    },
    {
      name: "Savings and Investments",
      value: "Savings",
      Subcategories: [
        { name: "Savings account deposits", value: 700 },
        { name: "Investment contributions", value: 800 },
      ],
    },
    {
      name: "Insurance",
      value: "Insurance",
      Subcategories: [
        { name: "Life insurance", value: 500 },
        { name: "Home insurance", value: 400 },
        { name: "Other insurance premiums", value: 300 },
      ],
    },
    {
      name: "Entertainment and Leisure",
      value: "Leisure",
      Subcategories: [
        { name: "Subscriptions", value: 100 },
        { name: "Event tickets", value: 200 },
        { name: "Hobbies and sports", value: 150 },
      ],
    },
    {
      name: "Education",
      value: "Education",
      Subcategories: [
        { name: "Tuition fees", value: 2000 },
        { name: "School supplies", value: 150 },
        { name: "Courses and workshops", value: 300 },
      ],
    },
    {
      name: "Shopping",
      value: "Shopping",
      Subcategories: [
        { name: "Clothing and accessories", value: 250 },
        { name: "Electronics", value: 1000 },
        { name: "Home furnishings", value: 500 },
      ],
    },
    {
      name: "Miscellaneous",
      value: "Misc",
      Subcategories: [
        { name: "Gifts and donations", value: 150 },
        { name: "Pet expenses", value: 200 },
        { name: "Legal fees", value: 300 },
      ],
    },
    {
      name: "Income",
      value: "Income",
      Subcategories: [
        { name: "Salary", value: 5000 },
        { name: "Business income", value: 7000 },
        { name: "Other income sources", value: 1500 },
      ],
    },
  ],
};

const Dashboard = () => {
  return (
    <Container>
      <HeroComponent accounts={accounts} />
      <BankCard accounts={accounts} />
      <Box textAlign="center" my={2}>
        <Typography variant="h4" component="h1" gutterBottom>
          Monthly Expenditures
        </Typography>
      </Box>

      <ChartComponent data={data} />
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
            {data.Categories.map((category, index) => (
              <CategoryList key={index} category={category} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Dashboard;
