import {
    friendListItem,
    friendListItemImg,
    friendListItemName,
    friendListItemStatus,
    isOnline,
    isOffline
} from './FriendListItem.module.css';

export default function FriendListItem({ friend }) {
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