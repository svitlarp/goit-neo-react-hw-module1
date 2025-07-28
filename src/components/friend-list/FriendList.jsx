import {
    friendsList,
    friendListItem,
    friendListItemImg,
    friendListItemName,
    friendListItemStatus,
    isOnline,
    isOffline
} from './FriendList.module.css';

function FriendListItem({friend}) {
    return (
        <div className={friendListItem}>
            <img className={friendListItemImg} src={friend.avatar} alt="" width="48" />
            <p className={friendListItemName}>{ friend.name}</p>
            <p className={friendListItemStatus}>
                {friend.isOnline === true
                    ? <span className={isOnline}>Online</span> 
                    : <span className={isOffline}>Offline</span>
                }</p>
        </div>
    )
}


export default function FreindList({friends}) {
    {/* Кількість li залежить від кількості об'єктів в масиві */}
    return (
        <ul className={friendsList}>
            {friends.map(friend => (
                <li key={friend.id}>
                    <FriendListItem friend={ friend} />
                </li>
            ))}
        </ul>
    );
}












