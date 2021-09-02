import { useState, useEffect } from 'react';
import { getRandomBoolean } from '../../services/random-data.service';
import { Slider } from 'antd';

const BooleanPicker = ({ onChange }) => {
    const [ truePercentage, setTruePercentage ] = useState(50);

    useEffect(() => {
        if (!onChange) return;
        onChange(getRandomBoolean.bind(null, truePercentage));
    }, [ truePercentage, onChange ]);

    return (
        <div className="bool-picker">
            <h3>
                <span className="bool-value">true</span> / <span className="bool-value">false</span>
            </h3>
            true probability <span className="num-value">{truePercentage}%</span>
            <Slider
                defaultValue={truePercentage}
                tipFormatter={null}
                onChange={setTruePercentage}
            />
        </div>
    )
}

export default BooleanPicker;
