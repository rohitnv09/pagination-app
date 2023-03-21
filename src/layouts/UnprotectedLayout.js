import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";

const UnprotectedLayout = () => {
  const navigate = useNavigate();

  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    navigate("/users");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="page__wrapper" data-theme={theme}>
      <Navbar switchTheme={switchTheme} theme={theme} />
      <Outlet />
    </div>
  );
};

export default UnprotectedLayout;
