import React from 'react';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import Sidebar from '../Siderbar/Sidebar';
import './Player.css';

const Player = ({ spotify }) => {
    return (
        <div classname = 'player'>
            <div className='player__body'>
                <Sidebar />
                <Body />
            </div>
            <div className = 'player__footer'>
                <Footer />
            </div>
        </div>
    );
}

export default Player;
