import { useState } from 'react';
import DatePicker from 'react-datepicker';

const Advanced = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        inline
      />
    </div>
  );
};

export default Advanced;
