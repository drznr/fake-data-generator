import { useState, useEffect } from 'react';
import { getRandomOption } from '../../services/random-data.service';
import { Input, Select } from 'antd';

const OneOfPicker = ({ onChange }) => {
    const [ options, setOptions ] = useState([]);

    useEffect(() => {
        if (!onChange) return;
        onChange(getRandomOption.bind(null, options));
    }, [ options, onChange ]);

    const handleChange = (ev) => {
        const options = ev.target.value.split(',').map(str => str.trim()).filter(str => str);
        setOptions(options);
    }

    return (
        <div className="one-of-picker flex-coloumn">
            <Input
                placeholder="Supply comma seperated values"
                bordered={false}
                onChange={handleChange}
            />
            <Select
                mode="multiple"
                bordered={false}
                value={options}
                disabled
            />
        </div>
    )
}

export default OneOfPicker;
