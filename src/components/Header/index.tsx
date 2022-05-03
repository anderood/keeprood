import Modal from 'react-modal';
import { Container, Content } from "./styles";

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
    isOpen: boolean,
    onRequestClose: ()=> void;
}


export function Header({onOpenNewTransactionModal, isOpen, onRequestClose }: HeaderProps){

    return(
        <Container>
            <Content>
                <h1>KeepRood</h1>
                <input type="search" name="" id="" placeholder="Pesquisar"/>
                <button type="submit" onClick={onOpenNewTransactionModal} >Nova Nota</button>
            </Content>
            <Modal isOpen={isOpen} onRequestClose={onRequestClose} />
        </Container>
    );
}