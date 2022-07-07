import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {EmployeesResult} from './types';

export const employeeApi = createApi({
  reducerPath: 'employeeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://dummy.restapiexample.com/api/v1/',
  }),
  endpoints: builder => ({
    fetchEmployees: builder.query<EmployeesResult, void>({
      query: () => 'employees',
    }),
  }),
});

export const {useFetchEmployeesQuery} = employeeApi;
