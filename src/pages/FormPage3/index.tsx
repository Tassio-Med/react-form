import { useNavigate, Link } from "react-router-dom";
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from "../../components/Theme";
import { ChangeEvent, useEffect } from "react";

export const FormPage3 = () => {
  const navigate = useNavigate();
  const {state, dispatch} = useForm();

  useEffect(() => {
    state.name === '' 
      ? navigate('/') 
      :
        dispatch({
          type: FormActions.setCurrentStep,
          payload: 3
        });
  },);

  const handleNextStep = () => {
    state.email !== '' && state.github !== '' 
      ? console.log(state) 
      : alert("Preencha seus dados");
  }

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value,
    });
  }

  const handleChangeGithub = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value,
    });
  }

  return(
    <Theme>
      <div>
        <p>Passo 3/3</p>
        <h1>{state.name} onde podemos te encontrar na web?</h1>
        <p>Preencha seus contatos para podermos nos comunicar melhor.</p>

        <hr />

        <label>
          Qual é o seu e-mail?
          <input
            type="email"
            autoFocus
            value={state.email}
            onChange={handleChangeEmail}
          />
        </label>

        <label>
          Qual é o seu github?
          <input
            type="url"
            autoFocus
            value={state.github}
            onChange={handleChangeGithub}
          />
        </label>
        <Link to="/page2">Voltar</Link>
        <button onClick={handleNextStep}>Finalizar Cadastro</button>
      </div>
    </Theme>
  );
}