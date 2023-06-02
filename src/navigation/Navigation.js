import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MainStack from './MainStack';
import MainDrawer from './Drawer';
const Navigation = () => {
  return (
    <NavigationContainer>
      {/* <MainStack /> */}
      <MainDrawer />
    </NavigationContainer>
  );
};

export default Navigation;
