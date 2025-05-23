import React from "react";

function Navbar() {
  return (
    <nav
      style={{
        height: "60px",
        width: "100%",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "0 20px",
        boxSizing: "border-box",
      }}
    >
      <ul
        style={{
          display: "flex",
          gap: "28px", 
          cursor:'pointer',
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        <li>Home</li>
        <li>About</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "white",
  fontWeight: "500",
  fontSize: "16px",
};

export default Navbar;
