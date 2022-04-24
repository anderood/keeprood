import { useState } from 'react';
import Modal from 'react-modal';
import { Container, Content } from "./styles";


export function Header(){

    const [ modalIsOpen, setModalIsOpen ] = useState(false);

    function handleModalIsOpen(){
        setModalIsOpen(true);
    }

    function handleModalIsClose(){
        setModalIsOpen(false);
    }

    return(
        <Container>
            <Content>
                <h1>KeepRood</h1>
                <input type="search" name="" id="" placeholder="Pesquisar"/>
                <button type="submit" onClick={handleModalIsOpen} >Nova Nota</button>
            </Content>
            <Modal isOpen={modalIsOpen} onRequestClose={handleModalIsClose} />
        </Container>
    );
}