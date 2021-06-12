import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Item, Segment } from 'semantic-ui-react';
import styled from 'styled-components';
import { User } from '../../models/user';


interface Props {
    users: User[];
}

export default function UserList({users}: Props) {

    return(
           <>
                {users.map(user => (
                <Card key={user.id}>
                    <h1>{user.username}</h1>
                    <h3>{user.subdomain}</h3>
                     <span>{user.city}</span>
                     <h4>{user.description}</h4>
                     <Button floated='right' content='Vizualizeaza'>
                         <Link to={`/profil/${user.username}`}>Vizualizeaza</Link>
                     </Button>
                </Card>
                ))}
            </>
    )
}

const Card = styled.div`
    padding: 2rem;
    min-height: 30vh;
    box-shadow: 0px 5px 30px rgba(0,0,0,0.2);
    border-radius: 2rem;
.button {
    margin-top: 1rem;
}
`;
