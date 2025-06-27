
import { useState, useEffect } from "react";
import { Clock, ExternalLink } from "lucide-react";

export const WebStoriesAnimation = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  const stories = [
    {
      id: 1,
      title: "SERGIO PEREZ PODE SER O NOVO PILOTO DA CADILLAC NA F1 EM 2026",
      subtitle: "Análise completa das negociações e impactos no cenário da Fórmula 1",
      category: "ESPORTES",
      categoryColor: "bg-red-500",
      gradientFrom: "from-red-500",
      gradientTo: "to-orange-600",
      image: "/lovable-uploads/1df85ef2-bf39-423e-b1fd-7bf0f14f37c4.png",
      source: "Pista F1 News",
      author: "Carlos Silva",
      readTime: "3 min"
    },
    {
      id: 2,
      title: "GOOGLE REVOLUCIONA EDUCAÇÃO NO BRASIL COM IA GENERATIVA",
      subtitle: "Como a inteligência artificial está transformando o aprendizado",
      category: "IA & FUTURO",
      categoryColor: "bg-blue-600",
      gradientFrom: "from-blue-600",
      gradientTo: "to-purple-700",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=600&fit=crop",
      source: "Tech Brasil",
      author: "Ana Ferreira",
      readTime: "5 min"
    },
    {
      id: 3,
      title: "BROWNIE RECHEADO: SEGREDO DOS CHEFS REVELADO",
      subtitle: "Receita exclusiva com frutas vermelhas e chocolate belga",
      category: "CULINÁRIA",
      categoryColor: "bg-amber-500",
      gradientFrom: "from-amber-500",
      gradientTo: "to-red-500",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=600&fit=crop",
      source: "Sabores do Brasil",
      author: "Chef Marina",
      readTime: "4 min"
    },
    {
      id: 4,
      title: "WELLNESS: 5 HÁBITOS QUE VÃO TRANSFORMAR SEU 2025",
      subtitle: "Rotina matinal de alta performance baseada em ciência",
      category: "LIFESTYLE",
      categoryColor: "bg-green-500",
      gradientFrom: "from-green-500",
      gradientTo: "to-teal-600",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=600&fit=crop",
      source: "Vida Plena",
      author: "Dr. Roberto",
      readTime: "6 min"
    },
    {
      id: 5,
      title: "STARTUPS BRASILEIRAS CAPTAM R$ 2BI EM 2024",
      subtitle: "Análise dos setores mais promissores e tendências de investimento",
      category: "NEGÓCIOS",
      categoryColor: "bg-indigo-600",
      gradientFrom: "from-indigo-600",
      gradientTo: "to-purple-600",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=600&fit=crop",
      source: "Empreende Brasil",
      author: "Lucas Martins",
      readTime: "7 min"
    },
    {
      id: 6,
      title: "TELEMEDICINA: O FUTURO DA SAÚDE JÁ CHEGOU",
      subtitle: "Como a tecnologia está revolucionando consultas médicas",
      category: "SAÚDE",
      categoryColor: "bg-emerald-500",
      gradientFrom: "from-emerald-500",
      gradientTo: "to-cyan-600",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=600&fit=crop",
      source: "Saúde Digital",
      author: "Dra. Patricia",
      readTime: "5 min"
    }
  ];

  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentStory((prev) => (prev + 1) % stories.length);
        setIsTransitioning(false);
      }, 300);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, stories.length]);

  const handleStoryClick = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentStory(index);
      setIsTransitioning(false);
    }, 200);
  };

  return (
    <div 
      className="relative w-80 h-96 mx-auto mb-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Enhanced Background Cards with Breathing Animation */}
      <div className={`absolute inset-0 bg-gradient-to-br ${stories[currentStory].gradientFrom} ${stories[currentStory].gradientTo} rounded-2xl shadow-2xl transform rotate-3 animate-pulse opacity-40 transition-all duration-1000`}></div>
      <div className={`absolute inset-0 bg-gradient-to-br ${stories[(currentStory + 1) % stories.length].gradientFrom} ${stories[(currentStory + 1) % stories.length].gradientTo} rounded-2xl shadow-2xl transform -rotate-2 animate-pulse opacity-50 animation-delay-500 transition-all duration-1000`}></div>
      
      {/* Main Card with Enhanced Interactions */}
      <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:-rotate-1 hover:shadow-3xl">
        <div className="relative h-full">
          {/* Enhanced Image with Transition Effects */}
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ${
              isTransitioning ? 'scale-110 blur-sm opacity-70' : 'scale-100 blur-0 opacity-100'
            }`}
            style={{ backgroundImage: `url(${stories[currentStory].image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          </div>
          
          {/* Enhanced Category Badge */}
          <div className="absolute top-4 left-4 animate-bounce">
            <span className={`${stories[currentStory].categoryColor} text-white px-3 py-1.5 text-xs font-bold rounded-full shadow-lg transition-all duration-300 ${
              isTransitioning ? 'scale-90' : 'scale-100'
            }`}>
              {stories[currentStory].category}
            </span>
          </div>
          
          {/* Read Time and View Story Indicator */}
          <div className="absolute top-4 right-4 flex items-center space-x-2">
            <div className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs flex items-center space-x-1">
              <Clock className="w-3 h-3" />
              <span>{stories[currentStory].readTime}</span>
            </div>
          </div>
          
          {/* Enhanced Content with Slide Animation */}
          <div className={`absolute bottom-6 left-4 right-4 transition-all duration-500 ${
            isTransitioning ? 'transform translate-y-4 opacity-0' : 'transform translate-y-0 opacity-100'
          }`}>
            <h3 className="text-white font-bold text-lg mb-2 leading-tight drop-shadow-lg">
              {stories[currentStory].title}
            </h3>
            <p className="text-gray-200 text-sm mb-3 leading-relaxed drop-shadow-md">
              {stories[currentStory].subtitle}
            </p>
            <div className="flex items-center justify-between">
              <div className="text-gray-300 text-xs">
                <span className="font-medium">{stories[currentStory].author}</span>
                <span className="mx-1">•</span>
                <span>{stories[currentStory].source}</span>
              </div>
              <div className="flex items-center text-yellow-400 text-xs font-medium">
                <ExternalLink className="w-3 h-3 mr-1" />
                <span>Ver Web Story</span>
              </div>
            </div>
          </div>
          
          {/* Enhanced Action Button */}
          <div className="absolute bottom-4 right-4">
            <div className={`w-10 h-10 ${stories[currentStory].categoryColor} rounded-full flex items-center justify-center shadow-lg transition-all duration-300 animate-pulse hover:scale-110 cursor-pointer hover:shadow-xl`}>
              <ExternalLink className="text-white w-4 h-4" />
            </div>
          </div>
          
          {/* Enhanced Progress Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-black/20">
            <div 
              className={`h-full ${stories[currentStory].categoryColor} transition-all duration-[5000ms] ease-linear`}
              style={{ width: isTransitioning || isPaused ? '0%' : '100%' }}
            ></div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Indicators with Category Colors */}
      <div className="flex justify-center mt-6 space-x-3">
        {stories.map((story, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-500 cursor-pointer hover:scale-125 ${
              index === currentStory 
                ? `${story.categoryColor} w-8 shadow-lg` 
                : 'bg-gray-300 w-2 hover:bg-gray-400'
            }`}
            onClick={() => handleStoryClick(index)}
          />
        ))}
      </div>
      
      {/* Enhanced Floating Elements */}
      <div className={`absolute -top-4 -right-4 w-6 h-6 ${stories[currentStory].categoryColor} rounded-full animate-bounce opacity-60`}></div>
      <div className={`absolute -bottom-2 -left-2 w-4 h-4 ${stories[(currentStory + 2) % stories.length].categoryColor} rounded-full animate-pulse opacity-70`}></div>
      <div className={`absolute top-1/2 -left-3 w-3 h-3 ${stories[(currentStory + 3) % stories.length].categoryColor} rounded-full animate-ping opacity-50`}></div>
    </div>
  );
};
