import {FaCheckSquare, FaEdit, FaImage, FaRegCheckSquare} from 'react-icons/fa';
import {useState} from "react";
import NewNoteList from "../NewNoteList/index.jsx";

export default function NewNote(){

    const [isExpanded, setExpanded ] = useState(false);
    const [focus, setFocus] = useState(true);
    const [ listOptions, setListOptions ] = useState(false)
    const handleCollapse = () => setExpanded(false);

    const handleExpand = () => {
        !isExpanded ? setExpanded(true) : setExpanded(false)
    }

    const handleList = () => {
        setListOptions(true)
    }

    return(
        <>
            <div className="container mx-auto bg-light mt-5" onClick={handleCollapse}>
                <div className="row pt-5 pb-3 d-flex justify-content-center" >
                    <div className="" style={{ width: '600px'}} >

                        {listOptions ? (
                            <NewNoteList />
                        ): isExpanded ?

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
                                <div className="col-12">
                                <textarea
                                    className="form-control border-0 mt-2 shadow-none"
                                    style={{ resize: 'none'}}
                                    placeholder={"Criar uma nota..."}
                                    onFocus={() => setFocus(true)}
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
                            :
                            <div className="card shadow border-0 rounded px-3 py-2 d-flex align-items-center flex-row">
                                <input
                                    type="text"
                                    className="form-control border-0 shadow-none"
                                    placeholder="Criar uma nota..."
                                    onFocus={handleExpand}
                                    style={{ flex: 1 }}
                                />
                                <div className="d-flex align-items-center gap-3 ms-3">
                                    <FaRegCheckSquare className="text-secondary" role="button" onClick={handleList} />
                                    <FaImage className="text-secondary" role="button" />
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}