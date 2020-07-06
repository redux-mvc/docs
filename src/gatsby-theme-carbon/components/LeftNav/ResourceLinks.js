import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'github',
    href: 'https://github.com/redux-mvc/core',
  },
  {
    title: 'npm',
    href: 'https://www.npmjs.com/package/@redux-mvc/core',
  },
  { href: 'https://join.slack.com/t/redux-mvc/shared_invite/zt-flv1buf9-v~5kZ9yleC3c44i4d3FqHg', title: 'slack' },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
