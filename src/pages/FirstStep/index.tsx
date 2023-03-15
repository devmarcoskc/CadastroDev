import * as C from './styles';
import { Theme } from '../../components/Theme';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useForm, FormActions } from '../../contexts/formContext';

export const FirstStepArea = () => {
    const [name, setName] = useState('');
    const {state, dispatch} = useForm();

    const handleSetName = (e:React.ChangeEvent<HTMLInputElement>) => {
        let regex = /[A-Z][a-z]* [A-Z][a-z]*/gmi;
        if(regex.test(e.target.value)) {
            setName(e.target.value);
        }
        
    };

    const handleNextStep = (e: React.MouseEvent<HTMLButtonElement>) => { 
        if(name !== '') {
            dispatch({
                type: FormActions.setName,
                payload: name
            });
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 1
            });
        } else {
            alert('digite um nome válido!')
        }

    }

    return (
        <div>
            <Theme>
                <C.Container>
                <p>Passo 1/3</p>
                <h1>Vamos começar com seu nome</h1>
                <p>Preencha o campo abaixo com seu nome completo</p>
                <hr/>
                <label>
                    Seu nome Completo
                    <input
                        type="text"
                        autoFocus
                        onChange={handleSetName}
                    />
                </label>
                <Link to="/step2">
                    <button onClick={handleNextStep}>Próximo</button>
                </Link>
                </C.Container>
            </Theme>
        </div>
    )
}