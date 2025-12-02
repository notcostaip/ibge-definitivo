import { Button } from "@/components/ui/button";
import { ShieldCheck, Lock, Users, CreditCard } from "lucide-react";

export const CheckoutSection = () => {
  return (
    <section id="checkout" className="py-16 md:py-24 bg-primary/50">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-black mb-4">
            Sua Aprovação está a um{" "}
            <span className="text-secondary">Clique de Distância</span>
          </h2>
          
          <p className="text-muted-foreground text-lg mb-8">
            Não deixe essa oportunidade passar. Invista na sua carreira hoje!
          </p>

          {/* Checkout Card */}
          <div className="bg-gradient-card border-2 border-accent/50 rounded-2xl p-8 md:p-10 shadow-glow mb-8">
            <p className="text-muted-foreground line-through text-xl mb-2">De R$ 197</p>
            <p className="text-foreground text-2xl font-bold mb-2">Por Apenas</p>
            
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-secondary text-2xl">R$</span>
              <span className="text-6xl md:text-7xl font-black text-foreground">37</span>
              <span className="text-muted-foreground text-2xl">,00</span>
            </div>

            <p className="text-accent font-semibold mb-6">
              Aproveite os 81% OFF e comece a estudar hoje!
            </p>

            <Button 
              variant="cta" 
              size="xxl" 
              className="w-full text-lg md:text-xl"
            >
              QUERO MEU LUGAR NO IBGE AGORA!
            </Button>

            {/* Payment methods */}
            <div className="flex items-center justify-center gap-2 mt-6 text-muted-foreground">
              <CreditCard className="w-5 h-5" />
              <span className="text-sm">Cartão, Boleto ou PIX</span>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-lg">
              <Lock className="w-5 h-5 text-success" />
              <span className="text-sm font-medium">SSL Seguro</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-lg">
              <ShieldCheck className="w-5 h-5 text-success" />
              <span className="text-sm font-medium">Site Verificado</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-lg">
              <Users className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">+1.247 Aprovados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
