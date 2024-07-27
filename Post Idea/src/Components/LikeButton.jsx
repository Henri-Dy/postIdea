import React, { useState } from 'react';
import { AiFillLike } from 'react-icons/ai';
import '../App.css'; // Assurez-vous de créer un fichier CSS pour les animations

const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div onClick={handleLike} className={`like-button ${isLiked ? 'liked' : ''}`}>
      <AiFillLike size={20} />
    </div>
  );
};

export default LikeButton;
