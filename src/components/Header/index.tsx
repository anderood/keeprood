import { Container, Content } from "./styles";

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}


export function Header({onOpenNewTransactionModal }: HeaderProps){

    return(
        <Container>
            <Content>
                <h1>KeepRood</h1>
                <input type="search" name="" id="" placeholder="Pesquisar"/>
                <button type="submit" onClick={onOpenNewTransactionModal} >Nova Nota</button>
            </Content>
           
        </Container>
    );
}