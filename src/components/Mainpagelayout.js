import React from 'react';
import Title from './Title';
import Navs from './Navs';

const Mainpagelayout = ({ children }) => {
  return (
    <div>
      <Title title='Box Office' subtitle="Are u looking for a movie" />
      <Navs />
      {children}
    </div>
  );
};

export default Mainpagelayout;
