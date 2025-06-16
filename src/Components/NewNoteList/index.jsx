export default function NewNoteList(){
    return(
        <div className="card shadow border-0 rounded p-3 d-flex align-items-center" style={{ height: 'auto'}}
             onClick={(e) => e.stopPropagation()}
        >
            <div className="col-12">
                <input
                    type="text"
                    className="form-control border-0 shadow-none"
                    placeholder="Titulo"
                />
            </div>
            <div className="col-12 container d-flex">
                <input type="checkbox"/>
                <input
                    type="text"
                    className="form-control border-0 shadow-none"
                />
            </div>
            <div className="col-12 container d-flex">
                <a href="#" className="text-decoration-line-through">+ Item da Lista</a>
            </div>
            <div className="col-12 d-flex justify-content-end pt-4">
                <button
                    className="btn btn-outline-dark"
                >
                    Fechar
                </button>
            </div>
        </div>
    );
}