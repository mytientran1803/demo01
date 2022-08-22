import { useEffect, useState, useMemo } from "react";
import Form from "./Form";
import List from "./List";
import { getOrganizations, createOrganization, editOrganization, deleteOrganization, deletetOrganization } from "../apis/organization";
import ModalView from "./ModalView";

// 2 kieu validation:
// 1. khi nguoi dung edit data, neu ok thi hien submit
// 2. Kiem tra khi nguoi dung da submit roi
    // dang 1 kiem tra phia fronted, kiem tra dung format
    // dang 2 kiem tra phia Backend, kiem tra trung

const user = { name: '', email: '' }
const validate = (list,form) => {
    //ouput: true khi cho nguoi dung  them hoac edit data
    //ouput: false khi khi cho ho submit data
    if(form.name === '' || form.email===''){
        return false
    }
    //Create
    if(!form.id){
        const item = list.find(item => {
            return item.name === form.name || item.email === form.email
        })
        return item ? false : true
    }
    //Edit
    if(form.id){
        const item = list.find(item => {
            return item.id !== form.id && (item.name === form.name || item.email === form.email)
        })
        return item ? false : true
    }
    return false
}

const Organization = () => {
    const [form, setForm] = useState(user)
    const [search, setSearch] = useState('')
    const [list, setList] = useState([])
    const [resultlist, setResultList] = useState([])
    const [erro, setErro] = useState(false)
    const [selectedID, setSelectedID] = useState()

    /*useEffect(() => {
        getUsers().then((response) => { 
            setList(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])*/
    useEffect(() => {
        getOrganizations().then((response) => { 
            setList(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])


    useEffect(() => {
        if(search){
           const newResultList = list.filter(item => {
            return item.name.includes(search) || item.email.includes(search) // includes tiem các phần tử có từ khóa tương ứng và hiển thị ra màng hình theo cái newResultList
           })
           setResultList(newResultList)
        }
        else {
            setResultList(list)
        }

    // }, [search,list])
//demo github
    
    // const resultlist = useMemo(() => {
    //     if (search) {
    //         const newResultList = list.filter(item => {
    //             return item.name.includes(search) || item.email.includes(search) // includes tiem các phần tử có từ khóa tương ứng và hiển thị ra màng hình theo cái newResultList
    //         })
    //         return newResultList
    //     }
    //     return list

    }, [search, list])

    const onChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setForm({
            ...form,
            [name]: value
        })
    }
    /*const fetchData = () => {
        getUsers().then((response) => {
            setList(response.data)
        }).catch(error => {
            console.log(error)
        })
    }*/
    const fetchData = () => {
        getOrganizations().then((response) => {
            setList(response.data)
        }).catch(error => {
            console.log(error)
        })
    }
    const Submit = () => {
        // const isValidated = validate(list, form)

        // if(!isValidated){
        //     setErro(true)
        // }

        // if(isValidated) {
            //create
            /*if (!form.id) {
                createUser(form).then(response => {
                    fetchData()
                    setForm(user)
                }).catch(error => {
                    console.log(error)
                })
                /* hoac
                setList([
                     ...list,
                     {
                         ...form,
                         id: Math.random()
                     }
                 ])
                
            }*/
            if (!form.id) {
                createOrganization(form).then(response => {
                    fetchData()
                    setForm(user)
                }).catch(error => {
                    console.log(error)
                })
            }

            //edit
            if (form.id) {
                /*editUser(form.id, form)
                .then((response) => {
                    fetchData()
                    setForm(user)
                })
                .catch((error) => {
                    console.log(error)
                })*/
                editOrganization(form.id, form)
                .then((response) => {
                    fetchData()
                    setForm(user)
                })
                .catch((error) => {
                    console.log(error)
                })
                /*hoac
                 const newList = list.map(item => {
                     return item.id === form.id ? form : item
                 })
                 setList(newList)
                 setForm(user) */
            }
            const element = document.querySelector('#modal-form-user')
            const modal = window.bootstrap.Modal.getOrCreateInstance(element)
            modal.show();
        // }
        
    }
    const onCreate = () => {
        setForm(user)

        const element = document.querySelector('#modal-form-user')
        const modal = window.bootstrap.Modal.getOrCreateInstance(element)
        modal.show();
    }
    const View = (id) => {
        setSelectedID(id)
        const element = document.querySelector('#modal-view-user')
        const modal = window.bootstrap.Modal.getOrCreateInstance(element)
        modal.show();
    }

    const Edit = (data) => {
        setForm(data)
        const element = document.querySelector('#modal-form-user')
        const modal = window.bootstrap.Modal.getOrCreateInstance(element)
        modal.show();
    }
    const Delete = (id) => {
        /*deletetUser(id)
        .then((response) => {
            fetchData()
        }) 
        .catch((error) => {
            console.log(error)
        })*/
        deletetOrganization(id)
        .then((response) => {
            fetchData()
        }) 
        .catch((error) => {
            console.log(error)
        })
        
        /*hoac
        const newList = list.filter(item => {
            return item.id !== id
        })
        setList(newList)
        setForm(user)*/
    }

    const onSearch = (e) => {
        const value = e.target.value
        setSearch(value)
    }

    return (
        <div className="container">
            <header className="row">
                <div className="col-6">
                    <h2 className="title">User</h2>
                </div>
                <div className="col-4">
                    <input className="form-control" value={search} placeholder="Type to search..." onChange={onSearch} />
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-primary" onClick={onCreate}>
                        Create
                    </button>
                </div>
            </header>
            
            {resultlist.length === 0 && <div>No data found</div>}

            <List list={resultlist} View={View} Edit={Edit} Delete={Delete} />

            <Form form={form} onChange={onChange} Submit={Submit} erro={erro} />
            {/* {resultlist.length === 0 && <div>No data found</div>}

            <List list={resultlist} Edit={Edit} Delete={Delete} /> */}

            <ModalView id={selectedID}  />
        </div>
    )
}
export default HomeTest06;