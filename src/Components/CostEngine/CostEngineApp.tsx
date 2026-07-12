import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend 
} from 'recharts';
import { 
  Sprout, Tractor, HandCoins, FlaskConical, Leaf, 
  Bug, Scissors, Droplets, Users, Cog, 
  Tractor as HarvesterIcon, Truck, PlusCircle, IndianRupee, MapPin
} from 'lucide-react';

import cropCostsData from '../../data/crop-costs.json';
import AnimatedCounter from './AnimatedCounter';
import { TrendingUp, TrendingDown } from 'lucide-react';

// TypeScript interfaces for our data structure
interface CropCostData {
  cropName: string;
  expectedYieldPerAcreKg?: number;
  seedCostPerAcre: number;
  landPreparationCost: number;
  fertilizerCost: number;
  organicManureCost: number;
  pesticideCost: number;
  weedControlCost: number;
  irrigationCost: number;
  labourCost: number;
  machineryCost: number;
  harvestingCost: number;
  transportCost: number;
  miscellaneousCost: number;
}

const cropList: CropCostData[] = cropCostsData as CropCostData[];

// Define categories with corresponding icons and colors for mapping
const expenseCategories = [
  { key: 'seedCostPerAcre', label: 'Seed Cost', icon: Sprout, color: '#00D084' },
  { key: 'landPreparationCost', label: 'Land Prep', icon: Tractor, color: '#F9A825' },
  { key: 'fertilizerCost', label: 'Fertilizer', icon: FlaskConical, color: '#42A5F5' },
  { key: 'organicManureCost', label: 'Organic Manure', icon: Leaf, color: '#4CAF50' },
  { key: 'pesticideCost', label: 'Pesticide', icon: Bug, color: '#EF5350' },
  { key: 'weedControlCost', label: 'Weed Control', icon: Scissors, color: '#AB47BC' },
  { key: 'irrigationCost', label: 'Irrigation', icon: Droplets, color: '#26C6DA' },
  { key: 'labourCost', label: 'Labour', icon: Users, color: '#FFA726' },
  { key: 'machineryCost', label: 'Machinery', icon: Cog, color: '#8D6E63' },
  { key: 'harvestingCost', label: 'Harvesting', icon: HarvesterIcon, color: '#FFCA28' },
  { key: 'transportCost', label: 'Transport', icon: Truck, color: '#5C6BC0' },
  { key: 'miscellaneousCost', label: 'Misc Cost', icon: PlusCircle, color: '#78909C' }
] as const;

