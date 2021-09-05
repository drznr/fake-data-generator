import { useRecoilValue } from 'recoil';
import { entries } from '../state/output';
import { Menu } from 'antd';

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
                    previewEntries.map(([ key, value ]) => 
                    //~~TODO: ADD ICON BY TYPE
                        <Menu.Item
                            key={key}
                        >
                            <span>{key}</span> :
                            <span>{`${value}`}</span>
                        </Menu.Item>
                    )
                }
            </Menu>
        </>
    )
}

export default MainSidebar
