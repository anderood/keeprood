import {FaRegCheckSquare} from "react-icons/fa";
import {SlPicture} from "react-icons/sl";

export default function NewNote() {
    return (
        <div className="w-screen h-auto mt-10">
            <div className="flex justify-center">
                <div className="relative m-5">
                    <input
                        type="search"
                        id="search"
                        className="
                              w-[500px]
                              p-2
                              pl-4
                              pr-16          /* espaço à direita pros ícones */
                              border
                              rounded
                              shadow
                              outline-0
                              focus:shadow-lg
                            "
                        placeholder="Crie uma nota..."
                        required
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