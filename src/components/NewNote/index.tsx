import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import { Form } from './styles';

interface NewNoteProps {
    isOpen: boolean,
    onRequestClose: ()=> void;
}

export function NewNote({isOpen, onRequestClose}: NewNoteProps) {
    return(
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
    );
}