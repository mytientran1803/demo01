import { useEffect, useState } from "react";
import {getUser} from "../../apis/users";

const ModalView = ({id}) => {
    const[data, setData] = useState({})

    useEffect(() => {
        if(id) {
            getUser(id)
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {console.log(error)})
        }
    }, [id])
    return(
        <div>
            <div id="modal-view-user" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">View User</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            <form>
                            <div className="mb-3">
                                Name: {data.name}
                                {/* hoac <label for="form-name" className="form-label">Name:</label> */}
                                 {/*  <input type="text" className="form-control" id="form-name" name="name" value={form.name} placeholder="Nhập tên của bạn" onChange={onChange}/> */}
                            </div>
                            <div className="mb-3">
                                Email: {data.email}
                                {/* <label for="recipient-name" className="form-label">Email:</label> */}
                                {/* <input type="email" className="form-control" id="form-email" name="email" value={form.email} placeholder="...@gmail.com" onChange={onChange}/> */}
                            </div>
                            <div className="mb-3">
                                Phone: {data.phone}
                            </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModalView;