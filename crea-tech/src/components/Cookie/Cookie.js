import React from "react";
import CookieConsent from "react-cookie-consent";
import "./Cookie.css";

const Cookie = () => {

  const handleDecline = () => {
    setShowConset(false);
  };

  const [showConsent, setShowConset] = React.useState(true);

  return (
    showConsent &&
    <CookieConsent
      debug={true}
      location="bottom"
      style={{ background: "#45144c" }}
      buttonStyle={{
        background: "pink",
        color: "#45144c",
        fontSize: "13px",
        borderRadius: "5px",
      }}
      buttonText="J'accepte"
      expires={1}
    >
      Ce site utilise des cookies. Voir notre{" "}
      <a href="#">politique de confidentialité</a> pour en savoir plus.
      <button onClick={handleDecline} className="cookie-btn">
        Je refuse
      </button>
    </CookieConsent>
  );
};

export default Cookie;
