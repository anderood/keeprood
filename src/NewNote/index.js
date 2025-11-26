import {useEffect, useState} from "react";
import NewNoteInput from "../NewNoteInput";

export default function Index() {

    const [close, setClose] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [ saveData, setSaveData ] = useState([]);

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
                description
            })
        }
        setClose(true)
    }


    return (
        <div className="min-h w-full flex justify-center pb-10 pt-10 bg-slate-100" onClick={ handleCloseOption } >
            <div className="w-full max-w-xl bg-white border border-gray-200 rounded-2xl shadow-md p-4" onClick={(e) => e.stopPropagation()}>
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
