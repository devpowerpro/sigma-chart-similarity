
import React from 'react';
import SigmaChart from '../components/SigmaChart';

const sigmaData = {
  "sigma": [
    {
      "Time": "10:54",
      "Mean": 28.91,
      "Sigma": 2.18,
      "Sum": 144.5,
      "Cpk": 0.483,
      "Cpm": 0.584,
      "Ppk": 0.453
    },
    {
      "Time": "11:09",
      "Mean": 31.51,
      "Sigma": 1.66,
      "Sum": 157.6,
      "Cpk": 0.487,
      "Cpm": 0.587,
      "Ppk": 0.456
    },
    {
      "Time": "11:24",
      "Mean": 29.87,
      "Sigma": 2.65,
      "Sum": 149.3,
      "Cpk": 0.486,
      "Cpm": 0.586,
      "Ppk": 0.455
    },
    {
      "Time": "11:39",
      "Mean": 31.57,
      "Sigma": 1.24,
      "Sum": 157.9,
      "Cpk": 0.491,
      "Cpm": 0.59,
      "Ppk": 0.458
    },
    {
      "Time": "11:54",
      "Mean": 31.35,
      "Sigma": 2.17,
      "Sum": 156.7,
      "Cpk": 0.492,
      "Cpm": 0.591,
      "Ppk": 0.46
    },
    {
      "Time": "12:09",
      "Mean": 29.91,
      "Sigma": 2.99,
      "Sum": 149.5,
      "Cpk": 0.491,
      "Cpm": 0.589,
      "Ppk": 0.458
    },
    {
      "Time": "12:24",
      "Mean": 31.66,
      "Sigma": 2.07,
      "Sum": 158.3,
      "Cpk": 0.494,
      "Cpm": 0.592,
      "Ppk": 0.46
    },
    {
      "Time": "12:39",
      "Mean": 30.06,
      "Sigma": 2.12,
      "Sum": 150.3,
      "Cpk": 0.494,
      "Cpm": 0.591,
      "Ppk": 0.461
    },
    {
      "Time": "12:54",
      "Mean": 31.9,
      "Sigma": 4.18,
      "Sum": 159.5,
      "Cpk": 0.491,
      "Cpm": 0.589,
      "Ppk": 0.457
    },
    {
      "Time": "13:09",
      "Mean": 32.5,
      "Sigma": 2.13,
      "Sum": 162.5,
      "Cpk": 0.495,
      "Cpm": 0.591,
      "Ppk": 0.459
    },
    {
      "Time": "13:24",
      "Mean": 32.25,
      "Sigma": 3.71,
      "Sum": 161.2,
      "Cpk": 0.494,
      "Cpm": 0.59,
      "Ppk": 0.457
    },
    {
      "Time": "13:39",
      "Mean": 30.78,
      "Sigma": 3.61,
      "Sum": 153.9,
      "Cpk": 0.493,
      "Cpm": 0.587,
      "Ppk": 0.455
    }
  ]
};

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-gray-900">Sigma Analysis Chart</h1>
          <p className="mt-2 text-gray-600">Process control monitoring showing Mean and Sigma values over time</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <SigmaChart data={sigmaData.sigma} />
        </div>
      </div>
    </div>
  );
};

export default Index;
