import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { ComparisonData } from '../types';

interface SavingsChartProps {
  data: ComparisonData[];
}

export const SavingsChart: React.FC<SavingsChartProps> = ({ data }) => {
  return (
    <div className="h-full w-full flex flex-col">
      <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-4 text-center">
        Cumulative Cost Analysis (5 Years)
      </h3>
      <div className="flex-1 min-h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 0,
            }}
            barGap={4}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
            <XAxis 
                dataKey="year" 
                stroke="#64748b" 
                tick={{fontSize: 12, fill: '#94a3b8'}}
                tickLine={false}
                axisLine={false}
                dy={10}
            />
            <YAxis 
                stroke="#64748b" 
                unit="$" 
                tick={{fontSize: 12, fill: '#94a3b8'}}
                tickLine={false}
                axisLine={false}
                width={45}
            />
            <Tooltip
              cursor={{ fill: '#334155', opacity: 0.2 }}
              contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  borderColor: '#334155', 
                  color: '#f1f5f9',
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}
              itemStyle={{ fontSize: '12px' }}
            />
            <Legend 
                verticalAlign="top" 
                height={36} 
                iconType="circle" 
                wrapperStyle={{ fontSize: '12px', fontWeight: 600 }}
            />
            {/* Competitor Bar */}
            <Bar 
                dataKey="proprietaryCost" 
                name="Competitor" 
                fill="#ef4444" 
                radius={[4, 4, 0, 0]} 
                barSize={32}
            />
            {/* RazorReach Bar */}
            <Bar 
                dataKey="universalCost" 
                name="RazorReach" 
                fill="#10b981" 
                radius={[4, 4, 0, 0]} 
                barSize={32}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
