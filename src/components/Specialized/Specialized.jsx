import { useState } from 'react';
import DatePicker from 'react-datepicker';

const Specialized = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        highlightDates={[new Date(), new Date('2024-01-01')]}
        showMonthDropdown
        showYearDropdown
      />
    </div>
  );
};

export default Specialized;
