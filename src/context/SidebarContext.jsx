import { createContext, useState } from 'react';

export const SidebarContext = createContext({
  isSidebarOpen: false,
  toggleSidebar: () => {}
});

export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
    document.body.classList.toggle('no-scroll', !isSidebarOpen);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