const CostEngineApp: React.FC = () => {
  const [selectedCropName, setSelectedCropName] = useState<string>(cropList[0].cropName);
  const [landArea, setLandArea] = useState<number>(1);
  const [marketPrice, setMarketPrice] = useState<number>(0);

  // Find the currently selected crop data
  const currentCropData = useMemo(() => {
    return cropList.find(c => c.cropName === selectedCropName) || cropList[0];
  }, [selectedCropName]);

  // Calculate scaled expenses and chart data
  const { chartData, totalCost, categorizedExpenses, totalYield, grossIncome, netProfit } = useMemo(() => {
    let total = 0;
    const chart: { name: string; value: number; color: string }[] = [];
    const expenses: { label: string; value: number; icon: any; color: string }[] = [];

    expenseCategories.forEach((cat) => {
      const baseCost = currentCropData[cat.key as keyof CropCostData] as number;
      const scaledCost = baseCost * (landArea > 0 ? landArea : 0);
      
      total += scaledCost;
      
      if (scaledCost > 0) {
        chart.push({
          name: cat.label,
          value: scaledCost,
          color: cat.color
        });
        expenses.push({
          label: cat.label,
          value: scaledCost,
          icon: cat.icon,
          color: cat.color
        });
      }
    });

    // Calculate Profit Metrics
    const baseYield = currentCropData.expectedYieldPerAcreKg || 0;
    const totalYield = baseYield * (landArea > 0 ? landArea : 0);
    const grossIncome = totalYield * (marketPrice > 0 ? marketPrice : 0);
    const netProfit = grossIncome - total;

    return { chartData: chart, totalCost: total, categorizedExpenses: expenses, totalYield, grossIncome, netProfit };
  }, [currentCropData, landArea, marketPrice]);

  // Framer motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div id="crop-cost-engine" className="w-full max-w-7xl mx-auto text-white rounded-3xl p-6 lg:p-10 relative overflow-hidden bg-[#041C18]/60 backdrop-blur-xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D084]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#42A5F5]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-10 relative z-10">
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 drop-shadow-lg">
          AI Crop <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D084] to-[#00C2C7]">Cost Estimator</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Select your crop and land area to automatically generate a highly accurate, localized cultivation expense breakdown.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">
        
        {/* Left Column: Inputs & Total */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          
          {/* Input Card */}
          <div className="bg-[#041C18]/85 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-xl space-y-6">
            <div className="mb-6">
              <label className="block text-gray-300 text-sm font-bold mb-2 flex items-center gap-2">
                <Sprout size={18} className="text-[#00D084]" /> Crop Selection
              </label>
              <select 
                value={selectedCropName} 
                onChange={(e) => setSelectedCropName(e.target.value)}
                className="w-full bg-black/40 border border-white/10 text-white text-lg rounded-xl px-4 py-3 focus:outline-none focus:border-[#00D084] focus:ring-1 focus:ring-[#00D084] transition-colors appearance-none cursor-pointer"
              >
                {cropList.map(crop => (
                  <option key={crop.cropName} value={crop.cropName} className="bg-[#041C18] text-white">
                    {crop.cropName}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-bold mb-2 flex items-center gap-2">
                <MapPin size={18} className="text-[#F9A825]" /> Land Area (Acres)
              </label>
              <input 
                type="number" 
                min="0.1"
                step="0.1"
                value={landArea} 
                onChange={(e) => setLandArea(Number(e.target.value))}
                className="w-full bg-black/40 border border-white/10 text-white text-lg rounded-xl px-4 py-3 focus:outline-none focus:border-[#F9A825] focus:ring-1 focus:ring-[#F9A825] transition-colors"
                placeholder="e.g. 2.5"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-bold mb-2 flex items-center gap-2">
                <IndianRupee size={18} className="text-[#38BDF8]" /> Market Selling Price (₹/Kg)
              </label>
              <input 
                type="number" 
                min="0"
                step="1"
                value={marketPrice || ''} 
                onChange={(e) => setMarketPrice(Number(e.target.value))}
                className="w-full bg-black/40 border border-white/10 text-white text-lg rounded-xl px-4 py-3 focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-colors"
                placeholder="e.g. 25"
              />
            </div>
          </div>

          {/* Total Cost Highlight Card */}
          <motion.div 
            key={totalCost}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gradient-to-br from-[#063B35] to-[#041C18] rounded-2xl p-6 border border-[#00D084]/30 shadow-[0_0_30px_rgba(0,208,132,0.15)] flex flex-col items-center justify-center text-center"
          >
            <HandCoins size={32} className="text-[#00D084] mb-3 drop-shadow-md" />
            <h3 className="text-gray-300 text-xs font-bold uppercase tracking-widest mb-1">Total Estimated Cost</h3>
            <div className="text-3xl lg:text-4xl font-extrabold text-white flex items-center justify-center gap-1 drop-shadow-lg">
              <span className="text-2xl text-[#00D084]">₹</span>
              <AnimatedCounter value={totalCost} />
            </div>
          </motion.div>

          {/* Net Profit Highlight Card */}
          <motion.div 
            key={netProfit}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={`rounded-2xl p-6 border shadow-lg flex flex-col items-center justify-center text-center ${netProfit >= 0 ? 'bg-gradient-to-br from-green-900/40 to-black/60 border-green-500/30' : 'bg-gradient-to-br from-red-900/40 to-black/60 border-red-500/30'}`}
          >
            {netProfit >= 0 ? <TrendingUp size={32} className="text-green-400 mb-3" /> : <TrendingDown size={32} className="text-red-400 mb-3" />}
            <h3 className="text-gray-300 text-xs font-bold uppercase tracking-widest mb-1">Estimated Net Profit</h3>
            <div className={`text-3xl lg:text-4xl font-extrabold flex items-center justify-center gap-1 drop-shadow-lg ${netProfit >= 0 ? 'text-white' : 'text-red-200'}`}>
              <span className={`text-2xl ${netProfit >= 0 ? 'text-green-400' : 'text-red-400'}`}>₹</span>
              <AnimatedCounter value={Math.abs(netProfit)} />
            </div>
            {netProfit < 0 && <p className="text-xs text-red-400 mt-2 font-bold uppercase">Projected Loss</p>}
            <p className="text-xs text-gray-400 mt-2 font-medium">Gross Income: ₹{grossIncome.toLocaleString('en-IN')} | Yield: {totalYield.toLocaleString('en-IN')} Kg</p>
          </motion.div>

          {/* Chart Wrapper */}
          <div className="bg-[#041C18]/85 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-xl h-80 flex flex-col">
            <h3 className="text-gray-300 text-sm font-bold uppercase tracking-widest mb-4 text-center">Cost Distribution</h3>
            <div className="flex-1 w-full min-h-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                    stroke="none"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value: any) => [`₹${Number(value).toLocaleString('en-IN')}`, 'Cost']}
                    contentStyle={{ backgroundColor: '#041C18', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff' }}
                    itemStyle={{ color: '#fff', fontWeight: 'bold' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>

        {/* Right Column: Detailed Grid */}
        <div className="lg:col-span-8">
          <h3 className="text-2xl font-bold mb-6 text-white border-b border-white/10 pb-4 flex items-center gap-2">
            Detailed Breakdown
          </h3>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {categorizedExpenses.map((expense) => {
                const Icon = expense.icon;
                return (
                  <motion.div 
                    key={expense.label}
                    variants={itemVariants}
                    layout
                    className="bg-[#041C18]/80 hover:bg-[#041C18] backdrop-blur-md rounded-xl p-5 border border-white/5 hover:border-[#00D084]/40 transition-colors shadow-lg group relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: expense.color }}></div>
                    <div className="flex items-start justify-between mb-3">
                      <div 
                        className="p-2 rounded-lg bg-black/30 backdrop-blur-md shadow-inner"
                        style={{ color: expense.color }}
                      >
                        <Icon size={20} />
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">{expense.label}</p>
                      <p className="text-xl font-extrabold text-white flex items-center gap-1">
                        <span className="text-gray-500 text-sm">₹</span>
                        <AnimatedCounter value={expense.value} />
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default CostEngineApp;
