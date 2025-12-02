import { Button } from "@/components/ui/button";
import { Clock, Shield, Users } from "lucide-react";

export const HeroSection = () => {
  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      {/* Floating 81% OFF Banner */}
      <div className="absolute top-4 right-4 md:top-8 md:right-8 z-20 animate-float">
        <div className="bg-gradient-urgency px-4 py-2 md:px-6 md:py-3 rounded-lg shadow-lg transform rotate-3">
          <span className="text-accent-foreground font-black text-lg md:text-2xl">81% OFF</span>
          <p className="text-accent-foreground/90 text-xs md:text-sm font-medium">Garanta o Seu!</p>
        </div>
      </div>

      <div className="container relative z-10 pt-16 pb-8 md:pt-24 md:pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Pre-headline */}
          <p className="text-muted-foreground uppercase tracking-widest text-sm md:text-base mb-4 animate-fade-in">
            Concurso IBGE 2025 Confirmado
          </p>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Pare de Perder Tempo com{" "}
            <span className="text-secondary">Materiais Genéricos</span>{" "}
            e Comece a Estudar de Forma{" "}
            <span className="text-secondary">Inteligente</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            O Material Definitivo IBGE é o único recurso que você precisa para conquistar sua vaga. 
            Focado, direto ao ponto e feito para quem não tem tempo a perder.
          </p>

          {/* Price Box */}
          <div className="bg-gradient-card border border-border rounded-2xl p-6 md:p-8 max-w-md mx-auto mb-6 shadow-card animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <p className="text-muted-foreground line-through text-lg mb-1">De R$ 197</p>
            <p className="text-secondary text-lg font-semibold mb-2">por apenas</p>
            <div className="flex items-baseline justify-center gap-2 mb-3">
              <span className="text-5xl md:text-6xl font-black text-foreground">R$ 37</span>
              <span className="text-muted-foreground text-lg">,00</span>
            </div>
            <p className="text-muted-foreground text-sm">ou 4x de R$ 9,90 sem juros</p>
          </div>

          {/* CTA Button */}
          <Button 
            variant="cta" 
            size="xxl" 
            className="w-full md:w-auto mb-4 animate-scale-in"
            style={{ animationDelay: '0.4s' }}
            onClick={scrollToCheckout}
          >
            SIM, QUERO APROVEITAR ESTA OFERTA!
          </Button>

          {/* Urgency Banner */}
          <div className="bg-destructive/20 border border-destructive/50 rounded-lg p-4 max-w-lg mx-auto animate-countdown">
            <div className="flex items-center justify-center gap-2 text-destructive">
              <Clock className="w-5 h-5" />
              <span className="font-bold text-sm md:text-base">
                ⚠️ ESTA OFERTA É VÁLIDA SOMENTE PELAS PRÓXIMAS 24 HORAS
              </span>
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-muted-foreground text-sm animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-success" />
              <span>Compra 100% Segura</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-accent" />
              <span>+1.247 Aprovados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
