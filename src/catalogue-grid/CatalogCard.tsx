import React, { useState } from 'react';
import { CatalogItem } from '../utils/models/stores';
import { useNavigate } from 'react-router-dom';

const CatalogCard: React.FC<{ item: CatalogItem }> = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
   <div
  className={`
    relative w-full pb-[100%] rounded-xl overflow-hidden shadow-lg
    transition-all duration-300 ease-in-out cursor-pointer
  `}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
  onClick={() => navigate(item.route || '/')}
>
  {/* Background Image */}
  <div
    className={`
      absolute inset-0 bg-cover bg-center rounded-xl
      transition-transform duration-300 ease-in-out
      ${isHovered ? 'scale-110' : ''}
    `}
    style={{ backgroundImage: `url(${item.imageUrl})` }}
    aria-label={item.name}
  ></div>

  {/* Centered item.text */}
  <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
    <p className="text-white text-lg font-medium text-center bg-black/50 px-4 py-2 rounded">
      {item.text}
    </p>
  </div>

  {/* Bottom item.name */}
  <div className="absolute inset-0 flex items-end justify-center p-4 bg-gradient-to-t from-black/70 to-transparent rounded-xl">
    <p className="text-gray-300 text-sm font-semibold text-center leading-tight">
      {item.name}
    </p>
  </div>
</div>

  );
};

export default CatalogCard;