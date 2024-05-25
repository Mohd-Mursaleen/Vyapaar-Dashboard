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

const SubcategoryText = styled(ListItemText)({
  fontSize: "0.875rem",
  color: "rgba(0, 0, 0, 0.8)", // Darker text
});

const CategoryList = ({ category }) => {
  const [open, setOpen] = useState(false);

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
        <TableCell>
          &#8377;{" "}
          {category.Subcategories.reduce((sum, sub) => sum + sub.value, 0)}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={2} sx={{ padding: 0 }}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {category.Subcategories.map((sub, index) => (
                <ListItem key={index} sx={{ padding: "2px 16px" }}>
                  <SubcategoryText primary={`${sub.name}: ₹ ${sub.value}`} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default CategoryList;
