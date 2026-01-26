import { useSelector } from "react-redux";

const Footer = () => {
  const theme = useSelector(state => state.ui.theme);

  const footerStyle = {
    padding: "20px 40px",
    background: theme === "light" ? "#f0f0f0" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    textAlign: "center",
    borderTop: theme === "light" ? "1px solid #ddd" : "1px solid #444",
    transition: "0.3s"
  };

  return (
    <footer style={footerStyle}>
      <p>© 2026 Мой сайт на Redux</p>
    </footer>
  );
};

export default Footer;
