import { useState, useEffect } from 'react';
import { getRandomFakerValue } from '../../services/random-data.service';
import { Radio } from 'antd';
import LocaleSelect from '../LocaleSelect';

const getRandomAddress = getRandomFakerValue.bind(null, 'address');

const AddressPicker = ({ onChange }) => {
    const [ addressType, setAddressType ] = useState('city');
    const [ locale, setLocale ] = useState('en');

    useEffect(() => {
        if (!onChange) return;
        onChange(getRandomAddress.bind(null, addressType, locale));
    }, [ onChange, addressType, locale ]);

    return (
        <div className="address-picker flex-coloumn-center">
            <LocaleSelect
                value={locale}
                onChange={setLocale}
            />
            <div className="address-picker-container">
                <Radio.Group
                    className="flex-space-around"
                    size="large"
                    value={addressType}
                    onChange={(e) => setAddressType(e.target.value)}
                >
                    <span className="col flex-center">
                        <Radio value="city">City</Radio>
                    </span>
                    <span className="col flex-center">
                        <Radio value="streetAddress">Street address</Radio>
                    </span>
                    <span className="col flex-center">
                        <Radio value="country">Country</Radio>
                    </span>
                    <span className="col flex-center">
                        <Radio value="countryCode">Country code</Radio>
                    </span>
                </Radio.Group>
            </div>
        </div>
    )
}

export default AddressPicker;
