import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import {
    Root,
    Header,
    Sidebar,
    Content,
    Footer,
    CollapseBtn,
    CollapseIcon,
    SidebarTrigger,
    SidebarTriggerIcon,
    fixedLayoutPreset,
} from '@mui-treasury/layout';

import SharedFooter from "./SharedFooter";
import PrivateContent from "./PrivateContent";
import PrivateNavContent from "./PrivateNavContent";
import PrivateHeader from "./PrivateHeader";
import PrivateNavHeader from "./PrivateNavHeader";

const PrivateLayout = ({children}) => (
    <Root config={fixedLayoutPreset}>
        {({ headerStyles, sidebarStyles, collapsed }) => (
            <>
                <CssBaseline />
                <Header>
                    <Toolbar>
                        <SidebarTrigger className={headerStyles.leftTrigger}>
                            <SidebarTriggerIcon />
                        </SidebarTrigger>
                        <PrivateHeader/>
                    </Toolbar>
                </Header>

                <Sidebar>
                    <PrivateNavHeader collapsed={collapsed} />
                    <div className={sidebarStyles.container}>
                        <PrivateNavContent/>
                    </div>
                    <CollapseBtn className={sidebarStyles.collapseBtn}>
                        <CollapseIcon />
                    </CollapseBtn>
                </Sidebar>

                <Content>
                    <PrivateContent>{children}</PrivateContent>
                </Content>

                <Footer>
                    <SharedFooter />
                </Footer>
            </>
        )}
    </Root>
);

export default PrivateLayout;
