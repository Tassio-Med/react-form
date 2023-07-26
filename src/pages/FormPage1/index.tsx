import { useHistory } from "react-router-dom";
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from "../../components/Theme";

export const FormPage1 = () => {
  const history = useHistory();
  const {state, dispatch} = useForm();

  const handleNextStep = () => {
    history.push('/step2');
  }

  return(
    <Theme>
      <div>
        <p>Passo 1/3 - {state.name}</p>
        <h1>Vamos começar com seu nome</h1>
        <p>Preeencha o campo abaixo com seu nome completo.</p>

        <hr />

        <label>
          <input
            type="text"
            autoFocus
            value={state}
          />
        </label>

        <button onClick={handleNextStep}>Próximo</button>
      </div>
    </Theme>
  );
}