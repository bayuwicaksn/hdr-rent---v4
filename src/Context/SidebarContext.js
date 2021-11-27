import React, { useContext, useEffect, useState } from "react";

const SidebarContext = React.createContext();
const ToggleSidebarContext = React.createContext();

export function useSidebar() {
  return useContext(SidebarContext);
}

export function useToggleSidebar() {
  return useContext(ToggleSidebarContext);
}

export function SidebarProvider({ children }) {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1000) {
      setSidebarToggle(true);
    }
  }, []);

  function toggleSidebar() {
    setSidebarToggle(!sidebarToggle);
  }

  return (
    <SidebarContext.Provider value={sidebarToggle}>
      <ToggleSidebarContext.Provider value={toggleSidebar}>
        {children}
      </ToggleSidebarContext.Provider>
    </SidebarContext.Provider>
  );
}
