import './styles.css'
import { ReactNode } from "react"

export const Card = ({ children }: { children: ReactNode }) => {
  return (
    <article className='card stack'>
      {children}
    </article>
  )
}
