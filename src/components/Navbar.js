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
          gap: "28px", // Tailwind gap-7 = 1.75rem ≈ 28px
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        <li><a href="" style={linkStyle}>Home</a></li>
        <li><a href="" style={linkStyle}>About</a></li>
        <li><a href="" style={linkStyle}>Work</a></li>
        <li><a href="" style={linkStyle}>Contact</a></li>
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
