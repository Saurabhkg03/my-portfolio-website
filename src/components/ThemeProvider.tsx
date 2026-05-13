"use client"

import * as React from "react"

type Theme = "light" | "dark"

type ThemeContextValue = {
  resolvedTheme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = React.createContext<ThemeContextValue | null>(null)

const THEME_STORAGE_KEY = "theme"
const THEME_EVENT = "theme-change"

function applyTheme(theme: Theme) {
  const root = document.documentElement
  root.classList.toggle("dark", theme === "dark")
  root.style.colorScheme = theme
}

function readStoredTheme(): Theme {
  try {
    const value = window.localStorage.getItem(THEME_STORAGE_KEY)
    if (value === "light" || value === "dark") {
      return value
    }
  } catch {}

  return "dark"
}

function getThemeSnapshot(): Theme {
  if (typeof document === "undefined") {
    return "dark"
  }

  return document.documentElement.classList.contains("dark") ? "dark" : "light"
}

function subscribe(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => {}
  }

  const handleThemeChange = () => onStoreChange()
  const handleStorage = (event: StorageEvent) => {
    if (event.key === THEME_STORAGE_KEY) {
      const nextTheme = readStoredTheme()
      applyTheme(nextTheme)
      onStoreChange()
    }
  }

  window.addEventListener(THEME_EVENT, handleThemeChange)
  window.addEventListener("storage", handleStorage)

  return () => {
    window.removeEventListener(THEME_EVENT, handleThemeChange)
    window.removeEventListener("storage", handleStorage)
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const resolvedTheme = React.useSyncExternalStore<Theme>(
    subscribe,
    getThemeSnapshot,
    () => "dark"
  )

  React.useEffect(() => {
    applyTheme(readStoredTheme())
    window.dispatchEvent(new Event(THEME_EVENT))
  }, [])

  const setTheme = (theme: Theme) => {
    applyTheme(theme)

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme)
    } catch {}

    window.dispatchEvent(new Event(THEME_EVENT))
  }

  return (
    <ThemeContext.Provider value={{ resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = React.useContext(ThemeContext)

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider")
  }

  return context
}
