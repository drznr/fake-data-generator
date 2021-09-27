import { Select } from 'antd';

const LocaleSelect = ({ value, onChange }) => {
    return (
        <label>
            <span className="select-label">Locale:</span>
            <Select
                value={value}
                onChange={onChange}
            >
                <Select.Option value="en">English</Select.Option>
                <Select.Option value="es">Spanish</Select.Option>
                <Select.Option value="pt_PT">Portoguese</Select.Option>
                <Select.Option value="fr">French</Select.Option>
                <Select.Option value="it">Italian</Select.Option>
                <Select.Option value="tr">Turkish</Select.Option>
                <Select.Option value="ru">Russian</Select.Option>
            </Select>
        </label>
    )
}

export default LocaleSelect;
