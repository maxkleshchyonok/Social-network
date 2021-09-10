import React from "react";
import styles from './Users.module.css'

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            { id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkwfpI6xKAJ_WuWL_Au2vQJgUXUwjyVYKw4w&usqp=CAU', followed: false, fullName: "Max", status: 'Hello world', location: { city: 'Minsk', country: 'Belarus' } },
            { id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkwfpI6xKAJ_WuWL_Au2vQJgUXUwjyVYKw4w&usqp=CAU', followed: true, fullName: "Joe", status: 'I am cool', location: { city: 'New-York', country: 'USA' } },
            { id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkwfpI6xKAJ_WuWL_Au2vQJgUXUwjyVYKw4w&usqp=CAU', followed: false, fullName: "Nik", status: 'Programmer', location: { city: 'Moscow', country: 'Russia' } },
        ]
        )
    }
    return <div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className={styles.userPhoto} />
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                        : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.сity}</div>
                </span>
            </span>
        </div>)
        }
    </div>
}

export default Users