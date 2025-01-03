import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Apply theme to the HTML root element
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="flex justify-center mb-2">
      {/* <button
        className="btn btn-circle bg-neutral text-white hover:bg-primary transition-all duration-300"
        onClick={toggleTheme}
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button> */}

      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="toggle border-cyan-400 bg-cyan-400 [--tglbg:white] hover:bg-cyan-700"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        <span className="absolute left-5 text-lg pointer-events-none">
          {theme === "light" ? "🌙" : ""}
        </span>
        <span className="absolute text-lg pointer-events-none">
          {theme === "dark" ? "☀️" : ""}
        </span>
      </label>
    </div>
  );
};

export default ThemeToggle;
