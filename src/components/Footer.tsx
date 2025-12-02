import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Sobre Nós</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              O Material Definitivo IBGE é desenvolvido por especialistas em concursos públicos, 
              com anos de experiência ajudando candidatos a conquistarem suas vagas no serviço público.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Contato</h3>
            <div className="space-y-3">
              <a 
                href="mailto:suporte@materialdefinitivoibge.com.br" 
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                suporte@materialdefinitivoibge.com.br
              </a>
              <a 
                href="tel:+5511999999999" 
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                (11) 99999-9999
              </a>
              <p className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4" />
                São Paulo, SP - Brasil
              </p>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Legal</h3>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-accent transition-colors text-sm">
                Política de Privacidade
              </a>
              <a href="#" className="block text-muted-foreground hover:text-accent transition-colors text-sm">
                Termos de Uso
              </a>
              <a href="#" className="block text-muted-foreground hover:text-accent transition-colors text-sm">
                Política de Garantia
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Material Definitivo IBGE. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground/60 text-xs mt-2">
            Este site não é afiliado ao IBGE ou ao Governo Federal.
          </p>
        </div>
      </div>
    </footer>
  );
};
