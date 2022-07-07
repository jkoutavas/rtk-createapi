import React, {ReactNode} from 'react';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import {employeeApi} from '../features/employee/employeeAPI';

const store = configureStore({
  reducer: {[employeeApi.reducerPath]: employeeApi.reducer},
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(employeeApi.middleware),
});

export type InferredStore = typeof store;

type Props = {
  children: ReactNode;
};
export function StoreProvider(props: Props): JSX.Element {
  const {children} = props;
  return <Provider store={store}>{children}</Provider>;
}
