//import { useParams } from "react-router-dom"
import { useState } from "react"
import FormUser from "../../components/FormUser"

const UserEdit = () => {
    //const {id} = useParams()
    
    const [form, setForm] = useState(user)
    
    const onChange =(e) => {
        const name = e.target.name
        const value = e.target.value
        setForm({
            ...form,
            [name]: value
        })
    }

    const onSubmit =(e) => {
        const isValiated = validate (list, form)
        if (!form.id) {
            createUser(form).then(response => {
                setForm(user)
            }).catch(error => {
                console.log(error)
            })
        }
      
        const element = document.querySelector('#modal-form-user')
        const modal = window.bootstrap.Modal.getOrCreateInstance(element)
        modal.show();
    }

    return (
        

        <div>User Edit
            <FormUser form={form} onChange={onChange}/>
        </div>
    
    )
}

export default UserEdit