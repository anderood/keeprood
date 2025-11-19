import {FaRegCheckSquare} from "react-icons/fa";
import {SlPicture} from "react-icons/sl";

export default function NewNoteInput() {
    return (
        <div className="w-screen h-auto mx-auto mt-10">
            <div className="flex justify-center">
                <div className="relative m-5 w-full max-w-xl">
                    <input
                        type="search"
                        id="search"
                        className="
                              w-full
                              p-2
                              pl-4
                              pr-16          /* espaço à direita pros ícones */
                              border
                              rounded
                              shadow
                              outline-none
                              focus:shadow-lg
                            "
                        placeholder="Criar uma nota..."
                    />

                    <FaRegCheckSquare
                        className="absolute right-12 top-1/2 -translate-y-1/2"
                        size="1rem"
                    />
                    <SlPicture
                        className="absolute right-5 top-1/2 -translate-y-1/2"
                    />
                </div>
            </div>
        </div>
    );
}