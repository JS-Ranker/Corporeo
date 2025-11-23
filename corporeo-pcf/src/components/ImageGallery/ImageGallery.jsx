import React, { useState } from 'react';
import './ImageGallery.css';

const ImageGallery = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openLightbox = (image) => {
        setSelectedImage(image);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const handleBackdropClick = (e) => {
        if (e.target.classList.contains('lightbox')) {
            closeLightbox();
        }
    };

    return (
        <>
            <div className="image-gallery">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`gallery-item animate-scaleIn delay-${(index + 1) * 100}`}
                        onClick={() => openLightbox(image)}
                    >
                        <img src={image.src} alt={image.alt} />
                        <div className="gallery-item__overlay">
                            <div className="gallery-item__icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                                </svg>
                            </div>
                            <p className="gallery-item__title">{image.title}</p>
                        </div>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="lightbox animate-fadeIn" onClick={handleBackdropClick}>
                    <button className="lightbox__close" onClick={closeLightbox}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                    <div className="lightbox__content animate-scaleIn">
                        <img src={selectedImage.src} alt={selectedImage.alt} />
                        <p className="lightbox__caption">{selectedImage.title}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default ImageGallery;
