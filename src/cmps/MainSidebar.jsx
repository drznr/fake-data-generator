import { useRecoilValue } from 'recoil';
import { entries } from '../state/output';
import { Menu, Typography, Button } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const MainSidebar = () => {
    const previewEntries = useRecoilValue(entries);

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
                    previewEntries.map(([ key ]) => 
                        <Menu.Item
                            key={key}
                            className="flex-align-center"
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
                                    onClick={() => console.log('Updating', key)}
                                    title="Edit"
                                >
                                    <EditOutlined />
                                </Button>
                                <Button
                                    ghost
                                    shape="round"
                                    size="small"
                                    onClick={() => console.log('Deleting', key)}
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
