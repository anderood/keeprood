import {useState} from "react";

export default function NewNoteExpanded({ handleCollapse }){

    const [ title, setTitle ] = useState('');
    const [ text, setText ] = useState('');
    const [ storage, setStorage ] = useState([]);

    function StopPropagation(event){
        event.stopPropagation();
        checkFields()
    }

    function checkFields(){
       if (title !== '' || text !== '') {
           const newNote = {
               id: Math.random(),
               title: title,
               text: text
           }

           console.log({newNote: newNote })

           setStorage([storage, ...newNote])
       }
    }

    return(
        <div className="card shadow border-0 rounded p-3 d-flex align-items-center" style={{ height: 'auto'}}
             // onClick={(e) => e.stopPropagation()}
            onClick={(event) => StopPropagation(event)}
        >
            <div className="col-12">
                <input
                    type="text"
                    className="form-control border-0 shadow-none"
                    placeholder="Titulo"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
            </div>
            <div className="col-12">
                <textarea
                    className="form-control border-0 mt-2 shadow-none"
                    style={{ resize: 'none'}}
                    placeholder={"Criar uma nota..."}
                    rows={10}
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                >
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