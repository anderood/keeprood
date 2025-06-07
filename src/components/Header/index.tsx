import 'bootstrap/dist/css/bootstrap.min.css'
interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}


export function Header({onOpenNewTransactionModal }: HeaderProps){

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">KeppRood</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <a href="#" className="btn btn-primary">Novo</a>
                    </ul>
                </div>
            </div>
        </nav>
    );
}