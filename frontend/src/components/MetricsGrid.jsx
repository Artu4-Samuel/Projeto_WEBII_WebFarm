import { Layers, TrendingUp, Tractor, Wrench, DollarSign, CheckCircle, Users } from 'lucide-react';

export default function MetricsGrid() {
  const metrics = [
    {
      id: 'rebanho',
      label: 'Total do Rebanho',
      value: '1.240',
      unit: 'cabeças',
      subtext: '+18 nascimentos este mês',
      icon: Layers,
      trendIcon: TrendingUp,
      iconColor: 'text-[#237a32] bg-emerald-50',
      borderLeft: 'border-l-4 border-l-[#237a32]',
      subColor: 'text-emerald-700'
    },
    {
      id: 'maquinas',
      label: 'Máquinas Operacionais',
      value: '12 / 14',
      unit: 'em atividade',
      subtext: '2 em manutenção preventiva',
      icon: Tractor,
      trendIcon: Wrench,
      iconColor: 'text-slate-700 bg-slate-100',
      subColor: 'text-amber-700'
    },
    {
      id: 'financeiro',
      label: 'Fluxo Financeiro (Mês)',
      value: 'R$ 142.800',
      unit: 'positivo',
      subtext: 'Vendas de gado & grãos em dia',
      icon: DollarSign,
      trendIcon: CheckCircle,
      iconColor: 'text-[#237a32] bg-emerald-50',
      valueColor: 'text-[#237a32]',
      unitColor: 'text-emerald-800',
      subColor: 'text-slate-500'
    },
    {
      id: 'equipe',
      label: 'Equipe em Campo',
      value: '8',
      unit: 'colaboradores',
      subtext: '100% dos setores operando hoje',
      icon: Users,
      iconColor: 'text-slate-700 bg-slate-100',
      dotColor: 'bg-emerald-500',
      subColor: 'text-emerald-700'
    }
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((m) => {
        const Icon = m.icon;
        const TrendIcon = m.trendIcon;

        return (
          <div
            key={m.id}
            className={`bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden ${
              m.borderLeft || ''
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                {m.label}
              </span>
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center ${m.iconColor}`}
              >
                <Icon className="w-4 h-4" />
              </div>
            </div>

            <div
              className={`text-2xl font-extrabold tracking-tight ${
                m.valueColor || 'text-slate-900'
              }`}
            >
              {m.value}{' '}
              <span
                className={`text-sm font-semibold ${
                  m.unitColor || 'text-slate-500'
                }`}
              >
                {m.unit}
              </span>
            </div>

            <div className={`mt-2.5 flex items-center gap-1.5 text-xs font-medium ${m.subColor}`}>
              {TrendIcon && <TrendIcon className="w-3.5 h-3.5 shrink-0" />}
              {m.dotColor && <span className={`w-2 h-2 rounded-full shrink-0 ${m.dotColor}`} />}
              <span>{m.subtext}</span>
            </div>
          </div>
        );
      })}
    </section>
  );
}
