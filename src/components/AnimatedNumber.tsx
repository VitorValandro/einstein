import { useEffect, useState } from "react";
import { cn } from "../utils";

interface Props {
  finalValue: number;
  className?: string;
  duration?: number;
}

const FRAME_DURATION = 16; // 16ms é mais ou menos 60fps

const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);

const AnimatedNumber: React.FC<Props> = ({ finalValue, className, duration = 4000 }) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const totalFrames = Math.round(duration / FRAME_DURATION);
    let frame = 0;

    const interval = setInterval(() => {
      frame++;

      const progress = frame / totalFrames;

      // Aplica a função de easing para suavizar a animação
      const easedProgress = easeOutCubic(progress);

      const current = Math.round(easedProgress * finalValue);
      setCurrentNumber(current);

      if (frame >= totalFrames) {
        clearInterval(interval);
        setCurrentNumber(finalValue); // Garante que o valor final seja exibido corretamente
      }
    }, FRAME_DURATION);

    return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
  }, [finalValue, duration]);

  return <div className={cn("number-display", className)}>{currentNumber}</div>;
};

export default AnimatedNumber;
