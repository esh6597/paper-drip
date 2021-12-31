//Note: this method does not work; probably due to the nature of the sidebar.
//  This file was just included to show how you could do this
//  if you didn't have a relatively old, prepackaged sidebar like
//  the one this project uses.

import React from "react";
import { withRouter } from "react-router-dom";

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (
      this.props.location.pathname !== prevProps.location.pathname
    ) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return null;
  }
}

export default withRouter(ScrollToTop);