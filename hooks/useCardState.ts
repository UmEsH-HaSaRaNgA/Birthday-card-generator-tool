import React, { useState, useCallback, useEffect } from 'react';
import { CardData } from '../types';

const initialCardData: CardData = {
  greeting: 'HAPPY',
  mainEvent: 'Birthday',
  name: 'ABDULLAH',
  bestWishes: 'BEST WISHES TO',
  recipientLine1: 'OUR BATCH MATE ABDULLAH',
  recipientLine2: 'To have a wonderful life ahead',
  cheers: 'Cheers on Your Day',
  batch: '24/25 BATCH',
  department: 'DEPARTMENT OF MULTIMEDIA AND WEB TECHNOLOGY',
  imageUrl: 'https://i.imgur.com/lO33p72.png', // Default image
  decorations: {
    showBalloons: true,
    showCake: true,
    showStars: true,
    showSparkles: true,
  },
};

export const useCardState = () => {
  const [cardData, setCardData] = useState<CardData>(initialCardData);
  const [imageFile, setImageFile] = useState<File | null>(null);

  useEffect(() => {
    let objectUrl: string | null = null;
    if (imageFile) {
      objectUrl = URL.createObjectURL(imageFile);
      setCardData(prevData => ({ ...prevData, imageUrl: objectUrl! }));
    }

    return () => {
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [imageFile]);

  const handleTextChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  const handleImageChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  }, []);

  return { cardData, handleTextChange, handleImageChange };
};