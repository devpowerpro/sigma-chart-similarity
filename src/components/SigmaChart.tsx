
import React from 'react';
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

interface SigmaDataPoint {
  Time: string;
  Mean: number;
  Sigma: number;
  Sum: number;
  Cpk: number;
  Cpm: number;
  Ppk: number;
}

interface SigmaChartProps {
  data: SigmaDataPoint[];
}

const SigmaChart: React.FC<SigmaChartProps> = ({ data }) => {
  // Constants for control limits
  const UCL_MEAN = 32.79;
  const LCL_MEAN = 27.13;
  const TARGET_MEAN = 29.96;
  const UCL_SIGMA = 4.14;
  const LCL_SIGMA = 0;
  const TARGET_SIGMA = 1.98;

  return (
    <div className="w-full space-y-6">
      {/* Mean Chart */}
      <div className="h-[300px] w-full bg-white p-4 rounded-lg shadow-sm">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="Time" />
            <YAxis
              domain={[26, 34]}
              ticks={[27, 28, 29, 30, 31, 32, 33]}
              width={60}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid #f0f0f0',
                borderRadius: '6px',
              }}
            />
            <ReferenceLine
              y={UCL_MEAN}
              stroke="#ff4444"
              strokeWidth={1}
              label={{ value: 'UCL-S3=32.79', position: 'right' }}
            />
            <ReferenceLine
              y={TARGET_MEAN}
              stroke="#666"
              strokeWidth={1}
              strokeDasharray="3 3"
              label={{ value: 'Target=29.96', position: 'right' }}
            />
            <ReferenceLine
              y={LCL_MEAN}
              stroke="#0066cc"
              strokeWidth={1}
              label={{ value: 'LCL-S3=27.13', position: 'right' }}
            />
            <Line
              type="monotone"
              dataKey="Mean"
              stroke="#22c55e"
              strokeWidth={2}
              dot={{ fill: '#22c55e', r: 4 }}
              activeDot={{ r: 6 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Sigma Chart */}
      <div className="h-[300px] w-full bg-white p-4 rounded-lg shadow-sm">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="Time" />
            <YAxis domain={[0, 5]} ticks={[0, 1, 2, 3, 4, 5]} width={60} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid #f0f0f0',
                borderRadius: '6px',
              }}
            />
            <ReferenceLine
              y={UCL_SIGMA}
              stroke="#ff4444"
              strokeWidth={1}
              label={{ value: 'UCL-S3=4.14', position: 'right' }}
            />
            <ReferenceLine
              y={TARGET_SIGMA}
              stroke="#666"
              strokeWidth={1}
              strokeDasharray="3 3"
              label={{ value: 'Sigma=1.98', position: 'right' }}
            />
            <ReferenceLine
              y={LCL_SIGMA}
              stroke="#0066cc"
              strokeWidth={1}
              label={{ value: 'LCL-S3=0.00', position: 'right' }}
            />
            <Line
              type="monotone"
              dataKey="Sigma"
              stroke="#22c55e"
              strokeWidth={2}
              dot={{ fill: '#22c55e', r: 4 }}
              activeDot={{ r: 6 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SigmaChart;
