import React from 'react'

export const PostItem = ({ name, avatar, Content, timestamp }) => {
    return (
        <div >
            <h1>{Content}</h1>
            <h1>{name}</h1>
            <h1>{avatar}</h1>
            <h1>{timestamp}</h1>
        </div>
    )
};
