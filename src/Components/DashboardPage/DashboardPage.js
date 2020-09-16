import React from 'react';
import { Link } from 'react-router-dom';
import NewAlbumRoute from '../../Routes/NewAlbumRoute/NewAlbumRoute';

export default class DashboardPage extends React.Component{
    // componentDidMount(){
    //     const res = await fetch(`${config.API_ENDPOINT}/api/album`);
    // }
    render(){
        return(
            <div>
                <Link to="/newalbum">Create new album</Link>

                <div>

                </div>
            </div>
        )
    }
}