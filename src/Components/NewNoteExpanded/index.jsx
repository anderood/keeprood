export default function NewNoteExpanded({ handleCollapse, title, textArea }){
    return(
        <div className="card shadow border-0 rounded p-3 d-flex align-items-center" style={{ height: 'auto'}}
             onClick={(e) => e.stopPropagation()}>
            <div className="col-12">
                <input
                    type="text"
                    className="form-control border-0 shadow-none"
                    placeholder="Titulo"
                    value={title}
                    onChange={(e) => console.log({ title: e.target.value })}
                />
            </div>
            <div className="col-12">
                <textarea
                    className="form-control border-0 mt-2 shadow-none"
                    style={{ resize: 'none'}}
                    placeholder={"Criar uma nota..."}
                    // onFocus={() => setFocus(true)}
                    value={textArea}
                    onChange={(e) => console.log({ textArea: e.target.value })}
                    rows={10}>
                </textarea>
            </div>
            <div className="col-12 d-flex justify-content-end pt-4">
                <button
                    className="btn btn-outline-dark"
                    onClick={handleCollapse}
                >
                    Fechar
                </button>
            </div>
        </div>
    );
}