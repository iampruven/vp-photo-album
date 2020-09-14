import React from 'react';
import { Link } from 'react-router-dom';
import NewAlbumRoute from '../../Routes/NewAlbumRoute/NewAlbumRoute';

export default class DashboardPage extends React.Component{
    render(){
        return(
            <div>
                <Link to="/newalbum">Create new album</Link>
            </div>
        )
    }
}