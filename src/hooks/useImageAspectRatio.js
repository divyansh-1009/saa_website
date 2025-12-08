import { useState, useEffect } from 'react';

export function useImageAspectRatio(imageSrc) {
  const [aspectRatio, setAspectRatio] = useState(null);

  useEffect(() => {
    if (!imageSrc) {
      setAspectRatio(null);
      return;
    }

    const img = new Image();
    img.onload = () => {
      const ratio = img.width / img.height;
      setAspectRatio(ratio);
    };
    img.onerror = () => {
      setAspectRatio(1); // Default to square if image fails
    };
    img.src = imageSrc;
  }, [imageSrc]);

  return aspectRatio;
}

export function useImageAspectRatios(imageSrcs) {
  const [aspectRatios, setAspectRatios] = useState({});

  useEffect(() => {
    const loadRatios = async () => {
      const ratios = {};
      
      await Promise.all(
        imageSrcs.map((src, index) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
              ratios[index] = img.width / img.height;
              resolve();
            };
            img.onerror = () => {
              ratios[index] = 1;
              resolve();
            };
            img.src = src;
          });
        })
      );
      
      setAspectRatios(ratios);
    };

    if (imageSrcs && imageSrcs.length > 0) {
      loadRatios();
    }
  }, [imageSrcs]);

  return aspectRatios;
}

