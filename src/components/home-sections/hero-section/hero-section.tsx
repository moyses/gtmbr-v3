'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useCallback, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '@/i18n';

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const { translations } = useI18n();

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
      className="bg-dark via-white to-brand-light py-16 md:py-24 lg:py-32 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gap-8 md:gap-12 items-center flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6 md:space-y-8 text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="text-white text-3xl md:text-4xl lg:text-heading-hg leading-[120%] font-bold max-w-[860px] mx-auto"
            >
              {translations.hero.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
              className="text-base md:text-lg text-gray-200 leading-relaxed max-w-[800px] mx-auto px-4 sm:px-0"
            >
              {translations.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row gap-4 justify-center mx-auto max-w-[600px] px-4 sm:px-0"
            >
              <Button
                size="lg"
                className="bg-brand-primary hover:bg-brand-secondary text-white px-6 md:px-8 py-3 text-sm md:text-md w-full sm:w-auto"
              >
                <Link
                  href="/wizard-gtm"
                  title={translations.hero.analyzeButton}
                >
                  {translations.hero.analyzeButton}
                </Link>
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </Button>

              <Button
                variant="secondary"
                size="lg"
                className="text-sm md:text-md w-full sm:w-auto"
              >
                {translations.hero.consultantButton}
              </Button>
            </motion.div>
          </motion.div>

          {/* Cards com animação */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
            className="hidden md:grid p-4 md:p-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 relative -mb-20 md:-mb-40 lg:-mb-60"
          >
            {/* Primeiro card */}
            <div className="transform-gpu">
              <motion.div
                ref={(el) => {
                  cardsRef.current[0] = el;
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="bg-white rounded-2xl p-4 md:p-6 shadow-xl transition-transform duration-700 ease-out will-change-transform h-full"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div style={{ transform: 'translateZ(50px)' }}>
                  <h2 className="text-gray-400 text-lg md:text-heading-sm mb-2">
                    Product Market Fit
                  </h2>
                  <p className="text-gray-300 text-sm md:text-body-sm">
                    Evite lançar no escuro. Alinhe produto e mercado com
                    validações reais.
                  </p>
                  <div className="text-dark text-2xl md:text-heading-hg font-bold mt-4">
                    +32% de conversão
                  </div>
                  <p className="text-gray-300 text-sm md:text-body-sm">
                    em lançamentos validados.
                  </p>
                  <div className="inline-block bg-purple-600/10 text-brand-primary rounded-full py-1 px-3 text-xs md:text-action-sm mt-4">
                    Veja como validar antes de lançar
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Coluna do meio com dois cards */}
            <div className="space-y-4 md:space-y-6">
              <div className="transform-gpu">
                <motion.div
                  ref={(el) => {
                    cardsRef.current[1] = el;
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  className="bg-white rounded-2xl p-4 md:p-6 shadow-xl transition-transform duration-700 ease-out will-change-transform"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div style={{ transform: 'translateZ(50px)' }}>
                    <div className="flex items-center mb-4">
                      <div>
                        <h2 className="text-dark text-lg md:text-heading-sm">
                          Posicionamento Estratégico
                        </h2>
                        <p className="text-gray-300 text-sm md:text-body-sm">
                          Mensagens que conectam com o público certo.
                        </p>
                      </div>
                    </div>
                    <div className="inline-block bg-purple-600/10 text-brand-primary rounded-full py-1 px-3 text-xs md:text-action-sm">
                      Diferenciação clara no mercado.
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="transform-gpu">
                <motion.div
                  ref={(el) => {
                    cardsRef.current[2] = el;
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                  className="bg-white rounded-2xl p-4 md:p-6 shadow-xl transition-transform duration-700 ease-out will-change-transform"
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
                </motion.div>
              </div>
            </div>

            {/* Último card */}
            <div className="transform-gpu">
              <motion.div
                ref={(el) => {
                  cardsRef.current[3] = el;
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.8 }}
                className="bg-white rounded-2xl p-4 md:p-6 shadow-xl transition-transform duration-700 ease-out will-change-transform"
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
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
