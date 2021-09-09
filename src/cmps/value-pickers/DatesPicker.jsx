import { useState, useEffect } from 'react';
import { getRandomDate } from '../../services/random-data.service';
import { DatePicker, Radio } from 'antd';

const DatesPicker = ({ onChange }) => {
    const [ dateRange, setDateRange ] = useState({ from: new Date(new Date().setDate(new Date().getDate() - 1)), to: new Date() });
    const [ dateFormat, setDateFormat ] = useState('date');

    useEffect(() => {
        if (!onChange) return;
        const { from, to } = dateRange;
        onChange(getRandomDate.bind(null, from, to, dateFormat));
    }, [ dateRange, dateFormat, onChange ]);

    const handleChange = range => {
        if (!range) return;
        const [ from, to ] = range;
        setDateRange({ from: from.toDate(), to: to.toDate() });
    }

    return (
        <div className="date-picker flex-coloumn-center">
            <DatePicker.RangePicker
                onChange={handleChange}
            />
            <div className="date-picker-format">
                <Radio.Group
                    className="flex-space-around"
                    size="large"
                    value={dateFormat}
                    onChange={(e) => setDateFormat(e.target.value)}
                >
                    <Radio value="timestamp">Timestamp</Radio>
                    <Radio value="iso">ISO</Radio>
                    <Radio value="utc">UTC</Radio>
                    <Radio value="date">Date</Radio>
                </Radio.Group>
            </div>
        </div>
    )
}

export default DatesPicker;
