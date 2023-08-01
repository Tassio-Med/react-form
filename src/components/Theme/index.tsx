import { ReactNode } from "react"
import { Header } from "../Header"
import { SidebarItem } from "../SidebarItem"

type Props = {
  children: ReactNode
}

export const Theme = ({children}: Props) => {
  return (
    <div>
      <div>
        <Header/>
        <div>
          <div>
            <SidebarItem
              title="Pessoa"
              description="Se identifique"
              icon="profile"
              path="/"
            />
            <SidebarItem
              title="Profissional"
              description="Seu nível"
              icon="book"
              path="/page2"
            />
            <SidebarItem
              title="Contatos"
              description="Como te achar"
              icon="mail"
              path="/page3"
            />
          </div>
          <div>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}