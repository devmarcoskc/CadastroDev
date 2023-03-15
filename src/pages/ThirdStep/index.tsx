import * as C from './styles';
import { Theme } from '../../components/Theme';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect} from 'react';
import { useForm, FormActions } from '../../contexts/formContext';
import { sendFormContextRequest } from '../../Request/req';

export const ThirdStepArea = () => {
    const navigate = useNavigate();
    const {state, dispatch} = useForm();

    useEffect(() => {
        if(state.name === '') {
          navigate('/');
        }
    }, [])

    const handleSetEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
        let regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]{3}\.?([a-z]+)?$/gi;
        if(regex.test(e.target.value)) {
            console.log('deu certo');
            dispatch({
                type: FormActions.setEmail,
                payload: e.target.value
            });
        } else {
            dispatch({
                type: FormActions.setEmail,
                payload: ''
            });
        }
    };

    const handleSetGitHub = (e:React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        });
    };

    const handleFinishStep = (e:React.MouseEvent<HTMLButtonElement>) => {
        if(state.email !== '' && state.github !== '') {
            sendFormContextRequest(state.currentStep, state.name, state.level, state.email, state.github);
        } else {
            alert('Prencha os dados corretamente')
        }
    };

    return (
        <div>
            <Theme>
                <C.Container>
                    <p>Passo 3/3</p>
                    <h1>Legal {state.name}, onde te achamos? </h1>
                    <p>Preencha os contatos para conseguirmos entrar em contato</p>
                    <hr/>
                    
                    <label>
                        Qual seu e-mail?
                        <input
                            type="email"
                            onChange={handleSetEmail}
                        />
                    </label>
                    <label>
                        Qual seu github?
                        <input
                            type="text"
                            onChange={handleSetGitHub}
                        />
                    </label>

                    <Link to="/step2">
                        <button>Voltar</button>
                    </Link>

                    <button onClick={handleFinishStep}>Finalizar Cadastro</button>
                </C.Container>
            </Theme>
        </div>
    )
}