import React, { useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import { topRef } from './TopRef';

const ScrollToTop = ({ history, children }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      topRef.current.scrollIntoView(true, null);
    });
    return () => {
      unlisten();
    }
  }, []);

  return (null);
};

export default withRouter(ScrollToTop);