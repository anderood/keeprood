import Card from 'react-bootstrap/Card';

export default function ItemCard( { title, text }){
    return(
        <Card style={{ width: '18rem', padding: '10px' }}>
            <Card.Body>
                <Card.Title>{ title }</Card.Title>
                <Card.Text>{ text }</Card.Text>
                {/*<Card.Link href="#">Card Link</Card.Link>*/}
                {/*<Card.Link href="#">Another Link</Card.Link>*/}
            </Card.Body>
        </Card>
    );
}