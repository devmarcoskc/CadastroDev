import * as C from './styles';
import { Link } from 'react-router-dom';
import {ReactComponent as ProfileIcon} from '../../icons/profile.svg';
import {ReactComponent as BookIcon} from '../../icons/book.svg';
import {ReactComponent as MailIcon} from '../../icons/mail.svg';

type SidebarProps = {
    title: string;
    description: string;
    icon: string;
    path: string;
    active: boolean;
}
export const SideBarItem = ({title, description, icon, path, active}:SidebarProps) => {

    return (
        <C.Container>
            <Link to={path}>
                <C.InfoDiv>
                    <C.Title>{title}</C.Title>
                    <C.Description>{description}</C.Description>
                </C.InfoDiv>
                <C.IconArea style={{backgroundColor: `${active ? '#25CD89' :'#494A7C'}`}}>
                    {icon === 'profile' &&
                        <ProfileIcon fill='white' width={24} height={24}/>
                    }
                    {icon === 'book' &&
                        <BookIcon fill='white' width={24} height={24}/>
                    }
                    {icon === 'mail' &&
                        <MailIcon fill='white' width={24} height={24}/>
                    }
                </C.IconArea>
                <C.Point style={{backgroundColor: `${active ? '#25CD89' :'#494A7C'}`}}>
                    .
                </C.Point>
            </Link>
        </C.Container>
    )
}