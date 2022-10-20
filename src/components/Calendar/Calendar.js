import styles from "./Calendar.module.css";

const Calendar = ({ date = "2004-08-20", picture = "/default.png" }) => {
  /* eslint-disable jsx-a11y/img-redundant-alt */
  return (
    <div>
      <img
        className={styles.picture}
        src={picture}
        alt={`Picture for ${date}`}
      />
      <h2>{date}</h2>
    </div>
  );
};

export default Calendar;
