import { Star, Users } from "lucide-react";

const testimonials = [
  {
    name: "Mariana Costa",
    location: "São Paulo, SP",
    text: "Passei no IBGE na primeira tentativa! O material é muito bem organizado e direto ao ponto. Super recomendo!",
    rating: 5,
  },
  {
    name: "Carlos Eduardo",
    location: "Rio de Janeiro, RJ",
    text: "Estudei por apenas 3 semanas com esse material e consegui uma das melhores notas. Vale cada centavo investido!",
    rating: 5,
  },
  {
    name: "Ana Paula",
    location: "Belo Horizonte, MG",
    text: "Já tinha desistido de concursos até encontrar esse material. A metodologia é incrível e realmente funciona!",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-accent uppercase tracking-widest text-sm mb-4">Prova Social</p>
          <h2 className="text-2xl md:text-4xl font-black mb-4">
            Veja o que Nossos <span className="text-secondary">Alunos Dizem</span>
          </h2>
        </div>

        {/* Social Counter */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="flex items-center gap-2 bg-gradient-card border border-accent/30 rounded-full px-6 py-3">
            <Users className="w-6 h-6 text-accent" />
            <span className="text-2xl font-black text-foreground">+1.247</span>
            <span className="text-muted-foreground font-medium">Alunos Aprovados</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-card border border-border rounded-xl p-6 shadow-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <span className="text-accent font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
