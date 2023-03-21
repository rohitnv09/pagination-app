import classes from "./LoaderCircle.module.css";

const LoaderCircle = () => {
  return (
    <div className={classes.loader__container}>
      <div class="loader" />
    </div>
  );
};

export default LoaderCircle;
