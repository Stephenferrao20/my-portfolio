'use client'
import React from 'react';
import Image from "next/image";

interface SkillCardProps {
  name: string;
  icon: string;
  className?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({
  name,
  icon,
  className = "",
}) => {
  return (
    <div className={`skill-card ${className}`}>
      <div className="skill-icon">
        <Image
          src={icon}
          alt={name}
          width={40}
          height={40}
          className="skill-image"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
          }}
        />
      </div>
      <div className="skill-name">
        <span>{name}</span>
      </div>
    </div>
  );
};

export default SkillCard; 