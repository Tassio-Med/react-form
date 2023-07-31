import { useNavigate, Link } from "react-router-dom";
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from "../../components/Theme";
import { /* ChangeEvent,*/ useEffect } from "react";
import { SelectOption } from "../../components/SelectOption";

export const FormPage2 = () => {
  const navigate = useNavigate();
  const {state, dispatch} = useForm();

  useEffect(() => {
    state.name === '' 
      ? navigate('/') 
      :
        dispatch({
          type: FormActions.setCurrentStep,
          payload: 2
        });
  },);

  const handleNextStep = () => {
    state.name !== '' ? navigate('/page3') : alert("Preencha os dados requisitados.");
  }



  return(
    <Theme>
      <div>
        <p>Passo 2/3</p>
        <h1>{state.name}, o que melhor descreve você?</h1>
        <p>Escolha a opção que melhor condiz com seu estado atual, profissionalmente.</p>

        <hr />

        <SelectOption
          title="Sou programador iniciante"
          description="Já programo há 1 ano"
          icon="😇"
        />
        <SelectOption
          title="Sou programador pleno"
          description="Já programo há mais de 3 anos"
          icon="🥸"
        />

        <Link to="/">Voltar</Link>
        <button onClick={handleNextStep}>Próximo</button>
      </div>
    </Theme>
  );
}