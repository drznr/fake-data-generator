import { useState, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { outputSetter } from '../state/output';
import ValuePickers from './value-pickers';
import { Form, Input, Select, Button } from 'antd';

const Editor = () => {
    const [ output, setOutput ] = useRecoilState(outputSetter);
    const [ entryKey, setEntryKey ] = useState('');
    const [ entryValue, setEntryValue ] = useState(null);
    const [ currValuePicker, setCurrValuePicker ] = useState('IdPicker');

    const updatePreview = () => {
        //~TODO: validation with form methods(?) & check dup key
        form.resetFields();
        //~TODO: focus key input ?
        const copy = { ...output };
        copy[entryKey] = entryValue;
        setOutput(copy);
        setEntryKey('');
        //~TODO: reset value ?
    }

    const updateValue = useCallback((value) => {
        setEntryValue(() => value);
    }, []);

    const handleChange = (ev) => {
        setEntryKey(ev.target.value);
    }

    const [ form ] = Form.useForm();
    const ValuePicker = ValuePickers[currValuePicker];
    return (
        <section className="editor">
            <Form
                form={form}
                className="flex-coloumn"
                noValidate
                size="large"
                onFinish={updatePreview}
            >
                <div className="editor-body">
                    <ValuePicker onChange={updateValue} />
                </div>
                <div className="editor-footer">
                    <Form.Item name="key" className="editor-footer-key-input">
                        <Input
                            value={entryKey}
                            placeholder="Key"
                            onChange={handleChange}
                            autoComplete="off"
                        />
                    </Form.Item>
                    <Form.Item  className="editor-footer-key-select">
                        <Select
                            defaultValue="IdEditor"
                            onChange={setCurrValuePicker}
                        >
                            <Select.Option value="IdPicker">String - ID</Select.Option>
                            <Select.Option value="ColorPicker">String - Color</Select.Option>
                            <Select.Option value="NumberPicker">Number</Select.Option>
                            <Select.Option value="DatesPicker">Date</Select.Option>
                            <Select.Option value="BooleanPicker">Boolean</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit">Add</Button>
                    </Form.Item>
                </div>
            </Form>
        </section>
    )
}

export default Editor;
