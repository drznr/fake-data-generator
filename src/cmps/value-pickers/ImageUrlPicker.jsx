import { useState } from 'react';
import { Select } from 'antd';

const ImageUrlPicker = () => {
    const [ aspectRatio, setAspectRatio ] = useState('1600x900');

    return (
        <div className="image-url-picker">
            <label>
                <span>Aspect ratio:</span>
                    <Select
                        value={aspectRatio}
                        onChange={setAspectRatio}
                        >
                        <Select.Option value="1600x900">1600x900</Select.Option>
                    </Select>
            </label>
        </div>
    )
}

export default ImageUrlPicker;
