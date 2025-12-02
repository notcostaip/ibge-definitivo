import { Target, MessageCircle, Zap, FileQuestion } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Focado no Edital",
    description: "Conteúdo 100% alinhado com o que o IBGE cobra. Nada de enrolação ou matéria desnecessária.",
  },
  {
    icon: MessageCircle,
    title: "Linguagem Simples",
    description: "Explicações claras e diretas, como se um amigo estivesse te ensinando.",
  },
  {
    icon: Zap,
    title: "Rápida Absorção",
    description: "Metodologia de estudo que permite aprender mais em menos tempo.",
  },
  {
    icon: FileQuestion,
    title: "Banco de Questões",
    description: "Centenas de exercícios comentados para você treinar e fixar o conteúdo.",
  },
];

export const SolutionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary/30">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-accent uppercase tracking-widest text-sm mb-4">A Solução Definitiva</p>
          <h2 className="text-2xl md:text-4xl font-black mb-4">
            Conheça o <span className="text-secondary">Material Definitivo IBGE</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            O único material que você precisa para passar no concurso do IBGE.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gradient-card border border-border rounded-xl p-6 shadow-card hover:border-accent/50 hover:shadow-glow transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/20 rounded-lg shrink-0 group-hover:bg-accent/30 transition-colors">
                  <benefit.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
