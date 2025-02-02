import React from "react";

const PlaceholderText = () => {
  return (
    <>
      <p>O resultado aparecerá aqui...</p>
      <i class="fa-solid fa-qrcode"></i>
    </>
  );
};

const QrCodeImage = ({ qrCodeUrl }) => {
  return (
    <img
      src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${qrCodeUrl}`}
      className="fadeInUpImg qrcode-img"
    />
  );
};

const ResultBox = ({ qrCodeUrl }) => {
  return (
    <div className="result-box popIn">
      {qrCodeUrl ? <QrCodeImage qrCodeUrl={qrCodeUrl}/> : <PlaceholderText />}
    </div>
  );
};

export default ResultBox;