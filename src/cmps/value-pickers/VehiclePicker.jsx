import { useState, useEffect } from 'react';
import { getRandomFakerValue } from '../../services/random-data.service';
import { Radio } from 'antd';

const getRandomVehicleValue = getRandomFakerValue.bind(null, 'vehicle');

const VehiclePicker = ({ onChange }) => {
    const [ vehicleValue, setVehicleValue ] = useState('vehicle');

    useEffect(() => {
        if (!onChange) return;
        onChange(getRandomVehicleValue.bind(null, vehicleValue));
    }, [ vehicleValue, onChange ]);

    return (
        <div className="value-picker">
            <Radio.Group
                size="large"
                value={vehicleValue}
                onChange={(ev) => setVehicleValue(ev.target.value)}
            >
                <div className="value-picker-container">
                    <span className="col flex-center">
                        <Radio value="vehicle">Vehicle</Radio>
                    </span>
                    <span className="col flex-center">
                        <Radio value="manufacturer">Manufacturer</Radio>
                    </span>
                    <span className="col flex-center">
                        <Radio value="model">Model</Radio>
                    </span>
                    <span className="col flex-center">
                        <Radio value="type">Type</Radio>
                    </span>
                </div>
            </Radio.Group>
        </div>
    )
}

export default VehiclePicker;
