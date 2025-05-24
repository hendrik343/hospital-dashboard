import React from "react";
import HospitalUploader from "./components/HospitalUploader";

export default function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Hospital Dashboard</h1>
      <HospitalUploader />
    </div>
  );
}
