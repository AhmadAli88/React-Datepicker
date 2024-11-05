import { useState } from 'react';
import DatePicker from 'react-datepicker';
import CustomInput from './CustomInput';
import "react-datepicker/dist/react-datepicker.css"; 

const Custom = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        customInput={<CustomInput />}
      />
    </div>
  );
};

export default Custom;
