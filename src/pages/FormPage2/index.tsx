import { useNavigate } from "react-router-dom";
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from "../../components/Theme";
import { /* ChangeEvent,*/ useEffect } from "react";

export const FormPage2 = () => {
  const navigate = useNavigate();
  const {state, dispatch} = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2
    });
  }, [dispatch]);

  const handleNextStep = () => {
    state.name !== '' ? navigate('/step2') : alert("Preencha os dados requisitados.");
  }


  return(
    <Theme>
      <div>
        <p>Passo 2/3</p>
        <h1>Vamos começar com seu nome</h1>
        <p>Preeencha o campo abaixo com seu nome completo.</p>

        <hr />
        <button onClick={handleNextStep}>Próximo</button>
      </div>
    </Theme>
  );
}