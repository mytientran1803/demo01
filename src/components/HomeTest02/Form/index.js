import { useMemo } from "react"

const Form = ({obJect, form, onChange, onAdd, onClear}) => {
    const disable = useMemo (() => {
        return form.name === '' || form.phone === ''
    }, [])
    return (
        <div className="modal fade" id="exampleModal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Form User</h5>
                        <button className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label htmlFor="form-name" className="form-label">Insert name:</label>
                        </div>
                        <input 
                        type='text'
                        id='form-name'
                        value={form.name} 
                        name='name'
                        className="form-control"
                        placeholder="Ho va ten"
                        onChange={onChange}/> <br/>

                        <div className="mb-3">
                            <label htmlFor="form-name" className="form-label">Insert phone:</label>
                        </div>              
                        <input 
                        type='text'
                        id='form-phone'
                        className='form-control'
                        placehoder="Phone number"
                        value={form.phone} 
                        name='phone' 
                        onChange={onChange}/> <br/>
                    
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button className="btn btn-primary" disable ={disable} onClick={onAdd}>{form.id ? 'Edit' : 'Add'}</button>
                        <button className="btn btn-primary" onClick={onClear}>Clear</button>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Form