'use client';

import { useState } from 'react';

const CoolButton = () => {
  const [loading, setLoading] = useState(false);
  const [word, setWord] = useState('');

  const handleClick = async () => {
    setLoading(true);

    try {
      const response = await fetch('/api/random-word');

      const { randomWord } = await response.json();

      setWord(randomWord);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className='bg-gradient-to-br from-purple-500 to-pink-500 text-white py-4 px-8 w-60 text-lg font-semibold hover:cursor-pointer rounded-lg'
      >
        {loading ? 'Loading...' : 'Click Me!'}
      </button>

      {word && <p>{word}</p>}
    </div>
  );
};

export default CoolButton;
