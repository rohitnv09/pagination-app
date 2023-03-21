import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import LoaderCircle from "../../components/LoaderCircle/LoaderCircle";
import classes from "./Users.module.css";

const Users = () => {
  const [page, setPage] = useState(0);
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUsers(page);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchUsers = async (pageNumber) => {
    setLoading(true);
    await fetch(
      `https://give-me-users-forever.vercel.app/api/users/${pageNumber}/next`
    )
      .then((response) => response.json())
      .then((response) => {
        setUsersData(response?.users);
        console.log(response?.users);
      })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => setLoading(false));
  };

  const handleNext = () => {
    fetchUsers(page + 1)
      .then(() => setPage(page + 1))
      .catch((error) => {
        console.error(error);
      });
  };

  const handlePrevious = () => {
    fetchUsers(page - 1)
      .then(() => setPage(page - 1))
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.pagination__section}>
        <button
          onClick={handlePrevious}
          disabled={loading || page === 0}
          className="primary__button"
        >
          Previous
        </button>
        <span className={`label ${classes.page__number}`}>
          Page No: {page + 1}
        </span>
        <button
          onClick={handleNext}
          disabled={loading || usersData.length === 0}
          className="primary__button"
        >
          Next
        </button>
      </div>
      {loading ? (
        <LoaderCircle />
      ) : usersData.length === 0 ? (
        <div>
          <p className={`title ${classes.no__data__text}`}>No data available</p>
        </div>
      ) : (
        <div className={classes.cards__container}>
          {usersData?.map((item, index) => (
            <Card {...item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Users;
