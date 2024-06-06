"use client";
import { createContext, useEffect, useState, ReactNode  } from "react";

interface AppContextProps {
  theme?: string;
  toggleTheme?: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const AppContext = createContext<AppContextProps>({});

function getThemeApplication() {
  if (typeof window !== "undefined") {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
}

export function getCurrentTheme () {
  const localTheme = typeof window !== 'undefined' &&  localStorage.getItem('theme') ? localStorage.getItem('theme') : ''
  return localTheme ?  localTheme : 'light'
}

export function ThemeProvider(props: ThemeProviderProps) {
  const [theme, setTheme] = useState(getCurrentTheme());

  function toggleTheme() {
    const newtheme = theme === "light" ? "dark" : "light";
    setTheme(newtheme);
    localStorage.setItem("theme", newtheme);
    getThemeApplication()
  }

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme") || getCurrentTheme();
    setTheme(currentTheme);
    getThemeApplication();
  }, []);

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;
