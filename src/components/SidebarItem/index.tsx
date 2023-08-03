import { Link } from "react-router-dom";
import { Box, Typography } from '@mui/material';
import { Person as ProfileIcon, Book as BookIcon, Mail as MailIcon } from '@mui/icons-material';


type Props = {
  title: string;
  description: string;
  icon: string;
  path: string;
}

export const SidebarItem = ({title, description, icon, path}: Props) => {
  return (
    <Box>
      <Link to={path}>
        <Box>
          <Typography>{title}</Typography>
          <Typography>{description}</Typography>
        </Box>
        <Box>
          {icon === "profile" && <ProfileIcon style={{ fill: "white", width: 24, height: 24 }} />}
          {icon === "book" && <BookIcon style={{ fill: "white", width: 24, height: 24 }} />}
          {icon === "mail" && <MailIcon style={{ fill: "white", width: 24, height: 24 }} />}
        </Box>
        
      </Link>
    </Box>
  );
}