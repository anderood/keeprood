import {FaCheckSquare, FaEdit, FaImage, FaRegCheckSquare} from 'react-icons/fa';
import {useState} from "react";
import NewNoteList from "../NewNoteList/index.jsx";
import NewNoteExpanded from "../NewNoteExpanded/index.jsx";
import NewNote from "../NewNote/index.jsx";

export default function NewNoteContainer(){

    const [isExpanded, setExpanded ] = useState(false);
    const [focus, setFocus] = useState(true);
    const [ listOptions, setListOptions ] = useState(false)
    const handleCollapse = () => {
        setExpanded(false)
    };

    const handleExpand = () => {
        !isExpanded ? setExpanded(true) : setExpanded(false)
    }

    const handleList = () => {
        !listOptions ? setListOptions(true) : setListOptions(false)
    }

    const componentView = () => {
        if (listOptions) return (<NewNoteList closeOption={handleList} handleCollapse={handleCollapse}/> );
        if (isExpanded) return (<NewNoteExpanded handleCollapse={handleCollapse} />);
        return(
            <NewNote handleList={handleList} handleExpand={handleExpand} />
        );
    }

    return(
        <>
            <div className="container mx-auto bg-light mt-5" onClick={handleCollapse}>
                <div className="row pt-5 pb-3 d-flex justify-content-center" >
                    <div className="" style={{ width: '600px'}} >
                        {componentView()}
                    </div>
                </div>
            </div>
        </>
    );
}