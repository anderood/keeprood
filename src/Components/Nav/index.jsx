export default function Nav() {
    return(
        <nav className="navbar navbar-expand-lg bg-light px-4">
            <div className="container-fluid">
                {/* Logo à esquerda */}
                <a className="navbar-brand" href="#">KeepRood</a>

                {/* Botão de toggle (hambúrguer) para dispositivos móveis */}
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

                {/* Conteúdo colapsável */}
                <div className="collapse navbar-collapse" id="navbarContent">
                    {/* Barra de pesquisa centralizada */}
                    <form className="d-flex mx-lg-auto my-2 my-lg-0" style={{ width: '50%' }}>
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Pesquisar..."
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-primary" type="submit">Buscar</button>
                    </form>

                    {/* Botão Novo à direita */}
                    <div className="d-lg-flex ms-lg-auto mt-2 mt-lg-0">
                        <button className="btn btn-primary" type="button">Novo</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}