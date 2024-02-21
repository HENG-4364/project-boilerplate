'use client';

import React, { createContext, useContext } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '@/gql';

const ContextMe = createContext<{ me: Employee | null }>({
  me: null,
});

const EmployeeProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, loading } = useQuery(QUERY_ME);
  return (
    <ContextMe.Provider value={{ me: data?.employeeMe }}>
      {children}
    </ContextMe.Provider>
  );
};

export default EmployeeProvider;

export const useContextMe = () => {
  return useContext(ContextMe);
};
