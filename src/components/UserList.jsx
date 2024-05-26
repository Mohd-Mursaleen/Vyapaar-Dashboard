// src/components/UserList.js
import React, { useContext } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../MyContext";

const UserList = () => {
  const { state, selectUser } = useContext(MyContext);
  const navigate = useNavigate();

  const handleUserClick = async (user) => {
    await selectUser(user.username);
    navigate("/dashboard");
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Username</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.users.map((user) => (
            <TableRow
              key={user.id}
              onClick={() => handleUserClick(user)}
              sx={{ cursor: "pointer" }}
            >
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.username}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserList;
