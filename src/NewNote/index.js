import {useEffect, useState} from "react";
import NewNoteInput from "../NewNoteInput";
import { BsPin, BsFillPinFill } from "react-icons/bs";
import { IoColorPaletteOutline } from "react-icons/io5";
import { PiDropSlashBold } from "react-icons/pi";


export default function Index() {

    const [close, setClose] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [ saveData, setSaveData ] = useState([]);
    const [ fixedPin, setFixedPin ] = useState(false);
    const [ drop, setDrop ] = useState(false);
    const [ changeColor, setChangeColor ] = useState(false);
    const [ color, setColor ] = useState('bg-white');
    const [ hoverColor, setHoverColor ] = useState('hover:bg-grey-200');

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

    function handleShowDrop() {
        !drop ? setDrop(true) : setDrop(false)
    }

    function handleChangeColor(color, hover) {
        setChangeColor(true)
        setColor(color)
        setHoverColor(hover)
    }

    return (
        <div className="min-h w-full flex justify-center pb-10 pt-10 bg-slate-100" onClick={ handleCloseOption } >
            <div className={`w-full max-w-xl border border-gray-200 rounded-2xl shadow-md p-4 ${color}`} onClick={(e) => e.stopPropagation()}>
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
                            ? <BsFillPinFill size="2.3rem" className={`${hoverColor} p-2 rounded-2xl cursor-pointer`}/>
                            : <BsPin size="2.3rem" className={`${hoverColor} p-2 rounded-2xl cursor-pointer`}/>
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
                    placeholder="Criar uma nota..."
                    onChange={ (e) => setDescription(e.target.value)}
                />

                <div className="relative mt-3 flex items-center justify-between">
                    <IoColorPaletteOutline size="2.3rem" className={`${hoverColor} p-2 rounded-2xl`} onClick={handleShowDrop}/>
                    <button
                        type="button"
                        color="#706b6b"
                        className={`text-sm font-medium px-4 py-2 ${hoverColor}`}
                        onClick={handleCloseOption}
                    >
                        Fechar
                    </button>
                </div>
                {drop &&
                    <div className="absolute flex items-center justify-between w-[230px] h-[40px] bg-white rounded-2xl mt-3 p-3">
                        <PiDropSlashBold size="1.5rem" color="#625d5d" className="rounded-3xl m-1 border-2 border-transparent hover:border-black cursor-pointer" onClick={() => handleChangeColor('bg-white')}/>
                        <div className="w-[25px] h-[25px] bg-red-100 rounded-3xl m-1 border-2 border-transparent hover:border-black cursor-pointer" onClick={() => handleChangeColor('bg-red-100', 'hover:bg-red-200')}></div>
                        <div className="w-[25px] h-[25px] bg-yellow-100 rounded-3xl m-1 border-2 border-transparent hover:border-black cursor-pointer" onClick={() => handleChangeColor('bg-yellow-100', 'hover:bg-yellow-200')}></div>
                        <div className="w-[25px] h-[25px] bg-blue-100 rounded-3xl m-1 border-2 border-transparent hover:border-black cursor-pointer" onClick={() => handleChangeColor('bg-blue-100', 'hover:bg-blue-200')}></div>
                        <div className="w-[25px] h-[25px] bg-green-100 rounded-3xl m-1 border-2 border-transparent hover:border-black cursor-pointer" onClick={() => handleChangeColor('bg-green-100', 'hover:bg-green-200')}></div>
                        <div className="w-[25px] h-[25px] bg-fuchsia-100 rounded-3xl m-1 border-2 border-transparent hover:border-black cursor-pointer" onClick={() => handleChangeColor('bg-fuchsia-100', 'hover:bg-fuchsia-200')}></div>
                    </div>
                }
            </div>
        </div>
    );
}
