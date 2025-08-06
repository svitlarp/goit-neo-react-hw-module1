import {friendsList} from './FriendList.module.css';
import FriendListItem from '../friendListItem/FriendListItem';


export default function FreindList({friends}) {
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












