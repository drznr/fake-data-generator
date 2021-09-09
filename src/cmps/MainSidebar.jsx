import { useRecoilValue } from 'recoil';
import { useRecoilState } from 'recoil';
import { outputSetter } from '../state/output';
import { entries } from '../state/output';
import { eventBus, EV_EDIT_ENTRY } from '../services/event-bus.service';
import { Menu, Typography, Button } from 'antd';
import { DeleteOutlined, EditOutlined, FieldStringOutlined, FieldNumberOutlined, GlobalOutlined } from '@ant-design/icons';

const MainSidebar = () => {
    const [ output, setOutput ] = useRecoilState(outputSetter);
    const previewEntries = useRecoilValue(entries);

    const editEntry = key => {
        eventBus.emit(EV_EDIT_ENTRY, key);
    }

    const deleteEntry = key => {
        const copy = { ...output };
        delete copy[key];
        setOutput(copy);
    }

    const getIconByType = type => {
        switch (type) {
            case 'string':
                return <FieldStringOutlined />;
            case 'number':
                return <FieldNumberOutlined />;
            default:
                return <GlobalOutlined />;
        }
    }

    return (
        <>
            <h1>
                <span className="font-med logo-txt">JSON</span> <span className="font-med logo-txt">f</span>aker
            </h1>
            <Menu
                theme="dark"
                mode="vertical"
                selectable={false}
            >
                {
                    previewEntries.map(([ key, value ]) => 
                        <Menu.Item
                            key={key}
                            className="flex-align-center"
                            icon={getIconByType(typeof value)}
                        >   
                            <Typography.Text code className="clip-txt">
                                {key}
                            </Typography.Text>
                            <span className="entry-seperator">:</span>
                            <span className="entry-actions">
                                <Button
                                    ghost
                                    shape="round"
                                    size="small"
                                    onClick={() => editEntry(key)}
                                    title="Edit"
                                >
                                    <EditOutlined />
                                </Button>
                                <Button
                                    ghost
                                    shape="round"
                                    size="small"
                                    onClick={() => deleteEntry(key)}
                                    title="Delete"
                                >
                                    <DeleteOutlined />
                                </Button>
                            </span>
                        </Menu.Item>
                    )
                }
            </Menu>
        </>
    )
}

export default MainSidebar
