import { useNavigate } from "react-router-dom";
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from "../../components/Theme";
import { ChangeEvent, useEffect } from "react";

export const FormPage3 = () => {
  const navigate = useNavigate();
  const {state, dispatch} = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 3
    });
  }, [dispatch]);

  const handleNextStep = () => {
    state.name !== '' ? navigate('/step2') : alert("Preencha os dados requisitados.");
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
        <p>Passo 3/3</p>
        <h1>Vamos começar com seu nome</h1>
        <p>Preeencha o campo abaixo com seu nome completo.</p>

        <hr />

        <label>
          <input
            type="text"
            autoFocus
            value={state.name}
            onChange={handleNameChange}
          />
        </label>

        <button onClick={handleNextStep}>Próximo</button>
      </div>
    </Theme>
  );
}