import React from 'react'
import { Grid } from 'semantic-ui-react'
import ProfileHeader from '../components/ProfileHeader'

const UserProfile = () => {
    return (
        <Grid>
            <Grid.Column width={16}>
                <ProfileHeader />
            </Grid.Column>
        </Grid>
    )
}

export default UserProfile;