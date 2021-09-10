import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return <div className={s.bgcolor + ' ' + s.font}>
        <div className={s.content}>
            <img src='https://bodyart.fitness/ru/wp-content/uploads/sites/2/2019/07/BODYART-_-FITNESS_04_Blog_Fruits.png'></img>
        </div>
        <div className={s.descriptionBlock + ' ' + s.font}>ava + desc</div>
    </div>
}

export default ProfileInfo;