"use client";

import CounterView from './view';
import { Provider } from 'react-redux';
import store from '../../redux/store';

export default function Counter() {
  return (
    <Provider store={store}>
      <main>
        <CounterView />
      </main>
    </Provider>
  );
};

