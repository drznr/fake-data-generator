import { useState, useEffect } from 'react';
import { getRandomFakerValue } from '../../services/random-data.service';
import { Radio } from 'antd';

const getRandomAnimal = getRandomFakerValue.bind(null, 'animal');

const AnimalPicker = ({ onChange }) => {
    const [ animalType, setAnimalType ] = useState('type');

    useEffect(() => {
        if (!onChange) return;
        onChange(getRandomAnimal.bind(null, animalType));
    }, [ animalType, onChange ]);

    return (
        <div className="value-picker">
            <Radio.Group
                size="large"
                value={animalType}
                onChange={(ev) => setAnimalType(ev.target.value)}
            >
                <div className="value-picker-container">
                    <span className="col flex-center">
                        <Radio value="type">Animal type</Radio>
                    </span>
                    <span className="col flex-center">
                        <Radio value="dog">Dog breed</Radio>
                    </span>
                    <span className="col flex-center">
                        <Radio value="cat">Cat breed</Radio>
                    </span>
                    <span className="col flex-center">
                        <Radio value="horse">Horse breed</Radio>
                    </span>
                    <span className="col flex-center">
                        <Radio value="insect">Insect</Radio>
                    </span>
                </div>
            </Radio.Group>
        </div>
    )
}

export default AnimalPicker;
