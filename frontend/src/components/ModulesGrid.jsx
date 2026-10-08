import {
  Layers,
  Truck,
  TrendingUp,
  Users,
  Wheat,
  AlertCircle,
  ArrowRight
} from 'lucide-react';

export default function ModulesGrid({ onNavigateModule }) {
  const modules = [
    {
      id: 'animais',
      tag: 'PECUÁRIA',
      tagStyle: 'text-[#237a32] bg-[#237a32]/10',
      title: 'Cadastro e Rastreabilidade',
      description: 'Controle por código de brinco, pesagens periódicas, vacinas e lotes de corte/leite.',
      footerInfo: '1.240 animais cadastrados',
      actionText: 'Acessar',
      icon: Layers,
      iconBox: 'bg-[#237a32]/10 text-[#237a32]'
    },
    {
      id: 'maquinas',
      tag: 'FROTA & EQUIPAMENTOS',
      tagStyle: 'text-slate-700 bg-slate-100',
      title: 'Tratores e Implementos',
      description: 'Acompanhamento de horímetro, trocas de óleo e revisões programadas de colheitadeiras.',
      footerInfo: '14 unidades registradas',
      actionText: 'Gerenciar',
      icon: Truck,
      iconBox: 'bg-slate-100 text-slate-700'
    },
    {
      id: 'financeiro',
      tag: 'FLUXO DE CAIXA',
      tagStyle: 'text-emerald-800 bg-emerald-100/60',
      title: 'Vendas e Aquisições',
      description: 'Registro simplificado de entradas comerciais e compras de insumos/ração.',
      footerInfo: 'Ver DRE e extrato',
      actionText: 'Extrato',
      icon: TrendingUp,
      iconBox: 'bg-emerald-50 text-[#237a32]'
    },
    {
      id: 'equipe',
      tag: 'RECURSOS HUMANOS',
      tagStyle: 'text-slate-700 bg-slate-100',
      title: 'Equipe da Propriedade',
      description: 'Organização dos operadores de máquinas, vaqueiros e permissões de acesso.',
      footerInfo: '12 funcionários cadastrados',
      actionText: 'Visualizar',
      icon: Users,
      iconBox: 'bg-slate-100 text-slate-700'
    },
    {
      id: 'safra',
      tag: 'LAVOURA & PASTAGEM',
      tagStyle: 'text-amber-800 bg-amber-50',
      title: 'Áreas Plantadas e Colheita',
      description: 'Mapeamento de talhões, culturas de milho/soja e cálculo de produtividade por hectare.',
      footerInfo: '3 talhões em plantio ativo',
      actionText: 'Talhões',
      icon: Wheat,
      iconBox: 'bg-amber-50/80 text-amber-700'
    },
    {
      id: 'alertas',
      tag: 'ATENÇÃO NECESSÁRIA',
      tagStyle: 'text-[#237a32] bg-[#237a32]/15 border border-[#237a32]/20',
      hasPulse: true,
      isSpecial: true,
      title: 'Alertas do Sistema',
      description: '3 animais favoritados para vacinação e 1 revisão preventiva de trator agendada para amanhã.',
      footerInfo: '2 pendências críticas',
      actionText: 'Revisar pendências',
      icon: AlertCircle,
      iconBox: 'bg-[#237a32]/10 text-[#237a32]'
    }
  ];

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#237a32]" />
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
            Ações e Módulos Centrais
          </h3>
        </div>
        <span className="text-xs text-slate-500">6 áreas integradas via MER</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {modules.map((item) => {
          const Icon = item.icon;

          if (item.isSpecial) {
            return (
              <div
                key={item.id}
                onClick={() => onNavigateModule && onNavigateModule(item.id)}
                className="bg-gradient-to-br from-[#f7fbf8] to-white rounded-2xl p-6 border-2 border-[#237a32]/40 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group relative overflow-hidden cursor-pointer"
              >
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-[#237a32]/5 rounded-full pointer-events-none" />
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md flex items-center gap-1.5 ${item.tagStyle}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#237a32] animate-pulse" />
                      {item.tag}
                    </span>
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${item.iconBox}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 group-hover:text-[#237a32] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-emerald-950/10 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#215f2d]">{item.footerInfo}</span>
                  <span className="text-xs font-bold text-[#237a32] group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                    <span>{item.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          }

          return (
            <div
              key={item.id}
              onClick={() => onNavigateModule && onNavigateModule(item.id)}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:border-[#237a32]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${item.tagStyle}`}
                  >
                    {item.tag}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center group-hover:bg-[#237a32] group-hover:text-white transition-colors duration-200 ${item.iconBox}`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-[#237a32] transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">{item.footerInfo}</span>
                <span className="text-xs font-bold text-[#237a32] group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                  <span>{item.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
