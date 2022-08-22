//Co 1 object
//Co Form co name, phone
//Them nut Them, Xoa, Sua

import React, {useEffect, useMemo, useState} from "react";
import Form from "./Form";
import List from "./List";
import { getUsers } from "../apis/users";
//import "./style.css";


const obJect = {name: '', phone: ''}
const HomeTest02 = () => {
    const [form, setForm] = useState(obJect)
    const [list, setList] = useState([])
    const [search, setSearch] = useState ('')
    
    const fetchData = () => {
        getUsers()
        .then ((response) => {
            setList(response.data)
           
        }).catch((error) => {
            console.log(error)
        })
    }
    
    useEffect (() => {
        fetchData()
    }, {})
    //Tao ham resultList
        //Cach 1: su dung ham useEffect
    /*const [resultList, setResultList] = useState ([])
    useEffect (() => {
        setResultList(list)
    }, [list]) 
        //Cach 2: su dung ham useMemo
    const resultList = useMemo(()=> {
        if(search) {
            const newresultList = list.filter((item) => {
                return item.name.includes(search) || item.phone.includes(search)
            })
            return newresultList
        }
        return list
    }, [search, list]) */

    //Tao ham onChange
    function onChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        setForm({
            ...form,
            [name]: value //Them [] de khi them name se thay doi gia tri o Insert name, khi them phone se thay doi gia tri o Insert phone
        });
    }

    //Tao ham onAdd
    
    const onAdd = () => {
        if(!form.id) {
            setList([
                ...list,
                {
                    ...form,
                    id: Math.random()
                }
            ])
            setForm(obJect)
        }
        if(form.id) {
            const addList = list.map((item) => {
                return item.id === form.id ? form : item
            })
            setList(addList)
            setForm(obJect)
        }        
    }
    //Tao ham onClear
    const onClear = () => {
        setList([])
    }
    //Tao ham onEdit
    const onEdit = (data) => {
        setForm(data)
    }
    //Tao ham onDelete
    const onDelete = (id) => {
        const delList = list.filter((item) => {
            return item.id !== id
        })
        setList(delList)
    }
        
    return (
        <div>
            
            <Form 
                
                form = {form}
                onChange = {onChange}
                onAdd = {onAdd}
                onClear = {onClear}
            />
            {list.length === 0 && <div>No data found</div>}
            <List
                list={list}
                onEdit = {onEdit}
                onDelete = {onDelete}
            />
        </div>
    )
}
export default HomeTest02