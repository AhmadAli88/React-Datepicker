import { useState } from 'react';
import DatePicker from 'react-datepicker';

const DateFilter = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        filterDate={(date) => date.getDay() !== 0 && date.getDay() !== 6}
      />
    </div>
  );
};

export default DateFilter;
