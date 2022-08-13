import React, { useState } from "react";
import cn from "classnames";
import { AiFillLike } from 'react-icons/ai'
import "../LikeButton/LikeButton.scss";

const LikeButton = () => {
    const [liked, setLiked] = useState(null);

    return (
        <button
            onClick={() => setLiked(!liked)}
            onAnimationEnd={() => setLiked(false)}
            className={cn("like-button-wrapper", {
                liked,
            })}
        >
            <div className="like-button">
                <div className="icon">
                    <AiFillLike />
                </div>
                <div className="like-btns">
                    <span className="like">Like</span>
                    <span className={cn("suffix", { liked })}>d</span>
                </div>
            </div>
        </button>
    );
};

export default LikeButton;