import React from 'react';

export default function SideBar(props: any) {
    return (
        <div className="topbar">
            <div className="top-left-button">
                <a className="top-left-previous">&#8249;</a>
            </div>
            <div className="top-middle-bar" />
            <div className="top-right-button1" />
            <div className="top-right-button2">
                <img className="avatar" src={process.env.PUBLIC_URL + '/grayuser.png'} alt="logo"></img>
                <span className="userfullname">Elle Roh</span>
            </div>
        </div>
    )
}