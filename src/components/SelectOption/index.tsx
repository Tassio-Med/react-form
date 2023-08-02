import { Box, Typography } from "@mui/material";

type Props = {
  title: string;
  description: string;
  icon: string;
}


export const SelectOption = ({title, description, icon}: Props) => {
  return(
    <Box
      style={{
        display: "flex",
        border: "2px solid #16195C",
        borderRadius: "10px",
        padding: "20px",
        marginBottom: "15px",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <Box
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          backgroundColor: "#191A59",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "25px",
        }}
      >
        {icon}
      </Box>
      <Box style={{ flex: 1, marginLeft: "20px" }}>
        <Typography style={{ fontSize: "17px", fontWeight: "bold", marginBottom: "7px" }}>
          {title}
        </Typography>
        <Typography style={{ fontSize: "14px", color: "#B8B8D4" }}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
} 