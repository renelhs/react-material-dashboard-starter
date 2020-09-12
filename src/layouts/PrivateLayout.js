import React from 'react';
import styled from 'styled-components';
import { StylesProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import {
    Root,
    getHeader,
    getContent,
    getDrawerSidebar,
    getSidebarContent,
    getFooter,
    getSidebarTrigger,
    getCollapseBtn,
    getFixedScheme,
} from '@mui-treasury/layout';

import SharedFooter from "./SharedFooter";
import PrivateContent from "./PrivateContent";
import PrivateNavContent from "./PrivateNavContent";
import PrivateHeader from "./PrivateHeader";
import PrivateNavHeader from "./PrivateNavHeader";

const Header = getHeader(styled);
const Content = getContent(styled);
const DrawerSidebar = getDrawerSidebar(styled);
const SidebarContent = getSidebarContent(styled);
const Footer = getFooter(styled);
const SidebarTrigger = getSidebarTrigger(styled);
const CollapseBtn = getCollapseBtn(styled);

const fixedScheme = getFixedScheme();


const PrivateLayout = ({children}) => {
    return (
        <StylesProvider injectFirst>
            <CssBaseline />
            <Root scheme={fixedScheme}>
                {({ state: { sidebar } }) => (
                    <>
                        <Header>
                            <Toolbar>
                                <SidebarTrigger sidebarId="primarySidebar" />
                                {/*<HeaderMockUp />*/}
                                <PrivateHeader/>
                            </Toolbar>
                        </Header>

                        <DrawerSidebar sidebarId="primarySidebar">
                            <SidebarContent>
                                <PrivateNavHeader collapsed={sidebar.primarySidebar.collapsed} />
                                <PrivateNavContent/>
                            </SidebarContent>
                            <CollapseBtn />
                        </DrawerSidebar>

                        <Content>
                            <PrivateContent>{children}</PrivateContent>
                        </Content>

                        <Footer>
                            <SharedFooter />
                        </Footer>
                    </>
                )}
            </Root>
        </StylesProvider>
    );
};

export default PrivateLayout;
