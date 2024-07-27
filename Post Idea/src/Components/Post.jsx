import React, { useState } from 'react';
import LikeButton from './LikeButton';

const Post = ({ content }) => {
    const [likeState, setLikeState] = useState(false);
    const [likes, setLikes] = useState(0);

    const toggleLike = () => {
        if (likeState) {
            setLikes(likes - 1);
        } else {
            setLikes(likes + 1);
        }
        setLikeState(!likeState);
    };

    return (
        <div>
            <div className="flex items-center justify-center">
                <div className="p-2">
                    <div className="bg-white max-w-xl rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500">
                        <h1 className='font-bold text-gray-700'>Post</h1>
                        <div className="mt-4">
                            <p className="mt-4 text-md text-gray-600 max-h-[11em] overflow-scroll text-sm scrollbarNone">
                                {content}
                            </p>
                            <div className="flex justify-between items-center mt-4">
                                <div className="flex items-center space-x-4 py-6">
                                    <div className="text-sm font-semibold">
                                        <span className="font-normal text-gray-500"> Il y a 5min</span>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between items-center gap-3" onClick={toggleLike}>
                                    <p>{likes} likes</p>
                                    <LikeButton />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
