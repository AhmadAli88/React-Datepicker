import { useState } from "react";
import DatePicker from "react-datepicker";

const CDF = () => {
    const [startDate, setStartDate] = useState(new Date());

  return (
    <div><DatePicker
    selected={startDate}
    onChange={(date) => setStartDate(date)}
    dateFormat="dd/MM/yyyy"
  />
  </div>
  )
}

export default CDF