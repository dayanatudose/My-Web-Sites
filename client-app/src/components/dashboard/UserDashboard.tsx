import React from 'react';
import {User} from '../../models/user'

interface Props {
    users: User[];
}

export default function UserDashboard({users}:Props) {
    return (
        <div>
             {users.map(user => (
            <div key={user.id}>
              {user.username}
             </div>
            ))}
        </div>
    )
}