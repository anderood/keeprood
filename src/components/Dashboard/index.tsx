import { Card } from "../Card";

export function Dashboard() {
    return(
        <div className="container">
            <div className="col-md-12 w-100">
                <div className="row p-3 text-center">
                    <h1>Minhas Notas</h1>
                </div>
                <div id="containerDash" className="row d-flex justify-content-center p-3 gap-2"></div>
            </div>
        </div>
    );
}