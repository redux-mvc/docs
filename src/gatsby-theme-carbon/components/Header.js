import React from 'react';
import Header from 'gatsby-theme-carbon/src/components/Header';

const CustomHeader = props => (
  <Header {...props}>
    redux-<span>mvc</span>
  </Header>
);

export default CustomHeader;
