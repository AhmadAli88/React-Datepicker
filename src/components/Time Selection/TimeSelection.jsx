import { useState } from 'react';
import DatePicker from 'react-datepicker';
const TimeSelection = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        timeFormat='HH:mm'
        timeIntervals={15}
        dateFormat='MMMM d, yyyy h:mm aa'
      />
    </div>
  );
};

export default TimeSelection;
