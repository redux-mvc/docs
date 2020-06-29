import React from 'react';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';

import HomepageBanner from "./HomepageBanner"


const BannerText = () => <h1>redux-<span style={{ fontWeight: 600 }}>mvc</span></h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} />,
  FirstCallout: <div/>,
  SecondCallout: <div/>,
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
