import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CatImage = () => {
  const [imageUrl, setImageUrl] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search');
      if (response.data[0] && response.data[0].url) {
        setImageUrl(response.data[0].url);
      }
    } catch (error) {
      console.error('Error fetching data from thecatapi:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <button onClick={fetchData}>ほかのねこを表示する</button>
      {imageUrl ? <img src={imageUrl} alt="Cat" /> : <p>Loading...</p>}
    </div>
  );
};

export default CatImage;
