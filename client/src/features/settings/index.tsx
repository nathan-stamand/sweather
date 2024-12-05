import './styles.css'
import { useEffect, useRef, useState } from "react";
import { useSettings } from "../../providers/settings"

export const Settings = () => {
  const { settings, updateSetting } = useSettings();
  const [display, setDisplay] = useState(false);
  const menu = useRef<HTMLUListElement>(null);

  const fahrenheit = settings.Fahrenheit.value ? 'Fahrenheit' : 'Celcius';
  const imperial = settings.Imperial.value ? 'Imperial' : 'Metric';

  const handleClick = (e) => {
    if (menu.current && !menu.current.contains(e.target)) {
      setDisplay(false);
    }
  }

  useEffect(() => {
    if (display) {
      window.addEventListener('mousedown', handleClick)
    }

    return () => {
      window.addEventListener('mousedown', handleClick)
    }
  }, [display])

  return (
    <menu className="menu" ref={menu} >
      <button className="menu__toggle" onClick={() => setDisplay(!display)} type="button">Menu</button>
      {display && (
        <ul className='menu__options stack'>
          <li>
            <button
              className='menu__option'
              onClick={() => updateSetting('Fahrenheit', !settings.Fahrenheit.value)}
              type="button"
            >
              {fahrenheit}
            </button>
          </li>
          <li>
            <button
              className='menu__option'
              onClick={() => updateSetting('Imperial', !settings.Imperial.value)}
              type="button"
            >
              {imperial}
            </button>
          </li>
        </ul>
      )}
    </menu>
  )
}
