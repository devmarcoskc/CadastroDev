import * as C from './styles';
import { Theme } from '../../components/Theme';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useForm, FormActions } from '../../contexts/formContext';
import { SelectOptionArea } from '../../components/SelectOption';

export const SecondStepArea = () => {
    const {state, dispatch} = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        if(state.name === '') {
          navigate('/');
        }
    }, [])

    const handleNextStep = (e: React.MouseEvent<HTMLButtonElement>) => { 
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            });
    }
    
    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        });
    }

    return (
        <div>
            <Theme>
                <C.Container>
                    <p>Passo 2/3</p>
                    <h1>{state.name}, o que melhor descreve você?</h1>
                    <p>Escolha a opção que melhor condiz com seu estado atual, profissionalmente.</p>
                    <hr/>

                    <SelectOptionArea
                        title="Sou iniciante"
                        description="Comecei a programar há menos de 2 anos"
                        icon="🥳"
                        selected={state.level === 0}
                        onClick={() => setLevel(0)}
                    />
                    
                    <SelectOptionArea
                        title="Sou programador"
                        description="Já programo há mais de 2 anos"
                        icon="😎"
                        selected={state.level === 1}
                        onClick={() => setLevel(1)}
                    />
                    <Link to="/">
                        <button>Voltar</button>
                    </Link>
                    <Link to="/step3">
                        <button onClick={handleNextStep}>Próximo</button>
                    </Link>     
                </C.Container>
            </Theme>
        </div>
    )
}