
import { SpringElement } from "@/components/ui/spring-element";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const CartoonSpring = () => {
  return (
    <SpringElement>
      <Avatar className="w-48 h-48 border-4 border-white shadow-2xl">
        <AvatarImage 
          src="/lovable-uploads/f572fc0e-07a5-48cf-a899-6e7e374a425b.png" 
          alt="Cartoon Character"
          draggable={false}
          className="object-cover"
        />
        <AvatarFallback>CC</AvatarFallback>
      </Avatar>
    </SpringElement>
  );
};

export { CartoonSpring };
