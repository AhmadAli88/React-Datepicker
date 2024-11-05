import './App.css';
import MyDatepicker from './components/Basic Date Selection/Datepicker';
import CDF from './components/Custom Date Formats/CDF';
import DateFilter from './components/Date Filter/DateFilter';
import RangeDate from './components/RangeDate/RangeDate';
import TimeSelection from './components/Time Selection/TimeSelection';

function App() {
  return (
    <div>
      <MyDatepicker />
      <RangeDate/>
      <TimeSelection/>
      <CDF/>
      <DateFilter/>
    </div>
  );
}

export default App;
