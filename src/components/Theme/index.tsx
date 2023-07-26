import { ReactNode } from "react"
import { Header } from "../Header"
type Props = {
  children: ReactNode
}

export const Theme = ({children}: Props) => {
  return (
    <div>
      <div>
        <Header/>
        <div>
          <Sidebar>
            ...
          <Sidebar/>
          <div>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}