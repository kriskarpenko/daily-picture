import styles from "./Calendar.module.css";

const Calendar = ({ date = "2004-08-20", picture = "/defPic.png" }) => {
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
