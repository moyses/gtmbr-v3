import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { useCallback, useEffect, useRef } from 'react';

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!sectionRef.current) return;

    // Cancela o frame anterior se existir
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    // Agenda a atualização para o próximo frame
    animationFrameRef.current = requestAnimationFrame(() => {
      const { clientX, clientY } = e;
      const { left, top } = sectionRef.current!.getBoundingClientRect();

      const mouseX = clientX - left;
      const mouseY = clientY - top;

      cardsRef.current.forEach((card) => {
        if (!card) return;

        const cardRect = card.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2 - left;
        const cardCenterY = cardRect.top + cardRect.height / 2 - top;

        // Reduz a intensidade da rotação e suaviza o movimento
        const angleX = (mouseY - cardCenterY) / 45;
        const angleY = (cardCenterX - mouseX) / 45;

        const transform = `
          perspective(2000px)
          rotateX(${angleX}deg)
          rotateY(${angleY}deg)
          scale3d(1.02, 1.02, 1.02)
        `;

        // Aplica a transformação
        card.style.transform = transform;
      });
    });
  }, []);

  const resetCards = useCallback(() => {
    cardsRef.current.forEach((card) => {
      if (card) {
        card.style.transform =
          'perspective(2000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      }
    });
  }, []);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', resetCards);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', resetCards);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [handleMouseMove, resetCards]);

  return (
    <section
      ref={sectionRef}
      className="bg-dark via-white to-brand-light py-12 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gap-12 items-center flex flex-col">
          <div className="space-y-8 animate-fade-in text-center">
            <h1 className="text-white text-[60px] leading-[120%] font-bold max-w-[860px] mx-auto">
              Lance, Valide e
              <span className="text-brand-primary">
                {' '}
                Escale Seu Software ou Aplicativo
              </span>{' '}
              do jeito certo. No tempo certo.
            </h1>

            <p className="text-lg text-gray-200 leading-relaxed max-w-[800px] mx-auto">
              Transformamos suas ideias em produtos de mercado com estratégias
              de Go-to-Market comprovadas. Acelere seu crescimento com nossa
              metodologia especializada.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mx-auto max-w-[600px]">
              <Button
                size="lg"
                className="bg-brand-primary hover:bg-brand-secondary text-white px-8 py-3 text-md"
              >
                Analise sua estratégia agora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button variant="secondary" size="lg" className="text-md">
                Fale com um consultor
              </Button>
            </div>
          </div>

          {/* Cards com animação */}
          <div className="p-8 grid grid-cols-3 gap-6 relative -mb-44">
            {/* Primeiro card */}
            <div className="transform-gpu">
              <div
                ref={(el) => {
                  cardsRef.current[0] = el;
                }}
                className="bg-white rounded-2xl p-6 hover:shadow-xl transition-transform duration-700 ease-out will-change-transform"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div style={{ transform: 'translateZ(50px)' }}>
                  <h2 className="text-gray-400 text-heading-sm mb-2">
                    Product Market Fit
                  </h2>
                  <p className="text-gray-300 text-body-sm">
                    Evite lançar no escuro. Alinhe produto e mercado com
                    validações reais.
                  </p>
                  <div className="text-dark text-heading-hg font-bold">
                    +32% de conversão
                  </div>
                  <p className="text-gray-300 text-body-sm">
                    em lançamentos validados.
                  </p>
                  <div className="inline-block bg-purple-600/10 text-brand-primary rounded-full py-1 text-action-sm mt-2">
                    Veja como validar antes de lançar
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna do meio com dois cards */}
            <div className="space-y-6">
              <div className="transform-gpu">
                <div
                  ref={(el) => {
                    cardsRef.current[1] = el;
                  }}
                  className="bg-white rounded-2xl p-6 hover:shadow-xl transition-transform duration-700 ease-out will-change-transform"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div style={{ transform: 'translateZ(50px)' }}>
                    <div className="flex items-center mb-4">
                      <div>
                        <h2 className="text-dark text-heading-sm">
                          Posicionamento Estratégico
                        </h2>
                        <p className="text-gray-300 text-body-sm">
                          Mensagens que conectam com o público certo.
                        </p>
                      </div>
                    </div>
                    <div className="inline-block bg-purple-600/10 text-brand-primary rounded-full py-1 text-action-sm">
                      Diferenciação clara no mercado.
                    </div>
                  </div>
                </div>
              </div>

              <div className="transform-gpu">
                <div
                  ref={(el) => {
                    cardsRef.current[2] = el;
                  }}
                  className="bg-white rounded-2xl p-6 hover:shadow-xl transition-transform duration-700 ease-out will-change-transform"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div style={{ transform: 'translateZ(50px)' }}>
                    <div className="text-dark text-heading-xl mb-4">
                      Campanha de ativação
                    </div>
                    <div className="mt-4">
                      <h3 className="text-dark text-heading-xs mb-2">
                        Pipe de tarefas
                      </h3>
                      <div className="space-y-2">
                        <div className="h-2 bg-purple-600 rounded-full w-3/4"></div>
                        <div className="h-2 bg-gray-200 rounded-full w-full"></div>
                        <div className="h-2 bg-purple-200 rounded-full w-3/4"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Último card */}
            <div className="transform-gpu">
              <div
                ref={(el) => {
                  cardsRef.current[3] = el;
                }}
                className="bg-white rounded-2xl p-6 hover:shadow-xl transition-transform duration-700 ease-out will-change-transform"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div style={{ transform: 'translateZ(50px)' }}>
                  <div className="text-dark text-heading-xl mb-4">
                    Retenção após 90 dias
                  </div>
                  <p className="text-gray-300 text-body-sm mb-2">
                    Com base em produtos lançados
                  </p>
                  <div className="mt-4">
                    <h3 className="text-dark text-heading-xs mb-2">
                      Acompanhamento pós-lançamento
                    </h3>
                    <div className="space-y-2">
                      <div className="h-2 bg-purple-600 rounded-full w-3/4"></div>
                      <div className="h-2 bg-gray-200 rounded-full w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
