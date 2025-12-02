import { ShieldCheck } from "lucide-react";

export const GuaranteeSection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary/30">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-card border-2 border-success/30 rounded-2xl p-8 md:p-12 text-center">
            <div className="inline-flex p-4 bg-success/20 rounded-full mb-6">
              <ShieldCheck className="w-16 h-16 text-success" />
            </div>

            <h2 className="text-2xl md:text-3xl font-black mb-4 text-foreground">
              <span className="text-success">7 Dias</span> de Garantia Incondicional
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Estamos tão confiantes na qualidade do nosso material que oferecemos uma garantia 
              de <span className="text-success font-semibold">7 dias sem perguntas</span>. 
              Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do seu dinheiro.
            </p>

            <div className="bg-success/10 border border-success/30 rounded-lg p-4 inline-block">
              <p className="text-success font-bold text-lg">
                ✅ O risco é TODO NOSSO!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
