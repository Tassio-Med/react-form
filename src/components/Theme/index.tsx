import { ReactNode } from "react"
import { Header } from "../Header"
import { SidebarItem } from "../SidebarItem"
import { Box, Container, Paper, Grid } from "@mui/material";


type Props = {
  children: ReactNode
}

export const Theme = ({children}: Props) => {
  return (
    <Box bgcolor="#02044A" color="#FFF" minHeight="100vh">
      <Container maxWidth="lg">
        <Grid container>
          <Header/>
          <Grid container>
            <Grid item xs={3}>
              <Paper elevation={3} style={{ padding: '20px' }}>
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
              </Paper>
            </Grid>
            <Grid item xs={9}>
              <Paper elevation={3} style={{ padding: '40px' }}>
                {children}
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}