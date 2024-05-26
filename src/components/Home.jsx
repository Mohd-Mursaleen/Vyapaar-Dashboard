// src/components/Home.js
import React from "react";
import UserList from "./UserList";

const Home = () => {
  return (
    <div>
      <center>
        <img
          src="https://res.cloudinary.com/dbel1jon0/image/upload/v1716709345/syhyfck6zlzpkgowbxza.webp"
          alt=""
          style={{ width: "5rem", mixBlendMode: "multiply" }}
        />
        <h1>Vyapaar</h1>
      </center>
      <h2>Users:-</h2>
      <UserList />
    </div>
  );
};

export default Home;
