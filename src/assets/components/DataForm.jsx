import React, { useState } from "react";

const DataForm = ({ setQrCodeUrl }) => {
  const [qrCodeValue, setQrCodeValue] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setQrCodeValue("");
    setQrCodeUrl("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setQrCodeUrl(qrCodeValue)
  }

  return (
    <form className="data-form fadeInUp" onSubmit={handleSubmit}>
      <h4>Insira abaixo o seu texto, site ou conteúdo que deseja converter</h4>
      <textarea
        name="qrcode-content"
        id="qrcode-content"
        cols="30"
        rows="1"
        placeholder="Digite seu conteúdo aqui..."
        value={qrCodeValue}
        onChange={(e) => setQrCodeValue(e.target.value)}
        required
      ></textarea>
      <div className="action-btns">
        <button className="erease-qr" onClick={handleChange}>Limpar</button>
        <button type="submit" className="generate-qr">Gerar QR Code</button>
      </div>
    </form>
  );
};

export default DataForm;
