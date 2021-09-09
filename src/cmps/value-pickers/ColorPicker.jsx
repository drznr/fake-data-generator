import { useState, useEffect } from 'react';
import { getRandomColor } from '../../services/random-data.service';
import { Radio } from 'antd';

const ColorPicker = ({ onChange }) => {
    const [ colorFormat, setColorFormat ] = useState('hex');

    useEffect(() => {
        if (!onChange) return;
        onChange(getRandomColor.bind(null, colorFormat));
    }, [ colorFormat, onChange ]);

    return (
        <div className="color-picker">
            <Radio.Group
                size="large"
                value={colorFormat}
                onChange={(e) => setColorFormat(e.target.value)}
            >   
                <div className="value-picker-container">
                    <span className="col flex-center">
                        <Radio value="hex">Hex</Radio>
                    </span>
                    <span className="col flex-center">
                        <Radio value="rgb">RGB</Radio>
                    </span>
                    <span className="col flex-center">
                        <Radio value="hsl">HSL</Radio>
                    </span>
                </div>
            </Radio.Group>
        </div>
    )
}

export default ColorPicker;
