import { useMemo } from "react";

const FormUser = ({form, onChange, Submit}) => {
    console.log(form)
    const disabled = useMemo(() => {
        return form.name === '' || form.email===''
    }, [form])
    return(
        <div> 
             
                        <div className="mb-3">
                            <label for="form-name" className="form-label">Name:</label>
                            <input type="text" className="form-control" id="form-name" name="name" value={form.name} placeholder="Nhập tên của bạn" onChange={onChange}/>
                        </div>
                        <div className="mb-3">
                            <label for="recipient-name" className="form-label">Email:</label>
                            <input type="email" className="form-control" id="form-email" name="email" value={form.email} placeholder="...@gmail.com" onChange={onChange}/>
                        </div>


                        <button className="btn btn-secondary">Back</button>
                        <button className="btn btn-primary" disabled={disabled} onClick={Submit}>Submit</button>
        </div>     


    )
}
export default FormUser;