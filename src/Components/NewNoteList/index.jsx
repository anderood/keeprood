import {useState} from "react";
import CloseButton from "react-bootstrap/CloseButton";

export default function NewNoteList({ handleCollapse }){


    const [ newOptions, setNewOptions ] = useState(['']);

    const newField = () => {
        setNewOptions([...newOptions, { id: Date.now() }])
    }

    const removeField = (id) => {
        setNewOptions(newOptions.filter((newOptions) => newOptions.id !== id ))
    }

    return(
        <div className="card shadow border-0 rounded p-3 d-flex align-items-center" style={{ height: 'auto'}} onClick={(e) => e.stopPropagation()}>
            <div className="col-12 pb-1">
                <input
                    type="text"
                    className="form-control border-0 shadow-none"
                    placeholder="Titulo"
                />
            </div>

            {
                newOptions.map((newOption) => (
                    <div className="col-12 container d-flex border-top border-bottom align-items-center">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id={`check-${newOption.id}`}
                            />
                        </div>
                        <input type="text" className="form-control border-0 shadow-none"/>
                        <CloseButton onClick={ () => removeField(newOption.id)} />
                    </div>
                ))
            }

            <div className="col-12 container d-flex align-items-center m-3">
                <span className="text-black-50 fs-4">+</span>
                <a href="#" onClick={newField} className="text-decoration-none px-2 text-black-50">Item da Lista</a>
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