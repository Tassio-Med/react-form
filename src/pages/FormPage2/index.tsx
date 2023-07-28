import { useNavigate } from "react-router-dom";
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from "../../components/Theme";
import { /* ChangeEvent,*/ useEffect } from "react";
import { SelectOption } from "../../components/SelectOption";

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

        <SelectOption
          title="Sou programador iniciante"
          description="Já programo há 1 ano"
          icon="😇"
        />
        <SelectOption
          title="Sou programador sênior"
          description="Já programo há mais de 7 anos"
          icon="🥸"
        />

        <button onClick={handleNextStep}>Próximo</button>
      </div>
    </Theme>
  );
}