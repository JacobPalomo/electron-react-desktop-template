type DesktopAPI = Record<string, never>

declare global {
  interface Window {
    api: DesktopAPI
  }
}

export {}
