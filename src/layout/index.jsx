import React from "react";
import AppMenuBar from "./AppMenuBar";

export default function Layout({ children }) {
  return (
    <div>
      <AppMenuBar />
      {children}
    </div>
  );
}
