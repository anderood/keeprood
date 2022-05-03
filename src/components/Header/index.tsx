import Modal from 'react-modal';
import { Container, Content, Form } from "./styles";

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
            <Modal             
                isOpen={isOpen} 
                onRequestClose={onRequestClose} 
                overlayClassName="overlay"
                className="Modal"
                >


                <Form action="" method="post">
                    <h2>Cadastrar Nota</h2>
                    
                    <input type="text" name="" id="" placeholder='Titulo' />
                    <textarea name="" id="" ></textarea>
                    <button>Cadastrar</button>
                    
                </Form>
            </Modal>
        </Container>
    );
}