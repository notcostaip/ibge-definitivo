import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export const OfferSection = () => {
  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-black mb-4">
            O Único Investimento que Falta Para Sua{" "}
            <span className="text-secondary">Estabilidade no IBGE</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Quanto vale a sua aprovação? Um emprego estável com salário garantido todo mês?
          </p>

          {/* Price Card */}
          <div className="bg-gradient-card border-2 border-secondary/50 rounded-2xl p-8 md:p-10 shadow-gold mb-8">
            <p className="text-muted-foreground line-through text-xl mb-2">De R$ 197</p>
            <p className="text-secondary text-2xl font-bold mb-4">Por Apenas</p>
            
            <div className="flex items-baseline justify-center gap-2 mb-4">
              <span className="text-secondary text-2xl">R$</span>
              <span className="text-6xl md:text-7xl font-black text-foreground">37</span>
              <span className="text-muted-foreground text-2xl">,00</span>
            </div>

            <p className="text-muted-foreground mb-6">
              Menos que uma <span className="text-secondary font-semibold">pizza no fim de semana</span>!
            </p>

            {/* Scarcity */}
            <div className="flex items-center justify-center gap-2 text-destructive bg-destructive/10 rounded-lg p-3 mb-6">
              <AlertTriangle className="w-5 h-5" />
              <span className="font-bold">⚠️ Últimas 10 vagas com este preço!</span>
            </div>

            <Button 
              variant="cta" 
              size="xxl" 
              className="w-full md:w-auto"
              onClick={scrollToCheckout}
            >
              SIM, QUERO APROVEITAR ESTA OFERTA!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
