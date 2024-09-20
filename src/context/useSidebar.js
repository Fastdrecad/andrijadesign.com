import { useContext } from 'react';
import { SidebarContext } from './SidebarContext';

// Custom hook for using sidebar context easily
export const useSidebar = () => {
  return useContext(SidebarContext);
};
