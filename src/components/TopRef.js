import React, { useEffect, createRef } from 'react';
import { withRouter } from 'react-router-dom';

export const topRef = createRef(null);

export const Top = () => {
  return (
    <div
      ref={topRef}
    ></div>
  );
};