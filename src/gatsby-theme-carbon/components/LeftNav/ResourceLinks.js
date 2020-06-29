import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'github',
    href: 'https://github.com/redux-mvc/redux-mvc',
  },
  {
    title: 'npm',
    href: 'https://www.npmjs.com/package/@redux-mvc/redux-mvc',
  },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
