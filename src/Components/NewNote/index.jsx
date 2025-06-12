import { FaCheckSquare, FaEdit, FaImage } from 'react-icons/fa';

export default function NewNote(){
    return(
        <div className="container mx-auto bg-light">
           <div className="row p-5 d-flex justify-content-center">
               <div className="" style={{ width: '600px'}}>
                   <div className="card shadow-sm border-0 rounded px-3 py-2 d-flex align-items-center flex-row">
                       <input
                           type="text"
                           className="form-control border-0 shadow-none"
                           placeholder="Criar uma nota..."
                           style={{ flex: 1 }}
                       />

                       <div className="d-flex align-items-center gap-3 ms-3">
                           <FaCheckSquare className="text-secondary" role="button" />
                           <FaEdit className="text-muted" role="button" />
                           <FaImage className="text-secondary" role="button" />
                       </div>
                   </div>
               </div>

           </div>
        </div>
    );
}