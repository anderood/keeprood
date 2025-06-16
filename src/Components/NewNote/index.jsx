import {FaImage, FaRegCheckSquare} from "react-icons/fa";

export default function NewNote({ handleExpand, handleList }){
    return(
        <div className="card shadow border-0 rounded px-3 py-2 d-flex align-items-center flex-row">
            <input
                type="text"
                className="form-control border-0 shadow-none"
                placeholder="Criar uma nota..."
                onFocus={handleExpand}
                style={{ flex: 1 }}
            />
            <div className="d-flex align-items-center gap-3 ms-3">
                <FaRegCheckSquare className="text-secondary fs-5" role="button" onClick={handleList} />
                <FaImage className="text-secondary fs-5" role="button" />
            </div>
        </div>
    );
}