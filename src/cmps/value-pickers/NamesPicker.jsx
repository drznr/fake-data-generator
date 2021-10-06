import { useState, useEffect } from 'react';
import { getRandomFakerValue } from '../../services/random-data.service';
import { Radio } from 'antd';
import LocaleSelect from '../LocaleSelect';

const getRandomName = getRandomFakerValue.bind(null, 'name');

const NamesPicker = ({ onChange }) => {
    const [ nameType, setNameType ] = useState('findName');
    const [ locale, setLocale ] = useState('en');


    useEffect(() => {
        if (!onChange) return;
        onChange(getRandomName.bind(null, nameType, locale));
    }, [ onChange, nameType, locale ]);

    return (
        <div className="names-picker flex-coloumn-center">
            <LocaleSelect
                value={locale}
                onChange={setLocale}
            />
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
