import { useMemo } from "react";

const Form = ({form,erro, onChange, Submit}) => {
    console.log(form)
    const disabled = useMemo(() => {
        return form.name === '' || form.email===''
    }, [form])
    return(
        <div>
            {erro && (
                <div> Da co loi. vui long nhap lai</div>
            )}
            <div id="modal-form-user" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{form.id ? 'Edit' : 'Create'} User</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            <form>
                            <div className="mb-3">
                                <label for="form-name" className="form-label">Name:</label>
                                <input type="text" className="form-control" id="form-name" name="name" value={form.name} placeholder="Nhập tên của bạn" onChange={onChange}/>
                            </div>
                            <div className="mb-3">
                                <label for="recipient-name" className="form-label">Email:</label>
                                <input type="email" className="form-control" id="form-email" name="email" value={form.email} placeholder="...@gmail.com" onChange={onChange}/>
                            </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary" disabled={disabled} onClick={Submit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Form;