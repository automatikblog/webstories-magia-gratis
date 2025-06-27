
import { useState, useEffect } from "react";

export const WebStoriesAnimation = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
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
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentStory((prev) => (prev + 1) % stories.length);
        setIsTransitioning(false);
      }, 200);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-80 h-96 mx-auto mb-8">
      {/* Background Cards with Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl transform rotate-3 animate-pulse opacity-70"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl shadow-2xl transform -rotate-2 animate-pulse opacity-80 animation-delay-500"></div>
      
      {/* Main Card */}
      <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:-rotate-1">
        <div className="relative h-full">
          {/* Image with Transition */}
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ${
              isTransitioning ? 'scale-110 blur-sm opacity-70' : 'scale-100 blur-0 opacity-100'
            }`}
            style={{ backgroundImage: `url(${stories[currentStory].image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          </div>
          
          {/* Category Badge with Animation */}
          <div className="absolute top-4 left-4 animate-bounce">
            <span className={`bg-yellow-400 text-black px-3 py-1.5 text-xs font-bold rounded-full shadow-lg transition-all duration-300 ${
              isTransitioning ? 'scale-90' : 'scale-100'
            }`}>
              {stories[currentStory].category}
            </span>
          </div>
          
          {/* Content with Slide Animation */}
          <div className={`absolute bottom-6 left-4 right-4 transition-all duration-500 ${
            isTransitioning ? 'transform translate-y-4 opacity-0' : 'transform translate-y-0 opacity-100'
          }`}>
            <h3 className="text-white font-bold text-lg mb-2 leading-tight drop-shadow-lg">
              {stories[currentStory].title}
            </h3>
            <p className="text-gray-200 text-sm drop-shadow-md">
              {stories[currentStory].source}
            </p>
          </div>
          
          {/* Action Button with Pulse */}
          <div className="absolute bottom-4 right-4">
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-300 transition-all duration-300 animate-pulse hover:scale-110 cursor-pointer">
              <span className="text-black font-bold text-lg">→</span>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-black/20">
            <div 
              className="h-full bg-yellow-400 transition-all duration-[4000ms] ease-linear"
              style={{ width: isTransitioning ? '0%' : '100%' }}
            ></div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Indicators */}
      <div className="flex justify-center mt-6 space-x-3">
        {stories.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-500 cursor-pointer hover:scale-125 ${
              index === currentStory 
                ? 'bg-blue-600 w-8 shadow-lg' 
                : 'bg-gray-300 w-2 hover:bg-gray-400'
            }`}
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentStory(index);
                setIsTransitioning(false);
              }, 200);
            }}
          />
        ))}
      </div>
      
      {/* Floating Elements */}
      <div className="absolute -top-4 -right-4 w-6 h-6 bg-yellow-400 rounded-full animate-bounce opacity-60"></div>
      <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-500 rounded-full animate-pulse opacity-70"></div>
    </div>
  );
};
