import Image from 'next/image';

export const LaunchFailSection = () => {
  return (
    <section className="py-24 bg-gray-200/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[56px] font-bold text-dark mb-6">
            A maioria dos{' '}
            <span className="text-brand-primary">lançamentos falha</span> por
            motivos que poderiam ser evitados.
          </h2>
          <p className="text-gray-800 text-lg max-w-3xl mx-auto">
            Mesmo empresas com bons produtos enfrentam barreiras silenciosas que
            comprometem resultados desde o primeiro trimestre pós-lançamento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 - Falta de clareza */}
          <div className="bg-white backdrop-blur-sm rounded-2xl p-8 border border-purple-600">
            <div className="mb-6">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                <Image
                  src="/icons/sad-face.svg"
                  alt="Falta de clareza"
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <h3 className="text-brand-primary text-lg mb-2">
              Falta de clareza do mercado
            </h3>
            <p className="text-gray-400">
              Decisões baseadas em suposições levam a produtos desalinhados com
              a realidade da demanda. Isso gera uma baixa adoção e alto custo de
              aquisição.
            </p>
          </div>

          {/* Card 2 - Posicionamento */}
          <div className="bg-white rounded-2xl p-8 border border-purple-600">
            <div className="mb-6">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                <Image
                  src="/icons/chart.svg"
                  alt="Posicionamento"
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <h3 className="text-brand-primary text-lg mb-2">
              Posicionamento genérico perante concorrência
            </h3>
            <p className="text-gray-400">
              Sem uma narrativa clara de diferenciação, o produto entra na
              disputa por preço ou é comparado a soluções com escopo diferente.
              Isso afeta a percepção de valor e prejudica as vendas.
            </p>
          </div>

          {/* Card 3 - Precificação */}
          <div className="bg-white rounded-2xl p-8 border border-purple-600">
            <div className="mb-6">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                <Image
                  src="/icons/money.svg"
                  alt="Precificação"
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <h3 className="text-brand-primary text-lg mb-2">
              Precificação ineficaz{' '}
            </h3>
            <p className="text-gray-400">
              Preços mal ancorados, empacotamento confuso e margens
              desbalanceadas impactam a escalabilidade e a sustentabilidade do
              seu produto digital.
            </p>
          </div>

          {/* Card 4 - Desalinhamento */}
          <div className="bg-white rounded-2xl p-8 border border-purple-600">
            <div className="mb-6">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                <Image
                  src="/icons/person.svg"
                  alt="Desalinhamento"
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <h3 className="text-brand-primary text-lg mb-2">
              Desalinhamento entre produto, marketing e vendas
            </h3>
            <p className="text-gray-400">
              Sem integração entre as áreas, a jornada do cliente se fragmenta.
              O marketing gera leads que não convertem, o comercial não sabe
              comunicar valor, e o produto não responde ao que o mercado
              precisa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
