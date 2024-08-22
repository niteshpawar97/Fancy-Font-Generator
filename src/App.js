import React, { useState } from 'react';

const fancyMaps = {
  type1: {
    'a': '𝒶', 'b': '𝒷', 'c': '𝒸', 'd': '𝒹', 'e': '𝑒', 'f': '𝒻', 'g': '𝑔', 'h': '𝒽', 'i': '𝒾', 'j': '𝒿', 'k': '𝓀', 'l': '𝓁', 'm': '𝓂', 'n': '𝓃', 'o': '𝑜', 'p': '𝓅', 'q': '𝓆', 'r': '𝓇', 's': '𝓈', 't': '𝓉', 'u': '𝓊', 'v': '𝓋', 'w': '𝓌', 'x': '𝓍', 'y': '𝓎', 'z': '𝓏',
    'A': '𝒜', 'B': '𝐵', 'C': '𝒞', 'D': '𝒟', 'E': '𝐸', 'F': '𝐹', 'G': '𝒢', 'H': '𝐻', 'I': '𝐼', 'J': '𝒥', 'K': '𝒦', 'L': '𝐿', 'M': '𝑀', 'N': '𝒩', 'O': '𝒪', 'P': '𝒫', 'Q': '𝒬', 'R': '𝑅', 'S': '𝒮', 'T': '𝒯', 'U': '𝒰', 'V': '𝒱', 'W': '𝒲', 'X': '𝒳', 'Y': '𝒴', 'Z': '𝒵',
    '0': '𝟢', '1': '𝟣', '2': '𝟤', '3': '𝟥', '4': '𝟦', '5': '𝟧', '6': '𝟨', '7': '𝟩', '8': '𝟪', '9': '𝟫',
    '!': '❢', '@': '✁', '#': '✂', '$': '✄', '%': '✆', '^': '✇', '&': '✈', '*': '✉', '(': '✆', ')': '✇'
  },
  type2: {
    'a': '𝕒', 'b': '𝕓', 'c': '𝕔', 'd': '𝕕', 'e': '𝕖', 'f': '𝕗', 'g': '𝕘', 'h': '𝕙', 'i': '𝕚', 'j': '𝕛', 'k': '𝕜', 'l': '𝕝', 'm': '𝕞', 'n': '𝕟', 'o': '𝕠', 'p': '𝕡', 'q': '𝕢', 'r': '𝕣', 's': '𝕤', 't': '𝕥', 'u': '𝕦', 'v': '𝕧', 'w': '𝕨', 'x': '𝕩', 'y': '𝕪', 'z': '𝕫',
    'A': '𝔸', 'B': '𝔹', 'C': 'ℂ', 'D': '𝔻', 'E': '𝔼', 'F': '𝔽', 'G': '𝔾', 'H': 'ℍ', 'I': '𝕀', 'J': '𝕁', 'K': '𝕂', 'L': '𝕃', 'M': '𝕄', 'N': 'ℕ', 'O': '𝕆', 'P': 'ℙ', 'Q': 'ℚ', 'R': 'ℝ', 'S': '𝕊', 'T': '𝕋', 'U': '𝕌', 'V': '𝕍', 'W': '𝕎', 'X': '𝕏', 'Y': '𝕐', 'Z': 'ℤ',
    '0': '𝟘', '1': '𝟙', '2': '𝟚', '3': '𝟛', '4': '𝟜', '5': '𝟝', '6': '𝟞', '7': '𝟟', '8': '𝟠', '9': '𝟡',
    '!': '‼', '@': '☢', '#': '☯', '$': '☮', '%': '☠', '^': '⚛', '&': '⚒', '*': '⚓', '(': '⚔', ')': '⚖'
  },
  type3: {
    'a': '𝖆', 'b': '𝖇', 'c': '𝖈', 'd': '𝖉', 'e': '𝖊', 'f': '𝖋', 'g': '𝖌', 'h': '𝖍', 'i': '𝖎', 'j': '𝖏', 'k': '𝖐', 'l': '𝖑', 'm': '𝖒', 'n': '𝖓', 'o': '𝖔', 'p': '𝖕', 'q': '𝖖', 'r': '𝖗', 's': '𝖘', 't': '𝖙', 'u': '𝖚', 'v': '𝖛', 'w': '𝖜', 'x': '𝖝', 'y': '𝖞', 'z': '𝖟',
    'A': '𝕬', 'B': '𝕭', 'C': '𝕮', 'D': '𝕯', 'E': '𝕰', 'F': '𝕱', 'G': '𝕲', 'H': '𝕳', 'I': '𝕴', 'J': '𝕵', 'K': '𝕶', 'L': '𝕷', 'M': '𝕸', 'N': '𝕹', 'O': '𝕺', 'P': '𝕻', 'Q': '𝕼', 'R': '𝕽', 'S': '𝕾', 'T': '𝕿', 'U': '𝖀', 'V': '𝖁', 'W': '𝖂', 'X': '𝖃', 'Y': '𝖄', 'Z': '𝖅',
    '0': '𝟢', '1': '𝟣', '2': '𝟤', '3': '𝟥', '4': '𝟦', '5': '𝟧', '6': '𝟨', '7': '𝟩', '8': '𝟪', '9': '𝟫',
    '!': '🅰️', '@': '🅱️', '#': '🅲', '$': '🅳', '%': '🅴', '^': '🅵', '&': '🅶', '*': '🅷', '(': '🅸', ')': '🅹'
  }
  // Add more styles as needed
};

function App() {
  const [text, setText] = useState('');

  const transformText = (inputText, style) => {
    const defaultText = "Niket Group";
    const textToTransform = inputText || defaultText;
    return textToTransform.split('').map(char => fancyMaps[style][char] || char).join('');
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Text copied to clipboard!');
  };


  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gray-100 p-4">
      <div>
        <h1 className="text-3xl font-bold mb-4">Fancy Font Generator</h1>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your text"
          className="border border-gray-300 rounded p-2 w-full max-w-md mb-6"
        />
        {Object.keys(fancyMaps).map((style, index) => (
          <div key={index} className="mb-4 w-full max-w-md bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Style {index + 1}</h2>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-light break-words">
                {transformText(text, style)}
              </div>
              <button
                onClick={() => copyToClipboard(transformText(text, style))}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition ml-4"
              >
                Copy
              </button>
            </div>
          </div>
        ))}
      </div>
      <footer className="w-full max-w-md mt-8 p-4 bg-white rounded shadow text-center">
        <p className="text-sm text-gray-600">
          Developed by <a href="https://niketgroup.in" className="text-blue-500 hover:underline">NiketGroup</a>
        </p>
        
        <p className="text-sm text-gray-600">
          Developer: <a href="#" className="text-blue-500 hover:underline">Nitesh Kadve</a>
        </p>
      </footer>
    </div>
  );
}

export default App;