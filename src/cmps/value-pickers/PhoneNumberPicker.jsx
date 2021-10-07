import { useState, useEffect } from 'react';
import { getRandomPhoneNumber } from '../../services/random-data.service';
import { Radio } from 'antd';

const PhoneNumberPicker = ({ onChange }) => {
    const [ format, setFormat ] = useState("\\([0-9]{3}\\) [0-9]{3}-[0-9]{4}");

    useEffect(() => {
        if (!onChange) return;
        onChange(getRandomPhoneNumber.bind(null, format));
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
                        <Radio value="\([0-9]{3}\) [0-9]{3}-[0-9]{4}">(xxx) xxx-xxxx</Radio>
                    </span>
                    <span className="col flex-center">
                        <Radio value="[0-9]{3}-[0-9]{3}-[0-9]{4}">xxx-xxx-xxxx</Radio>
                    </span>
                    <span className="col flex-center">
                        <Radio value="[0-9]{10}">xxxxxxxxxx</Radio>
                    </span>
                    <span className="col flex-center">
                        <Radio value="\+[0-9]{3}-[0-9]{3}-[0-9]{6}">+xxx-xxx-xxxxxx</Radio>
                    </span>
                    <span className="col flex-center">
                        <Radio value="\(\+[0-9]{3}\) [0-9]{3}-[0-9]{6}">(+xxx) xxx-xxxxxx</Radio>
                    </span>
                </div>
            </Radio.Group>
        </div>
    )
}

export default PhoneNumberPicker;
