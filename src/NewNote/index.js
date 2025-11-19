import {useState} from "react";
import NewNoteInput from "../NewNoteInput";

export default function Index() {

    const [close, setClose] = useState(false);

    if (close) {
        return <NewNoteInput />;
    }

    function handleCloseOption(e){
        e.preventDefault();
        setClose(true)
    }


    return (
        <div className="min-h w-full flex justify-center pt-10 bg-slate-100" onClick={ handleCloseOption } >
            <div className="w-full max-w-xl bg-white border border-gray-200 rounded-2xl shadow-md p-4" >
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
                />

                <textarea
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
                />

                <div className="mt-3 flex justify-end">
                    <button
                        type="button"
                        className="text-sm font-medium text-blue-600"
                    >
                        Fechar
                    </button>
                </div>
            </div>
        </div>
    );
}
