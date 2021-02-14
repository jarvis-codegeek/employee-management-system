import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.css"

const CustomDatePicker = (props) => {
    return (
        <DatePicker 
            id="customdatepicker"
            onChange={props.handleDateChange}
            className="form-control datepicker-width"
            selected={props.selected}
         />
    )
}

export default CustomDatePicker;