import React from 'react';
import { Link } from 'react-router-dom';

export default class DashboardPage extends React.Component{
    render(){
        return(
            <div>
                <Link to={'/newPost'}>Create New Post</Link> 
            </div>
        )
    }
}