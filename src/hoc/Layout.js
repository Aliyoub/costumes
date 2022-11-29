import React from 'react'

import Header from "../Header";
import Footer from "../Footer";
import Content from '../Content';

const Layout = (props) => {
    return (
      <>
        <Header />
        {/* <Content /> */}
        {console.log('props.children', props.children)}
        <main>{props.children}</main>
        <Footer />
      </>
    );
}

export default Layout
