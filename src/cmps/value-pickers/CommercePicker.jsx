import { useState, useEffect } from 'react';
import { getRandomFakerValue } from '../../services/random-data.service';
import { Radio } from 'antd';

const getRandomCommerceValue = getRandomFakerValue.bind(null, 'commerce');

const CommercePicker = ({ onChange }) => {
    const [ commerceValue, setCommerceValue ] = useState('productName');

    useEffect(() => {
        if (!onChange) return;
        onChange(getRandomCommerceValue.bind(null, commerceValue));
    }, [ commerceValue, onChange ]);

    return (
        <div className="value-picker">
            <Radio.Group
                size="large"
                value={commerceValue}
                onChange={(ev) => setCommerceValue(ev.target.value)}
            >
                <div className="value-picker-container">
                    <span className="col flex-center">
                        <Radio value="productName">Product name</Radio>
                    </span>
                    <span className="col flex-center">
                        <Radio value="department">Shop department</Radio>
                    </span>
                    <span className="col flex-center">
                        <Radio value="price">Price</Radio>
                    </span>
                    <span className="col flex-center">
                        <Radio value="productMaterial">Product material</Radio>
                    </span>
                    <span className="col flex-center">
                        <Radio value="productDescription">Product description</Radio>
                    </span>
                </div>
            </Radio.Group>
        </div>
    )
}

export default CommercePicker;
