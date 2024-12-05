import { useSettings } from "../../providers/settings"

export const Settings = () => {
  const { settings, updateSetting } = useSettings();

  const fahrenheit = settings.Fahrenheit.value ? 'Fahrenheit' : 'Celcius';
  const imperial = settings.Imperial.value ? 'Imperial' : 'Metric';

  return (
    <ul>
      <li>
        <button onClick={() => updateSetting('Fahrenheit', !settings.Fahrenheit.value)} type="button">{fahrenheit}</button>
      </li>
      <li>
        <button onClick={() => updateSetting('Imperial', !settings.Imperial.value)} type="button">
          {imperial}
        </button>
      </li>
    </ul>
  )
}
