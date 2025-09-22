import { useState } from "react";
// import Sun from "./sun.png";
// import Moon from "./moon.png";
import Sun from "../../assets/img/sun.png"
import Moon from "../../assets/img/moons.png"


export default function ThemeToggle({ closeMenu }) {
  const [theme, setTheme] = useState("default");
  const [open, setOpen] = useState(false);

  const handleThemeChange = (value) => {
    setTheme(value);
    setOpen(false); // close dropdown after selecting
    if (value === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else if (value === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme"); // system default
    }
  };

  return (
    <div className="light-toggle">
      <img
        onClick={() => setOpen(!open)}
        className="ligt-img"
        src={theme === "dark" ? Moon : Sun}
        alt="theme toggle"
        style={{ width: 30, height: 30, cursor: "pointer" }}
      />

      {open && (
        <ul className="menu-light-dark">
          <li onClick={() => handleThemeChange("light")}>🌞 Light</li>
          <li onClick={() => handleThemeChange("dark")}>🌙 Dark</li>
          <li onClick={() => handleThemeChange("default")}>🖥 Default</li>
        </ul>
      )}
    </div>
  );
}
