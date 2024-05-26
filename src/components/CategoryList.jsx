// src/components/CategoryList.js
import React, { useState } from "react";
import {
  TableRow,
  TableCell,
  Collapse,
  IconButton,
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { styled } from "@mui/system";
import { Pie } from "react-chartjs-2";

const SubcategoryText = styled(ListItemText)({
  fontSize: "0.875rem",
  color: "rgba(0, 0, 0, 0.8)", // Darker text
});

const generatePieData = (subcategories) => ({
  labels: subcategories ? Object.keys(subcategories) : [],
  datasets: [
    {
      data: subcategories ? Object.values(subcategories) : [],
      backgroundColor: [
        "rgba(75, 192, 192, 0.6)",
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(153, 102, 255, 0.6)",
        "rgba(255, 159, 64, 0.6)",
      ],
    },
  ],
});

const pieOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
  },
};

const CategoryList = ({ category }) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <TableRow onClick={handleClick} sx={{ cursor: "pointer" }}>
        <TableCell>
          <Box display="flex" alignItems="center">
            <IconButton size="small">
              {open ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              {category.name}
            </Typography>
          </Box>
        </TableCell>
        <TableCell>&#8377; {category.total}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={2} sx={{ padding: 0 }}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box display="flex">
              <List component="div" disablePadding sx={{ flex: 1 }}>
                {category.subcategories &&
                  Object.entries(category.subcategories).map(
                    ([name, value], index) => (
                      <ListItem key={index} sx={{ padding: "2px 16px" }}>
                        <SubcategoryText primary={`${name}: ₹ ${value}`} />
                      </ListItem>
                    )
                  )}
              </List>
              <Box sx={{ flex: 1, width: "200px", height: "200px" }}>
                <Pie
                  data={generatePieData(category.subcategories)}
                  options={pieOptions}
                />
              </Box>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default CategoryList;
