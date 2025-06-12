import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Container(){
    return(
        <div className="container bg-light p-4">
           <div className="row gap-2 p-3 d-flex justify-content-center">

               <Card style={{ width: '18rem', height: '14rem' }}>
                   <Card.Body>
                       <Card.Title>Leitura de Livros - 2024</Card.Title>
                       <Card.Text>
                           Some quick example text to build on the card title and make up the
                           bulk of the card's content.
                       </Card.Text>
                       <Card.Link href="#">Card Link</Card.Link>
                       <Card.Link href="#">Another Link</Card.Link>
                   </Card.Body>
               </Card>

           </div>
        </div>
    );
}

export default Container;