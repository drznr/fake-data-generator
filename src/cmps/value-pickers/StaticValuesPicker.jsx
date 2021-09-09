import { useState, useEffect } from 'react';
import { Radio, Input } from 'antd';

const StaticValuesPicker = ({ onChange }) => {
    const [ valueType, setValueType ] = useState('null');
    const [ strValue, setStrValue ] = useState('');

    useEffect(() => {
        if (!onChange) return;
        switch (valueType) {
            case 'null':
                onChange(null);
                break;
            case 'string':
                onChange(strValue);
                break;
            default:
                break;
        }
    }, [ valueType, strValue, onChange ]);

    return (
        <div className="static-values-picker">
            <Radio.Group
                size="large"
                value={valueType}
                onChange={(ev) => setValueType(ev.target.value)}
            >
                <div className="value-picker-container">
                    <span className="col flex-center">
                        <Radio value="null">
                            <span className="null-value">null</span>
                        </Radio>
                    </span>
                    <span className="col flex-coloumn-center static-str">
                        <Radio className="inline-label" value="string">
                            <span className="str-value">string</span>
                        </Radio>
                        <Input
                            placeholder="Static string"
                            bordered={false}
                            disabled={valueType !== 'string'}
                            value={strValue}
                            onChange={(ev) => setStrValue(ev.target.value)}
                        />
                    </span>
                </div>
            </Radio.Group>
        </div>
    )
}

export default StaticValuesPicker;
