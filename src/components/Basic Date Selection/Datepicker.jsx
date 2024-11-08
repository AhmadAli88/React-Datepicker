import { useState } from "react";
import DatePicker from "react-datepicker";





const MyDatepicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};

export default MyDatepicker;