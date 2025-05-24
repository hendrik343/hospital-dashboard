import React, { useState } from "react";

export default function HospitalUploader() {
  const [hospital, setHospital] = useState("HMRH");
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return alert("Seleciona um ficheiro PDF primeiro!");

    const formData = new FormData();
    formData.append("hospital", hospital);
    formData.append("file", file);

    await fetch("http://localhost:3001/upload", {
      method: "POST",
      body: formData,
    });

    alert("Relatório enviado com sucesso!");
  };

  return (
    <div>
      <select value={hospital} onChange={(e) => setHospital(e.target.value)}>
        <option value="HMRH">HMRH - Huambo</option>
        <option value="HMRL">HMRL - Luena</option>
        <option value="HMRC">HMRC - Cabinda</option>
      </select>
      <input type="file" accept=".pdf" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Enviar Relatório</button>
    </div>
  );
}
