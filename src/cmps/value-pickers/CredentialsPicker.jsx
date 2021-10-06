import { useState, useEffect } from 'react';
import { getRandomFakerValue } from '../../services/random-data.service';
import { Radio } from 'antd';

const getRandomCredential = getRandomFakerValue.bind(null, 'internet');

const CredentialsPicker = ({ onChange }) => {
    const [ credentail, setCredential ] = useState('email');

    useEffect(() => {
        if (!onChange) return;
        onChange(getRandomCredential.bind(null, credentail));
    }, [ credentail, onChange ]);

    return (
        <div className="value-picker">
            <Radio.Group
                size="large"
                value={credentail}
                onChange={(ev) => setCredential(ev.target.value)}
            >
                <div className="value-picker-container">
                    <span className="col flex-center">
                        <Radio value="email">Email</Radio>
                    </span>
                    <span className="col flex-center">
                        <Radio value="exampleEmail">Example email</Radio>
                    </span>
                    <span className="col flex-center">
                        <Radio value="userName">User name</Radio>
                    </span>
                    <span className="col flex-center">
                        <Radio value="password">Password</Radio>
                    </span>
                    <span className="col flex-center">
                        <Radio value="avatar">Avatar</Radio>
                    </span>
                    <span className="col flex-center">
                        <Radio value="url">URL</Radio>
                    </span>
                    <span className="col flex-center">
                        <Radio value="userAgent">User agent</Radio>
                    </span>
                </div>
            </Radio.Group>
        </div>
    )
}

export default CredentialsPicker;
