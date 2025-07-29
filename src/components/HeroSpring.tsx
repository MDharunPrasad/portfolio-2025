
import { SpringElement } from "@/components/ui/spring-element";

const HeroSpring = () => {
  return (
    <SpringElement>
      <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl">
        <img 
          src="/lovable-uploads/23bed2f8-a84f-4ee2-a2df-eb345a5922e5.png" 
          alt="Dharun Prasad M" 
          className="w-full h-full object-cover"
        />
      </div>
    </SpringElement>
  );
};

export { HeroSpring };
