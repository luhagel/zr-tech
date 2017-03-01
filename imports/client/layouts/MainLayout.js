import React, { PropTypes } from 'react';

import TopNav from '../components/TopNav';

const MainLayout = ({ children }) => {
  const links = [{ name: 'Home', path: '/' },
                 { name: 'Chat', path: '/chat' },
                 { name: 'Forums', path: '/forums' },
                 { name: 'Login', path: '/signin' }];

  return (
    <div>
      <TopNav links={links} branding="ZR Tech" />
      <div id="layout-wrapper">
        {children}
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  /* eslint-disable */
  children: PropTypes.object.isRequired,
  /* eslint-enable */
};

export default MainLayout;
