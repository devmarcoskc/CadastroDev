import { ReactNode } from 'react';
import { Header } from '../Header';
import * as C from './styles';
import { SideBarItem } from '../SideBarItem';
import { useForm } from '../../contexts/formContext';

type Props = {
    children: ReactNode
}

export const Theme = ({children}: Props) => {
    const {state} = useForm();

    return (
        <C.ThemeContainer>
            <C.Area>
                <Header/>
                <C.Steps>
                    <C.Sidebar>
                        <SideBarItem title="Pessoal" 
                        description="Se identifique" 
                        icon="profile" 
                        path="/"
                        active={state.currentStep === 0}
                        />
                        <SideBarItem title="Profissional" 
                        description="Seu nível" 
                        icon="book" 
                        path="/step2"
                        active={state.currentStep === 1}
                        />
                        <SideBarItem title="Contatos" 
                        description="Como te achar" 
                        icon="mail" 
                        path="/step3"
                        active={state.currentStep === 2}
                        />
                    </C.Sidebar>
                    <C.Page>
                        {children}
                    </C.Page>
                </C.Steps>
            </C.Area>
        </C.ThemeContainer>
    )
}