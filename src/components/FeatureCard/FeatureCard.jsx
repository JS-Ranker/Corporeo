import React from 'react';
import './FeatureCard.css';

const FeatureCard = ({ icon, title, description, delay = 0 }) => {
    return (
        <div
            className={`feature-card glass-card animate-fadeInUp delay-${delay}`}
        >
            {icon && (
                <div className="feature-card__icon">
                    {icon}
                </div>
            )}
            <h3 className="feature-card__title">{title}</h3>
            <p className="feature-card__description">{description}</p>
            <div className="feature-card__glow"></div>
        </div>
    );
};

export default FeatureCard;
