import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/ui/uiSlice";

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.ui.theme);

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    background: theme === "light" ? "#f0f0f0" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    boxShadow: theme === "light" ? "0 2px 5px rgba(0,0,0,0.1)" : "0 2px 5px rgba(0,0,0,0.5)"
  };

  const buttonStyle = {
    padding: "8px 16px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    background: theme === "light" ? "#333" : "#eee",
    color: theme === "light" ? "#fff" : "#333",
    transition: "0.3s"
  };

  return (
    <header style={headerStyle}>
      <h1>Мой сайт Redux</h1>
      <button style={buttonStyle} onClick={() => dispatch(toggleTheme())}>
        Сменить тему
      </button>
    </header>
  );
};

export default Header;
