import {
    userName,
    userTag,
    userLocation,
    userProfile,
    userProfileImg,
    userStatList,
    userStatListItem,
    userStatListItemSpanData
} from './Profile.module.css';


export default function Profile({ name, tag, location, avatar, stats }) {
    return (
        <div className={userProfile}>
            <img className={userProfileImg} src={avatar} alt={name}></img>
            <p className={userName}>{name}</p>
            <p className={userTag}>@{tag}</p>
            <p className={userLocation}>{location}</p>
            <UserStat stats={stats} />
        </div>
    )
}

function UserStat({stats}) {
    return (
        <ul className={userStatList}>
            <li className={userStatListItem}>
                <span className="Followers">Followers</span>
                <span className={userStatListItemSpanData}>{ stats.followers}</span>
            </li>
            <li className={userStatListItem}>
                <span className="Views">Views</span>
                <span className={userStatListItemSpanData}>{stats.views}</span>
            </li>
            <li className={userStatListItem}>
                <span className="Likes">Likes</span>
                <span className={userStatListItemSpanData}>{ stats.likes}</span>
            </li>
        </ul>
    )
}