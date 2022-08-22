import './style.css'

const list = ({ list, View, Delete, Edit }) => {
    // .map bien tat ca cac itam thanh the dom
    return (
        <list className='row'>
            {list.map(item => {
                return (
                    <div key={item.id} className="col-4">
                        <div className='user'>
                            <main className='main-user'>
                                <div>{item.name}</div>
                                <div>{item.email}</div>
                            </main>
                            <footer className='footer-user'>
                                <button className="btn button-color" onClick={() => { View(item.id) }}>View</button>
                                <button className="btn button-color" onClick={() => { Edit(item) }}>Edit</button>
                                <button className="btn delete" onClick={() => { Delete(item.id) }}>Delete</button>
                            </footer>
                        </div>
                    </div>
                )
            })}
        </list>
    )
}
export default list;