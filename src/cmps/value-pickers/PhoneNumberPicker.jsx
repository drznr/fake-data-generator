import { useState, useEffect } from 'react';
import { getRandomPhoneNumber } from '../../services/random-data.service';
import { Radio } from 'antd';

const PhoneNumberPicker = ({ onChange }) => {
    ///~ maybe switch by locale string and send actual regex - IF NOT WORKING THIS WAY
    const [ format, setFormat ] = useState('/(d)/');

    useEffect(() => {
        if (!onChange) return;
        console.log(getRandomPhoneNumber(format));
    }, [ format, onChange ]);

    return (
        <div className="value-picker">
            <Radio.Group
                size="large"
                value={format}
                onChange={(ev) => setFormat(ev.target.value)}
            >
                <div className="value-picker-container">
                    <span className="col flex-center">
                        <Radio value="/(d)/">(xxx) xxx-xxxx</Radio>
                    </span>
                </div>
            </Radio.Group>
        </div>
    )
}

export default PhoneNumberPicker;
