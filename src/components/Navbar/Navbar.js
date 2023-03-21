import classes from "./Navbar.module.css";

const Navbar = ({ switchTheme, theme }) => {
  return (
    <div className={classes.navbar}>
      <div className={`headline ${classes.brand}`}>Pagination App</div>
      <button onClick={switchTheme} className="primary__button">
        Dark Mode : {theme === "dark" ? "ON" : "OFF"}
      </button>
    </div>
  );
};

export default Navbar;
