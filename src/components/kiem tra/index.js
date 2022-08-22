import React, {useEffect, useState} from "react";

const [data,setData] = useState()

const Test = () => {
    /*const [user, setUser] = useState()
    useEffect(() => {
        const arr = [{email:'1'}, true, 2, 'minh']
        
        /*De chay ra 4 lan {email:'1'}, true, 2, 'minh'
        C1: arr.forEach((item) => {
            console.log(item)
        })

        C2: for(let i=0; i<arr.length; i++) {
            console.log(arr[i])
        }*/
        /*De lay email='1' 
        const a = arr.filter((item) => {
            return item.email === 1 
        }) */
        /*Console log(a) ra 1 mang chua 4 gia tri {name: 5}
        const a = arr.map((item) => {
            return {name: 5} 
        })

    }) 
    */
    /*
    API: trang web tao API: https://mockapi.io/
    - GET: lay du lieu
    - POST: tao du lieu len server
    - PUT: cap nhat du lieu
    - DELETE: xoa du lieu
    De install thu vien api vao project reactjs: D:\my-app> npm install axios --save
    */ 


   const User = ({email, setAddress}) => {
        useEffect(() => {

        })
   }
   const Test = () => {
        const [address,setAddress] = useState('4321')
            useEffect (() => {
                const arr = [1, 2, 3, 4, 5, 6]
                const sochan = arr.filter((item) => {
                    return item % 2 && item !== 0
                })
            })
   }
}

export default Test