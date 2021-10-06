import { useState, useEffect } from 'react';
import { getRandomFakerValue } from '../../services/random-data.service';
import { Radio } from 'antd';

const getRandomCompanyValue = getRandomFakerValue.bind(null, 'company');

const CompanyPicker = ({ onChange }) => {
    const [ companyValue, setCompanyValue ] = useState('companyName');

    useEffect(() => {
        if (!onChange) return;
        onChange(getRandomCompanyValue.bind(null, companyValue));
    }, [ companyValue, onChange ]);

    return (
        <div className="value-picker">
            <Radio.Group
                size="large"
                value={companyValue}
                onChange={(ev) => setCompanyValue(ev.target.value)}
            >
                <div className="value-picker-container">
                    <span className="col flex-center">
                        <Radio value="companyName">Company name</Radio>
                    </span>
                    <span className="col flex-center">
                        <Radio value="catchPhrase">Catch phrase</Radio>
                    </span>
                    <span className="col flex-center">
                        <Radio value="bsBuzz">Buzz word</Radio>
                    </span>
                </div>
            </Radio.Group>
        </div>
    )
}

export default CompanyPicker;
