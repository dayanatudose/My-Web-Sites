import axios from 'axios';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import UserList from '../components/dashboard/UserList';
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
        <UserListed>
            <UserList users={users} />
        </UserListed>
    ) 
}

export default Browse;

const UserListed = styled(motion.div)`
 padding: 2rem 5rem;
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
 grid-column-gap: 3rem;
 grid-row-gap: 4rem;
 
`;