import { useState, useEffect } from 'react';
import { getRandomFakerValue } from '../../services/random-data.service';
import { Radio } from 'antd';

const getRandomLorem = getRandomFakerValue.bind(null, 'lorem');

const LoremPicker = ({ onChange }) => {
    const [ loremValue, setLoremValue ] = useState('word');

    useEffect(() => {
        if (!onChange) return;
        onChange(getRandomLorem.bind(null, loremValue));
    }, [ loremValue, onChange ]);

    return (
        <div className="value-picker">
            <Radio.Group
                size="large"
                value={loremValue}
                onChange={(ev) => setLoremValue(ev.target.value)}
            >
                <div className="value-picker-container">
                    <span className="col flex-center">
                        <Radio value="word">Word</Radio>
                    </span>
                    <span className="col flex-center">
                        <Radio value="sentence">Sentence</Radio>
                    </span>
                    <span className="col flex-center">
                        <Radio value="slug">Slug</Radio>
                    </span>
                    <span className="col flex-center">
                        <Radio value="paragraph">Paragraph</Radio>
                    </span>
                    <span className="col flex-center">
                        <Radio value="paragraphs">Paragraphs</Radio>
                    </span>
                </div>
            </Radio.Group>
        </div>
    )
}

export default LoremPicker;
