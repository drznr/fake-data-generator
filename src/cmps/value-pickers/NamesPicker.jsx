import { useState, useEffect } from 'react';
import { getRandomName } from '../../services/random-data.service';
import { Radio, Select } from 'antd';

const NamesPicker = ({ onChange }) => {
    const [ nameType, setNameType ] = useState('findName');
    const [ locale, setLocale ] = useState('en');

    useEffect(() => {
        if (!onChange) return;
        onChange(getRandomName.bind(null, nameType, locale));
    }, [ onChange, nameType, locale ]);

    return (
        <div className="names-picker flex-coloumn-center">
            <label>
                <span className="select-label">Locale:</span>
                <Select
                    value={locale}
                    onChange={setLocale}
                >
                    <Select.Option value="en">English</Select.Option>
                    <Select.Option value="es">Spanish</Select.Option>
                    <Select.Option value="pt_PT">Portoguese</Select.Option>
                    <Select.Option value="fr">French</Select.Option>
                    <Select.Option value="it">Italian</Select.Option>
                    <Select.Option value="tr">Turkish</Select.Option>
                    <Select.Option value="ru">Russian</Select.Option>
                </Select>
            </label>
            <div className="names-picker-container">
                <Radio.Group
                    className="flex-space-around"
                    size="large"
                    value={nameType}
                    onChange={(e) => setNameType(e.target.value)}
                > 
                    <span className="col flex-center">
                        <Radio value="findName">Full name</Radio>
                    </span>
                    <span className="col flex-center">
                        <Radio value="firstName">First name</Radio>
                    </span>
                    <span className="col flex-center">
                        <Radio value="lastName">Last name</Radio>
                    </span>
                </Radio.Group>
            </div>
        </div>
    )
}

export default NamesPicker;
