import { Gift, FileText, Video, Headphones } from "lucide-react";

const bonuses = [
  {
    icon: FileText,
    title: "Resumo Estratégico",
    description: "Material condensado com os pontos mais importantes para revisar antes da prova.",
    value: "R$ 97",
  },
  {
    icon: Video,
    title: "Videoaulas Exclusivas",
    description: "Aulas em vídeo explicando os temas mais complexos de forma simples e direta.",
    value: "R$ 147",
  },
  {
    icon: Headphones,
    title: "Grupo VIP de Alunos",
    description: "Acesso ao nosso grupo exclusivo para tirar dúvidas e trocar experiências.",
    value: "R$ 63",
  },
];

export const BonusSection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary/30">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full mb-4">
            <Gift className="w-5 h-5" />
            <span className="font-semibold">BÔNUS EXCLUSIVOS</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-black mb-4">
            Mas Espere! <span className="text-secondary">Ainda Tem Mais...</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Adquirindo hoje, você leva esses bônus incríveis:
          </p>
        </div>

        {/* Bonuses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="bg-gradient-card border border-secondary/30 rounded-xl p-6 shadow-card hover:border-secondary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="inline-flex p-4 bg-secondary/20 rounded-full mb-4">
                  <bonus.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-bold text-xl mb-2 text-foreground">{bonus.title}</h3>
                <p className="text-muted-foreground mb-4">{bonus.description}</p>
                <p className="text-lg">
                  <span className="text-muted-foreground line-through">Valor:</span>{" "}
                  <span className="text-secondary font-bold">{bonus.value}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Value Summary */}
        <div className="bg-gradient-card border border-border rounded-2xl p-8 max-w-md mx-auto text-center">
          <p className="text-muted-foreground mb-2">Valor Total dos Bônus:</p>
          <p className="text-2xl font-bold text-muted-foreground line-through mb-4">R$ 307</p>
          <p className="text-muted-foreground mb-2">Material + Bônus:</p>
          <p className="text-3xl font-bold text-muted-foreground line-through mb-4">R$ 504</p>
          <div className="border-t border-border pt-4">
            <p className="text-accent uppercase tracking-wide font-semibold mb-2">Sua Oferta Hoje:</p>
            <p className="text-5xl font-black text-secondary">R$ 37</p>
          </div>
        </div>
      </div>
    </section>
  );
};
