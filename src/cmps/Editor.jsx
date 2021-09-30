import { useState, useCallback, useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { outputSetter } from '../state/output';
import { eventBus, EV_EDIT_ENTRY } from '../services/event-bus.service';
import { usePrevious } from '../hooks/use-previous';
import ValuePickers from './value-pickers';
import { Form, Input, Select, Button } from 'antd';
import { CSSTransition } from 'react-transition-group';

const Editor = () => {
    const [ output, setOutput ] = useRecoilState(outputSetter);
    const [ entryKey, setEntryKey ] = useState('');
    const [ entryValue, setEntryValue ] = useState(null);
    const [ currValuePicker, setCurrValuePicker ] = useState('IdPicker');

    const [ form ] = Form.useForm();
    const transitionNodeRef = useRef(null);
    const prevValuePicker = usePrevious(currValuePicker);

    useEffect(() => {
        const setEditedEntry = key => {
            form.setFieldsValue({ key });
            setEntryKey(key);
        }

        eventBus.on(EV_EDIT_ENTRY, setEditedEntry);
        return () => {
            eventBus.off(EV_EDIT_ENTRY, setEditedEntry);
        }
    }, [ form ]);

    const updatePreview = () => {
        //~TODO: validation (?) -- wrong values
        form.resetFields();
        const copy = { ...output };
        copy[entryKey] = entryValue;
        setOutput(copy);
        setEntryKey('');
        //~TODO: reset value (?)
    }

    const updateValue = useCallback((value) => {
        setEntryValue(() => value);
    }, []);

    const handleChange = (ev) => {
        setEntryKey(ev.target.value);
    }

    
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
                    <CSSTransition
                        nodeRef={transitionNodeRef}
                        in={currValuePicker === prevValuePicker}
                        classNames="value-picker"
                        timeout={300}
                    >
                        <div className="editor-body-container" ref={transitionNodeRef}>
                            <ValuePicker onChange={updateValue} />
                        </div>
                    </CSSTransition>
                </div>
                <div className="editor-footer">
                    <Form.Item name="key" className="editor-footer-key-input">
                        <Input
                            value={entryKey}
                            placeholder="Key"
                            onChange={handleChange}
                            autoFocus
                            autoComplete="off"
                        />
                    </Form.Item>
                    <Form.Item  className="editor-footer-key-select">
                        <Select
                            value={currValuePicker}
                            onChange={setCurrValuePicker}
                        >
                            <Select.Option value="IdPicker">String - ID</Select.Option>
                            <Select.Option value="NamesPicker">String - Names</Select.Option>
                            <Select.Option value="AddressPicker">String - Address</Select.Option>
                            <Select.Option value="AnimalPicker">String - Animal</Select.Option>
                            <Select.Option value="CommercePicker">String - Commerce</Select.Option>
                            <Select.Option value="ColorPicker">String - Color</Select.Option>
                            <Select.Option value="OneOfPicker">String - one of</Select.Option>
                            <Select.Option value="NumberPicker">Number</Select.Option>
                            <Select.Option value="DatesPicker">Date</Select.Option>
                            <Select.Option value="BooleanPicker">Boolean</Select.Option>
                            <Select.Option value="StaticValuesPicker">Static values</Select.Option>
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
