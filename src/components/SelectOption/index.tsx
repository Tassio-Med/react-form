type Props = {
  title: string;
  description: string;
  icon: string;
}


export const SelectOption = ({title, description, icon}: Props) => {
  return(
    <div >
      <div>{icon}</div>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}