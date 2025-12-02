import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O material serve para qual cargo do IBGE?",
    answer: "O Material Definitivo IBGE foi desenvolvido para os cargos de Recenseador e Agente de Pesquisas e Mapeamento, que são os mais comuns nos processos seletivos do IBGE. O conteúdo cobre todas as disciplinas exigidas no edital.",
  },
  {
    question: "Por quanto tempo terei acesso ao material?",
    answer: "Você terá acesso vitalício ao material! Isso significa que pode estudar no seu ritmo e acessar o conteúdo quantas vezes quiser, para sempre. Além disso, todas as atualizações futuras serão gratuitas para você.",
  },
  {
    question: "Como recebo o material após a compra?",
    answer: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com os dados de acesso à nossa plataforma. Todo o material fica disponível online, podendo ser acessado de qualquer dispositivo (computador, tablet ou celular).",
  },
  {
    question: "E se eu não gostar do material?",
    answer: "Sem problemas! Oferecemos 7 dias de garantia incondicional. Se você não ficar satisfeito por qualquer motivo, basta solicitar o reembolso dentro desse prazo e devolvemos 100% do seu dinheiro, sem perguntas ou burocracia.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-accent uppercase tracking-widest text-sm mb-4">Dúvidas Frequentes</p>
          <h2 className="text-2xl md:text-4xl font-black mb-4">
            Perguntas <span className="text-secondary">Frequentes</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gradient-card border border-border rounded-xl px-6 shadow-card"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-secondary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
