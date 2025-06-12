export default function Nav() {
    return(
        <nav className="navbar navbar-expand-lg bg-light px-4 border-bottom shadow-sm">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">KeepRood</a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                    aria-controls="navbarContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarContent">
                    <form className="d-flex mx-lg-auto my-2 my-lg-0" style={{ width: '50%' }}>
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Pesquisar..."
                            aria-label="Search"
                        />
                    </form>
                </div>
            </div>
        </nav>
    );
}