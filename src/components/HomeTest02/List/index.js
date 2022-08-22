import './style.css'

const List = ({list, onEdit, onDelete}) => {
    return(
        <div className="user">
            {list.map((item) => {
                return (
                <div key={item.id}>
                    <div>{item.name}</div>
                    <div>{item.phone}</div>
                    <button onClick={()=>{onEdit(item)}}>Edit</button>
                    <button onClick={()=>{onDelete(item.id)}}>Delete</button>
                </div>
                )
                })}
        </div>
    )
}
export default List