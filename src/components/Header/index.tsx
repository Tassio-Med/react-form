import { Typography } from "@mui/material";

export const Header = () => {
  return (
    <div  style={{ padding: "25px 0", borderBottom: "1px solid #16195C" }}>
      <Typography variant="h1" style={{ margin: 0, padding: 0, fontSize: 28 }}>
        Cadastro de Desenvolvedor
      </Typography>
      <Typography variant="body1" style={{ fontSize: 14, color: "#B8B8D4" }}>
        Faça seu cadastro no formulário e seja visto pelos Tech Recruiters!
      </Typography>
    </div>
  )
}