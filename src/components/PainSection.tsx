import { BookOpen, Wallet, Clock, Users } from "lucide-react";

const painPoints = [
  {
    icon: BookOpen,
    title: "Apostilas Gigantes",
    description: "PDFs de 500 páginas que você nunca vai conseguir ler até a prova.",
  },
  {
    icon: Wallet,
    title: "Cursinhos Caros",
    description: "Investir R$ 2.000 em um cursinho que não garante resultado nenhum.",
  },
  {
    icon: Clock,
    title: "Falta de Tempo",
    description: "Não ter tempo para estudar porque trabalha, cuida da casa e da família.",
  },
  {
    icon: Users,
    title: "Concursos Muito Concorridos",
    description: "Ver milhares de pessoas disputando a mesma vaga e sentir que não tem chance.",
  },
];

export const PainSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-black mb-4">
            Você está <span className="text-destructive">cansado</span> de...
          </h2>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {painPoints.map((pain, index) => (
            <div
              key={index}
              className="bg-gradient-card border border-border rounded-xl p-6 shadow-card hover:border-destructive/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-destructive/20 rounded-lg shrink-0">
                  <pain.icon className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">{pain.title}</h3>
                  <p className="text-muted-foreground">{pain.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Solution Bridge */}
        <div className="bg-gradient-card border-2 border-secondary/30 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto text-center shadow-gold">
          <p className="text-xl md:text-2xl font-bold text-foreground mb-4">
            A <span className="text-secondary">Verdade</span> que Ninguém Te Conta:
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Você <span className="text-secondary font-semibold">não precisa estudar tudo</span>. 
            Você só precisa estudar o que <span className="text-secondary font-semibold">realmente cai na prova</span>, 
            da forma certa, no tempo certo.
          </p>
        </div>
      </div>
    </section>
  );
};
