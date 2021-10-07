import { useState, useEffect } from 'react';
import { getRandomImage } from '../../services/random-data.service';
import { Select, Input } from 'antd';

const ImageUrlPicker = ({ onChange }) => {
    const [ aspectRatio, setAspectRatio ] = useState([1920,1080]);
    const [ category, setCategory ] = useState('');

    useEffect(() => {
        if (!onChange) return;
        const [ w, h ] = aspectRatio;
        onChange(getRandomImage.bind(null, w, h, category));
    }, [ aspectRatio, category, onChange ]);

    return (
        <div className="image-url-picker">
            <div className="image-url-picker-container">
                <label className="flex-coloumn-center">
                    <span>Aspect ratio:</span>
                        <Select
                            value={aspectRatio}
                            onChange={setAspectRatio}
                        >
                            <Select.Option value={[1920,1080]}>16:9</Select.Option>
                            <Select.Option value={[1080,1080]}>1:1</Select.Option>
                            <Select.Option value={[1080,720]}>3:2</Select.Option>
                            <Select.Option value={[1024,768]}>4:3</Select.Option>
                        </Select>
                </label>
                <label className="flex-coloumn-center">
                    <span>Category:</span>
                    <Input
                        bordered={false}
                        placeholder="Type a keyword to get related image (leave blank for generic image)"
                        value={category}
                        onChange={(ev) => setCategory(ev.target.value)}
                    />
                </label>
            </div>
        </div>
    )
}

export default ImageUrlPicker;
