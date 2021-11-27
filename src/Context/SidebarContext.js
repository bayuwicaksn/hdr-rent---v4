import React, { useContext, useState } from "react";

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
