import React from 'react';
import { useStore } from '../../store/index';
const UserInfo = () => {
    const [{ auth }, dispatch] = useStore();

    return <h1>User info..{auth.user && auth.user.userName}</h1>
}
export default UserInfo;