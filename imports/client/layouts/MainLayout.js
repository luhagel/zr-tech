import React, { PropTypes } from 'react';

import TopNav from '../components/TopNav';

const MainLayout = ({ children }) => {
  const links = [{ name: 'Home', path: '/' },
                 { name: 'Chat', path: '/chat' },
                 { name: 'Forums', path: '/forums' }];

  return (
    <div id="layout-wrapper">
      <TopNav links={links} branding="ZR Tech" />
      {children}
    </div>
  );
};

MainLayout.propTypes = {
  /* eslint-disable */
  children: PropTypes.object.isRequired,
  /* eslint-enable */
};

export default MainLayout;
