import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';
import { ImageIcon, PaperclipIcon } from '../icons/Icon';


const TextBox = () => {
    const firebase = useFirebase();
    const profile = useSelector(state => state.firebase.profile);
    const currentUser = useSelector(state => state.firebase.auth);
    const [Content, setContent] = useState('')

    const sendPost = () => {

        firebase.push("Timeline", {
            userId: currentUser.uid,
            name: profile.name,
            avatar: profile.avatar,
            Content: Content,
            timestamp: firebase.database.ServerValue.TIMESTAMP
        });
        setContent('');
    };

    return (
        <div className="flex flex-col mt-2  px-2 flex-1">
            <textarea
                className="w-full text-xl placeholder-gray-dark outline-none overflow-auto resize-none bg-transparent "
                placeholder="Lorem impuls"
                onChange={e => setContent(e.target.value)}
                value={Content}
                maxLength="255"
                rows="3"

            />
            <div className="flex items-center justify-between">
                <div className="flex -ml-3">
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest text-primary-base ">
                        <ImageIcon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest text-primary-base ">
                        <PaperclipIcon className="w-6 h-6" />
                    </div>
                </div>
                <button className="bg-primary-base text-white rounded-full px-4 py-2 font-medium"
                    onClick={sendPost}
                >
                    Yaz
                </button>
            </div>
        </div>
    )
}
export default TextBox;