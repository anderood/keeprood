import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

interface CardProps {
    cardTitle: string,
    cardText: string
}

export function Card({ cardTitle, cardText }: CardProps) {
    return (
        <div className="card" style={{ width: `18rem`}}>
            <div className="card-body">
                <h5 className="card-title">{ cardTitle }</h5>
                <p className="card-text">{ cardText }</p>
                <div className="row">
                    <div className="col-12">
                        <div className="col-6">
                            <FontAwesomeIcon icon={faPenToSquare} className="p-2" />
                            <FontAwesomeIcon icon={faTrash} className="p-2"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}