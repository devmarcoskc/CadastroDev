import * as C from './styles';

type SelectProps = {
    title: string;
    description: string;
    icon: string;
    selected: boolean;
    onClick: () => void
}


export const SelectOptionArea = ({title, description, icon, selected, onClick}: SelectProps) => {
    
    return (
        <C.Container onClick={onClick} select={selected}>
            <C.Icon>{icon}</C.Icon>
            <C.Info>
                <C.Title>{title}</C.Title>
                <C.Description>{description}</C.Description>
            </C.Info>
        </C.Container>
    )
}