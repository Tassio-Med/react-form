import { useNavigate } from "react-router-dom";
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from "../../components/Theme";
import { ChangeEvent, useEffect } from "react";
import { Button, TextField, Typography } from '@mui/material';


export const FormPage1 = () => {
  const navigate = useNavigate();
  const {state, dispatch} = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1
    });
  }, [dispatch]);

  const handleNextStep = () => {
    state.name !== '' ? navigate('/page2') : alert("Preencha os dados requisitados.");
  }

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value,
    });
  }

  return(
    <Theme>
      <div>
        <Typography variant="body1">Passo 1/3</Typography>
        <Typography variant="h4">Vamos começar com seu nome</Typography>
        <Typography variant="body1">Preeencha o campo abaixo com seu nome completo.</Typography>

        <hr />

        <TextField
          autoFocus
          fullWidth
          label="Nome Completo"
          value={state.name}
          onChange={handleNameChange}
        />

        <Button variant="contained" color="primary" onClick={handleNextStep}>Próximo</Button>
      </div>
    </Theme>
  );
}