import './App.css';
import Advanced from './components/Advanced/Advanced';
import MyDatepicker from './components/Basic Date Selection/Datepicker';
import CDF from './components/Custom Date Formats/CDF';
import Custom from './components/Customizable Appearance/Custom';
import DateFilter from './components/Date Filter/DateFilter';
import RangeDate from './components/RangeDate/RangeDate';
import Specialized from './components/Specialized/Specialized';
import TimeSelection from './components/Time Selection/TimeSelection';

function App() {
  return (
    <div style={{display: 'flex', gap: '30px', flexDirection: 'column'}}>
      <MyDatepicker />
      <RangeDate/>
      <TimeSelection/>
      <CDF/>
      <DateFilter/>
      <Custom/>
      <Advanced/>
      <Specialized/>
    </div>
  );
}

export default App;
