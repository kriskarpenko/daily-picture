import Calendar from "../components/Calendar";
import { useParams } from "react-router-dom";
import { useQueryParams } from "../hooks/useQueryParams";
import { useEffect, useState } from "react";

async function getPicture(date) {
  const res = await fetch("/pictures.json");
  const list = await res.json();
  const picture = list.find((item) => {
    return item?.date === date;
  });
  return picture?.url;
}

const DatePage = ({ date: propsDate }) => {
  const [picture, setPicture] = useState();
  const { date: paramsDate } = useParams();
  const queryParams = useQueryParams();

  const dateToRender =
    propsDate || paramsDate || new Date().toISOString().slice(0, 10);

  useEffect(() => {
    async function fetchData() {
      setPicture(await getPicture(dateToRender));
    }
    fetchData();
  }, [dateToRender]);

  return (
    <div>
      <Calendar date={dateToRender} picture={picture} />
    </div>
  );
};

export default DatePage;
