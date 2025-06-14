
import { useState, useEffect } from "react";

export const WebStoriesAnimation = () => {
  const [currentStory, setCurrentStory] = useState(0);
  
  const stories = [
    {
      id: 1,
      title: "SERGIO PEREZ PODE SER O NOVO PILOTO DA CADILLAC NA F1 EM 2026",
      category: "ESPORTES",
      image: "/lovable-uploads/1df85ef2-bf39-423e-b1fd-7bf0f14f37c4.png",
      source: "Pista F1 News"
    },
    {
      id: 2,
      title: "DESCUBRA COMO GOOGLE VAI TRANSFORMAR A EDUCAÇÃO NO BRASIL",
      category: "TECNOLOGIA",
      image: "https://automatikblog.com/wp-content/uploads/2024/11/google-educacao-brasil-ia.jpg",
      source: "Automatik Blog"
    },
    {
      id: 3,
      title: "O SEGREDO DO BROWNIE RECHEADO COM FRUTAS VERMELHAS",
      category: "CULINÁRIA",
      image: "https://automatikblog.com/wp-content/uploads/2024/11/brownie-frutas-vermelhas.jpg",
      source: "Automatik Blog"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % stories.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-80 h-96 mx-auto mb-8">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl transform rotate-3"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl shadow-2xl transform -rotate-2"></div>
      <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
        <div className="relative h-full">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-all duration-500"
            style={{ backgroundImage: `url(${stories[currentStory].image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          </div>
          
          <div className="absolute top-4 left-4">
            <span className="bg-yellow-400 text-black px-2 py-1 text-xs font-bold rounded">
              {stories[currentStory].category}
            </span>
          </div>
          
          <div className="absolute bottom-6 left-4 right-4">
            <h3 className="text-white font-bold text-lg mb-2 leading-tight">
              {stories[currentStory].title}
            </h3>
            <p className="text-gray-300 text-sm">
              {stories[currentStory].source}
            </p>
          </div>
          
          <div className="absolute bottom-4 right-4">
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-black font-bold">→</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-4 space-x-2">
        {stories.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentStory ? 'bg-blue-600 w-6' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
