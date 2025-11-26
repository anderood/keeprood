import {useEffect, useState} from "react";
import NewNoteInput from "../NewNoteInput";
import { BsPin, BsFillPinFill } from "react-icons/bs";


export default function Index() {

    const [close, setClose] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [ saveData, setSaveData ] = useState([]);
    const [ fixedPin, setFixedPin ] = useState(false);

    useEffect(() => {
        console.log(saveData)
    }, [saveData]);

    if (close) {
        return <NewNoteInput />;
    }

    const handleCloseOption = (e) => {

        e.preventDefault();

        if (title !== '' || description !== '') {
            setSaveData({
                id: +1,
                title,
                description,
                pined: fixedPin
            })
        }
        setClose(true)
    }

    function handleFixedPin(){
        !fixedPin ? setFixedPin(true) : setFixedPin(false)
    }

    return (
        <div className="min-h w-full flex justify-center pb-10 pt-10 bg-slate-100" onClick={ handleCloseOption } >
            <div className="w-full max-w-xl bg-white border border-gray-200 rounded-2xl shadow-md p-4" onClick={(e) => e.stopPropagation()}>
                <div className="flex max-w-full" >
                    <div className="w-full">
                        <input
                            type="text"
                            className="
                                w-full
                                bg-transparent
                                border-none
                                outline-none
                                text-lg
                                font-semibold
                                placeholder:text-gray-500
                            "
                            placeholder="Título"
                            onChange={ (e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-items-center justify-end" onClick={handleFixedPin}>
                        {fixedPin
                            ? <BsFillPinFill size="1.3rem" />
                            : <BsPin size="1.3rem"/>
                        }
                    </div>
                </div>

                <textarea
                    autoFocus={true}
                    className="
                        mt-2
                        w-full
                        bg-transparent
                        border-none
                        outline-none
                        resize-none
                        text-sm
                        placeholder:text-gray-500
                    "
                    rows={4}
                    placeholder="Criar uma nota..."
                    onChange={ (e) => setDescription(e.target.value)}
                />

                <div className="mt-3 flex justify-end">
                    <button
                        type="button"
                        className="text-sm font-medium hover:bg-gray-100 px-4 py-2"
                        onClick={handleCloseOption}
                    >
                        Fechar
                    </button>
                </div>
            </div>
        </div>
    );
}
