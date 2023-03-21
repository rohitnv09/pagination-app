import classes from "./Card.module.css";

const Card = (props) => {
  const getAvatarText = () => {
    let avatarString = "";
    const splitStringArray = props?.FirstNameLastName?.split(" ");
    if (splitStringArray.length === 1) {
      avatarString = splitStringArray[0].charAt(0);
    } else if (splitStringArray.length >= 2) {
      avatarString =
        splitStringArray[0].charAt(0) + splitStringArray[1].charAt(0);
    }
    return avatarString;
  };

  return (
    <div className={classes.card} id={props?.ID}>
      <div className={`headline ${classes.avatar}`}>{getAvatarText()}</div>
      <h3 className={`label ${classes.member__name}`}>
        {props?.FirstNameLastName}
      </h3>
      <h6 className={`description ${classes.details}`}>
        {props?.JobTitle} at <strong>{props?.Company}</strong>
      </h6>
      <p className={`description ${classes.details}`}>Phone: {props?.Phone}</p>
      <p className={`description ${classes.details}`}>
        Email1: {props?.EmailAddress}
      </p>
      <p className={`description ${classes.details}`}>Email2: {props?.Email}</p>
    </div>
  );
};

export default Card;
