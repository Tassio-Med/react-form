import { Link } from "react-router-dom";

type Props = {
  title: string;
  description: string;
  icon: string;
  path: string;
}

export const SidebarItem = ({title, description, icon, path}: Props) => {
  return (
    <div>
      <Link to={path}>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div>
          {/* Área do ícone */}
        </div>
        
      </Link>
    </div>
  );
}