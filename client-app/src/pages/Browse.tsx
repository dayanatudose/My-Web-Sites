import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserDashboard from '../components/dashboard/UserDashboard';
import {User} from '../models/user'

const Browse = () => {
    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
        axios.get('https://localhost:5001/api/users').then(response => {
            setUsers(response.data);
        console.log(response);
        })
    }, [])

    return (
        <div>
           <UserDashboard users={users} />
        </div>
    ) 
}

export default Browse;