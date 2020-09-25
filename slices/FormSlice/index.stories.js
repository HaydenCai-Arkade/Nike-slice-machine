import React from 'react';
import MySlice from '.';
import mock from './mock.json';
import mock2 from './mock2.json';

export default {
  title: 'FormSlice',
  component: MySlice,
};

export const __DefaultSlice = () => <MySlice slice={mock} />;
export const __OptionalForm = () => <MySlice slice={mock2} />;
