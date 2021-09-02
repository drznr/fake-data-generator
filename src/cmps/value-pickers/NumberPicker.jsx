import { useState, useEffect } from 'react';
import { getRandomInt, getRandomDec } from '../../services/random-data.service';
import { Radio, InputNumber } from 'antd';

const NumberPicker = ({ onChange }) => {
    const [ numberType, setNumberType ] = useState('integer');
    const [ from, setFrom ] = useState(0);
    const [ to, setTo ] = useState(100);
    const [ precision, setPrecision ] = useState(15);

    useEffect(() => {
        switch (numberType) {
            case 'integer':
                onChange(getRandomInt.bind(null, +from, +to));
            break;
            case 'decimal':
                onChange(getRandomDec.bind(null, +from, +to, precision));
            break;
            default:
            break;
        }
    }, [ numberType, from, to, precision, onChange ]);

    return (
        <div className="number-picker flex-coloumn">
            <Radio.Group
                size="large"
                value={numberType}
                onChange={(ev) => setNumberType(ev.target.value)}
            >
                <Radio value="decimal">Decimal</Radio>
                <Radio value="integer">Integer</Radio>
            </Radio.Group>
            <div className="number-picker-body flex-space-around">
                <label>
                    From:
                    <InputNumber
                        step={numberType === 'decimal' ? +(`0.${'0'.repeat(precision)}1`) : 1}
                        bordered={false}
                        value={from}
                        onChange={setFrom}
                        stringMode={numberType === 'decimal'}
                    />
                </label>
                <label>
                    Precision:
                    <InputNumber
                        min={1}
                        max={30}
                        bordered={false}
                        disabled={numberType !== 'decimal'}
                        value={precision}
                        onChange={setPrecision}
                    />
                </label>
                <label>
                    To:
                    <InputNumber
                        step={numberType === 'decimal' ? +(`0.${'0'.repeat(precision)}1`) : 1}
                        bordered={false}
                        value={to}
                        onChange={setTo}
                        stringMode={numberType === 'decimal'}
                    />
                </label>
            </div>
        </div>
    )
}

export default NumberPicker
