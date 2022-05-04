import Modal from 'react-modal';
import { Container, Content, Form } from "./styles";
import closeImg from '../../assets/close.svg';

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
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
                >
                <button 
                    type='button'
                    onClick={onRequestClose} 
                    className="react-modal-close"
                    >
                    <img src={closeImg} alt="Fechar MOdal" />
                </button>

                <Form action="" method="post">
                    <h2>Cadastrar Nota</h2>
                    
                    <input type="text" name="" id="" placeholder='Titulo' />
                    <textarea name="" id="" placeholder='Descrição' ></textarea>
                    <button>Cadastrar</button>
                    
                </Form>
            </Modal>
        </Container>
    );
}