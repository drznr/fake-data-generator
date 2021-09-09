import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { entityName } from './state/entity-name';
import { entitiesLength } from './state/entities-length';
import { isEmpty, output } from './state/output';
import { Layout, Breadcrumb, Select, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import MainSidebar from './cmps/MainSidebar';
import OutputPreview from './cmps/OutputPreview';
import Editor from './cmps/Editor';
import ContentEditable from './cmps/common/ContentEditable';
import { download } from './services/output-generate.service';
import pluralize from 'pluralize';
import { EditOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
    const [ entity, setEntity ] = useRecoilState(entityName);
    const [ length, setLength ] = useRecoilState(entitiesLength);
    const [ isCollapsed, setIsCollapsed ] = useState(false);
    const outputObj = useRecoilValue(output);
    const isOutPutEmpty = useRecoilValue(isEmpty);
    
    const generateData = () => {
        const outputJSON = {};
        const entityName = pluralize(entity.toLowerCase(), length);
        outputJSON[entityName] = new Array(length).fill(outputObj);
        outputJSON[entityName] = outputJSON[entityName].map(item => {
            const copy = { ...item };
            Object.entries(copy).forEach(([ key, value ]) => {
                if (typeof value === 'function') copy[key] = value();
            });
            return copy;
        });
        download(JSON.stringify(outputJSON), entityName);
    }

    return (
        <Layout className="site-layout">
            <Sider
                className="site-layout-sider"
                collapsed={isCollapsed}
                onCollapse={(isCollapsed) => setIsCollapsed(isCollapsed)}
                collapsible
            >   
                <MainSidebar />
            </Sider>
            <Layout className="site-layout-main">
                <Header className="main-header">
                    <Editor />
                </Header>
                <Content className="site-layout-content">
                <div className="flex-space-between">
                    <Breadcrumb className="breadcrumbs-row">
                        <Breadcrumb.Item>
                            <ContentEditable
                                initialValue={entity}
                                onChange={setEntity}
                            />
                            <EditOutlined className="edit-icon" />
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <span className="length-picker-select">&times;
                                <Select
                                    className="num-value"
                                    value={length}
                                    onChange={setLength}
                                    bordered={false}
                                    dropdownMatchSelectWidth={false}
                                >
                                    <Select.Option value={10}>10</Select.Option>
                                    <Select.Option value={100}>100</Select.Option>
                                    <Select.Option value={1000}>1000</Select.Option>
                                </Select>
                            </span>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Button
                        type="primary"
                        className="download-btn"
                        size="medium"
                        icon={<DownloadOutlined />} 
                        disabled={!entity || isOutPutEmpty}
                        onClick={generateData}
                    >
                        Download JSON
                    </Button>
                </div>
                    <OutputPreview />
                </Content>
                <Footer className="main-footer">
                    <div className="main-container sub-txt">
                        JSON Faker &copy; 2021 Created by Daniel Dresner with <span className="normal-txt" title="Love!">❤️</span> to ya'll fellow <span className="normal-txt" title="Unicorns!">🦄</span>
                    </div>
                </Footer>
            </Layout>
        </Layout>
    );
}

export default App
