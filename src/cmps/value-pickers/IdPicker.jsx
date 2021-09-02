import { useState, useEffect } from 'react';
import { getMongoId, getRandomId, getUUID } from '../../services/random-data.service';
import { Radio, Input, InputNumber, Select } from 'antd';

const IdPicker = ({ onChange }) => {
    const [ idType, setIdType ] = useState('randomId');
    const [ idLength, setIdLength ] = useState(8);
    const [ idPrefix, setIdPrefix ] = useState('');
    const [ idSuffix, setIdSuffix ] = useState('');
    const [ idPattern, setIdPattern ] = useState('a-z');

    useEffect(() => {
        if (!onChange) return;
        switch (idType) {
            case 'mognoId':
                onChange(getMongoId);
            break;
            case 'uuid':
                onChange(getUUID);
            break;
            case 'randomId':
                onChange(getRandomId.bind(null, idPattern, idLength, idPrefix, idSuffix));
            break;
            default:
            break;
        }
    }, [ idType, idLength, idPrefix, idSuffix, idPattern, onChange ]);

    return (
        <div className="id-picker">
            <Radio.Group
                size="large"
                value={idType}
                onChange={(ev) => setIdType(ev.target.value)}
            >
                <div className="id-picker-container">
                    <span className="flex-center">
                        <Radio value="mognoId">MongoId</Radio>
                    </span>
                    <span className="flex-center">
                        <Radio value="uuid">uuid</Radio>
                    </span>
                    <span className="flex-coloumn-center">
                        <Radio value="randomId">Random</Radio>
                        <div className="id-picker-controls">
                            <Input
                                placeholder="Prefix"
                                bordered={false}
                                value={idPrefix}
                                disabled={idType !== 'randomId'}
                                onChange={(ev) => setIdPrefix(ev.target.value)}
                            />
                            <InputNumber
                                bordered={false}
                                value={idLength}
                                disabled={idType !== 'randomId'}
                                min={4}
                                max={100}
                                onChange={setIdLength}
                            />
                            <Select
                                value={idPattern}
                                onChange={setIdPattern}
                                disabled={idType !== 'randomId'}
                                bordered={false}
                            >
                                <Select.Option value="a-z">lower chars</Select.Option>
                                <Select.Option value="A-Z">upper chars</Select.Option>
                                <Select.Option value="0-9">digits</Select.Option>
                                <Select.Option value="a-zA-Z">lower + upper</Select.Option>
                                <Select.Option value="a-z0-9">lower + digits</Select.Option>
                                <Select.Option value="A-Z0-9">upper + digits</Select.Option>
                                <Select.Option value="a-zA-Z0-9">lower + upper + digits</Select.Option>
                            </Select>
                            <Input
                                placeholder="Suffix"
                                bordered={false}
                                value={idSuffix}
                                disabled={idType !== 'randomId'}
                                onChange={(ev) => setIdSuffix(ev.target.value)}
                            />
                        </div>
                    </span>
                </div>
            </Radio.Group>
        </div>
    )
}

export default IdPicker
