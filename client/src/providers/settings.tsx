import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

type Setting = {
  value: boolean;
  option: string;
}

const DEFAULT_SETTINGS: Record<string, Setting> = {
  Fahrenheit: {
    value: true,
    option: 'Celcius'
  },
  Imperial: {
    value: true,
    option: 'Metric'
  }
}

type SettingsContext = {
  settings: typeof DEFAULT_SETTINGS;
  setSettings: Dispatch<SetStateAction<typeof DEFAULT_SETTINGS>>;
}

const Settings = createContext<SettingsContext>({
  settings: DEFAULT_SETTINGS,
  setSettings: () => { },
});

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  return (
    <Settings.Provider value={{ settings, setSettings }}>
      {children}
    </Settings.Provider>
  )
}

export const useSettings = () => {
  const { settings, setSettings } = useContext(Settings);

  return {
    settings,
    setSettings,
  }
}
