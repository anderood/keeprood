import { Container, Content } from "./styles";

export function Header(){
    return(
        <Container>
            <Content>
                <h1>KeepRood</h1>
                <input type="search" name="" id="" placeholder="Pesquisar"/>
                <button type="submit">Nova Nota</button>
            </Content>
        </Container>
    );
}