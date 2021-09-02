import { useState } from 'react';
import { useRecoilValue } from 'recoil';/// DELETE ME AFTER@!
import { useRecoilState } from 'recoil';
import { entityName } from './state/entity-name';
import { entitiesLength } from './state/entities-length';
import { Layout, Breadcrumb } from 'antd';
import MainSidebar from './cmps/MainSidebar';
import OutputPreview from './cmps/OutputPreview';
import Editor from './cmps/Editor';

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
    const [ entity, setEntity ] = useRecoilState(entityName);// USE SETTER WITH CONTENT EDITABLE
    const length = useRecoilValue(entitiesLength);
    const [ isCollapsed, setIsCollapsed ] = useState(false);

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
                <Breadcrumb className="breadcrumbs-row">
                    <Breadcrumb.Item>
                        <span>
                            {entity}
                        </span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <span>&times;<span className="num-value">{length}</span></span>
                    </Breadcrumb.Item>
                </Breadcrumb>
                    <OutputPreview />
                </Content>
                <Footer className="main-footer">
                    <div className="main-container sub-txt">
                        JSON Faker &copy; 2021 Created by Daniel Dresner with <span className="normal-txt" title="Love!">❤️</span> to ya'll fellow <span className="normal-txt" title="Nerds!">🤓</span>
                    </div>
                </Footer>
            </Layout>
        </Layout>
    );
}

export default App
