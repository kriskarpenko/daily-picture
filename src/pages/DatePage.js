import Calendar from "../components/Calendar";
import { useParams } from "react-router-dom";
import { useQueryParams } from "../hooks/useQueryParams";

const DatePage = ({ date: propsDate }) => {
  const { date: paramsDate } = useParams();
  const queryParams = useQueryParams();
  console.log("queryParams:", queryParams);

  const dateToRender =
    propsDate || paramsDate || new Date().toISOString().slice(0, 10);

  return (
    <div>
      <Calendar date={dateToRender} />
    </div>
  );
};

export default DatePage;
